import { Stack } from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function Home() {
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
});
