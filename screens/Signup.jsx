import { Picker } from '@react-native-picker/picker';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';



export default function Signup() {
    const [username, setUsername] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');
    const [jobCategory, setJobCategory] = useState('');
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();


    const BACKEND_URL = 'http://localhost:5000';
    const TOAST_DURATION_MS = 5000;

    const submit = async () => {
        if (!username || !mobile || !city || !jobCategory) {
            Toast.show({ type: 'error', text1: 'All fields are required' });
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(`${BACKEND_URL}/api/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, mobile, city, jobCategory }),
            });
            const data = await res.json();
            setLoading(false);

            if (data.success) {
                setUsername('');
                setMobile('');
                setCity('');
                setJobCategory('');
                Toast.show({
                    type: 'custom_whatsapp',
                    text1:
                        'Send Hi/Hello on WhatsApp 2983490223, then only you can proceed with jobs',
                    visibilityTime: TOAST_DURATION_MS,
                });
                // Navigate to Home page
                navigation.navigate('Home') // adjust the path if your Home page is named differently
            } else {
                Toast.show({ type: 'error', text1: 'Submit failed', text2: data.message });
            }
        } catch (err) {
            setLoading(false);
            Toast.show({ type: 'error', text1: 'Network error', text2: err.message });
        }
    };

    return (
        <>
            {/* Hide top "index" header only */}
            <Stack.Screen options={{ headerShown: false }} />

            {/* Your actual Signup content below */}
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <View style={styles.form}>
                    <Text style={styles.title}>Signup</Text>

                    <TextInput
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Mobile number"
                        value={mobile}
                        onChangeText={setMobile}
                        keyboardType="phone-pad"
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="City"
                        value={city}
                        onChangeText={setCity}
                        style={styles.input}
                    />
                    <View style={styles.input}>
                        <Picker
                            selectedValue={jobCategory}
                            onValueChange={(itemValue) => setJobCategory(itemValue)}
                        >
                            <Picker.Item label="Select Job Category" value="" />
                            <Picker.Item label="Nurse" value="nurse" />
                            <Picker.Item label="Caretaker" value="caretaker" />
                            <Picker.Item label="Housecleaner" value="housecleaner" />
                            <Picker.Item label="Carpenter" value="carpenter" />
                            <Picker.Item label="Cook" value="cook" />
                            <Picker.Item label="Babysitter" value="babysitter" />
                            <Picker.Item label="Gardener" value="gardener" />
                            <Picker.Item label="Security Guard" value="security_guard" />
                            <Picker.Item label="General Worker" value="general_worker" />
                        </Picker>
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={submit}
                        disabled={loading}>
                        {loading ? (
                            <ActivityIndicator color="#fff" />
                        ) : (
                            <Text style={styles.buttonText}>Submit</Text>
                        )}
                    </TouchableOpacity>

                    <Text style={styles.small}>
                        After submitting you'll see a toast with WhatsApp instructions.
                    </Text>
                </View>
            </KeyboardAvoidingView>
        </>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f8f9fa' },
    form: { width: '100%', maxWidth: 500, backgroundColor: '#fff', padding: 20, borderRadius: 8, elevation: 4 },
    title: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
    input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 6, padding: 12, marginTop: 10 },
    button: { backgroundColor: '#2563eb', padding: 14, borderRadius: 8, marginTop: 16, alignItems: 'center' },
    buttonText: { color: '#fff', fontWeight: '700' },
    small: { marginTop: 12, color: '#666', fontSize: 12, textAlign: 'center' },
});
