import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';

export default function Home() {
  const route = useRoute();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  // Automatically open modal if param is sent
  useEffect(() => {
    if (route.params?.showLanguageDrawer) {
      setDrawerVisible(true);
    }
  }, [route.params]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* Sticky Navbar */}
        <View style={styles.navbar}>
          <Text style={styles.navTitle}>Job Portal</Text>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>

        {/* Scrollable Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.welcome}>Welcome to the Job Portal 👋</Text>
          <Text style={styles.subtitle}>
            Explore jobs, apply easily, and get updates instantly.
          </Text>

          {/* Example job cards */}
          <View style={styles.jobCard}>
            <Text style={styles.jobTitle}>Software Developer</Text>
            <Text style={styles.jobCity}>Pune</Text>
            <TouchableOpacity style={styles.applyBtn}>
              <Text style={styles.applyText}>Apply Now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.jobCard}>
            <Text style={styles.jobTitle}>Graphic Designer</Text>
            <Text style={styles.jobCity}>Mumbai</Text>
            <TouchableOpacity style={styles.applyBtn}>
              <Text style={styles.applyText}>Apply Now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.jobCard}>
            <Text style={styles.jobTitle}>Customer Support</Text>
            <Text style={styles.jobCity}>Delhi</Text>
            <TouchableOpacity style={styles.applyBtn}>
              <Text style={styles.applyText}>Apply Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* Bottom Drawer/Modal for Language Selection */}
      <Modal
        visible={drawerVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setDrawerVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.drawer}>
            <Text style={styles.drawerTitle}>Select Language</Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={setSelectedLanguage}>
              <Picker.Item label="English" value="en" />
              <Picker.Item label="Hindi" value="hi" />
              <Picker.Item label="Marathi" value="mr" />
              <Picker.Item label="Tamil" value="ta" />
              {/* Add more languages as required */}
            </Picker>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setDrawerVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  navbar: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  navTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  navButton: {
    backgroundColor: '#1e40af',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  navButtonText: { color: '#fff', fontWeight: '600' },
  scrollContent: {
    padding: 20,
    paddingTop: 10,
  },
  welcome: { fontSize: 22, fontWeight: '700', color: '#111827', marginTop: 10 },
  subtitle: { color: '#555', marginVertical: 8 },
  jobCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginTop: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  jobTitle: { fontSize: 18, fontWeight: '700', color: '#111827' },
  jobCity: { fontSize: 14, color: '#666', marginVertical: 4 },
  applyBtn: {
    backgroundColor: '#2563eb',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 8,
  },
  applyText: { color: '#fff', fontWeight: '600' },
  modalOverlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.4)' },
  drawer: { backgroundColor: '#fff', borderTopLeftRadius: 18, borderTopRightRadius: 18, padding: 24 },
  drawerTitle: { fontSize: 22, fontWeight: '600', marginBottom: 10 },
  closeButton: { marginTop: 18, padding: 12, backgroundColor: '#eee', borderRadius: 6, alignItems: 'center' },
  closeButtonText: { fontSize: 16, color: '#2563eb', fontWeight: '700' },
});
