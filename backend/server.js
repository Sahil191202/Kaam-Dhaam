require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const User = require('./model/User');
const connectToMongo = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

connectToMongo();

// Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587', 10),
  secure: (process.env.EMAIL_SECURE === 'true'),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Basic route
app.get('/', (req, res) => {
  res.send({ ok: true, msg: 'Backend up' });
});

// Signup endpoint
app.post('/api/signup', async (req, res) => {
  try {
    const { username, mobile, city, jobCategory } = req.body;
    if (!username || !mobile || !city || !jobCategory) {
      return res.status(400).json({ success: false, message: 'All fields required' });
    }

    const user = new User({ username, mobile, city, jobCategory });
    await user.save();

    // Send email to admin
    const adminEmail = process.env.ADMIN_EMAIL;
    if (adminEmail) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: adminEmail,
        subject: `New Signup: ${username}`,
        text: `A new user has signed up.\n\nUsername: ${username}\nMobile: ${mobile}\nCity: ${city}\nJob Category: ${jobCategory}\n\nTime: ${new Date().toISOString()}`
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error('Error sending mail', err);
          // still return success (data saved) but include mail error
          return res.status(200).json({ success: true, message: 'Saved but email failed', mailError: err.toString() });
        } else {
          return res.status(200).json({ success: true, message: 'Saved and email sent', info });
        }
      });
    } else {
      return res.status(200).json({ success: true, message: 'Saved but no admin email configured' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error', error: err.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});