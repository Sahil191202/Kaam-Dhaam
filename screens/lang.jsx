import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function HomeScreen() {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('');

    return (
        <>
            {/* Main Content */}
            <View style={styles.homeContainer}>
                <Text style={styles.header}>Welcome Home!</Text>
                <TouchableOpacity
                    style={styles.openDrawerButton}
                    onPress={() => setDrawerVisible(true)}
                >
                    <Text style={styles.openDrawerText}>Open Drawer</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom Drawer/Modal */}
            <Modal
                visible={drawerVisible}
                animationType="slide"
                transparent
                onRequestClose={() => setDrawerVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.drawer}>
                        <Text style={styles.drawerTitle}>Select Language</Text>
                        <Picker
                            selectedValue={selectedLanguage}
                            onValueChange={setSelectedLanguage}
                        >
                            <Picker.Item label="English" value="en" />
                            <Picker.Item label="Hindi" value="hi" />
                            <Picker.Item label="Marathi" value="mr" />
                            <Picker.Item label="Tamil" value="ta" />
                            {/* Add more as needed */}
                        </Picker>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setDrawerVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    homeContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fa' },
    header: { fontSize: 28, marginBottom: 30 },
    openDrawerButton: { backgroundColor: '#2563eb', padding: 14, borderRadius: 8 },
    openDrawerText: { color: '#fff', fontWeight: '700' },
    modalOverlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.4)' },
    drawer: { backgroundColor: '#fff', borderTopLeftRadius: 18, borderTopRightRadius: 18, padding: 24 },
    drawerTitle: { fontSize: 22, fontWeight: '600', marginBottom: 10 },
    closeButton: { marginTop: 18, padding: 12, backgroundColor: '#eee', borderRadius: 6, alignItems: 'center' },
    closeButtonText: { fontSize: 16, color: '#2563eb', fontWeight: '700' },
});
