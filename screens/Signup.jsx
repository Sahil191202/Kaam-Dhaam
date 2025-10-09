import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Toast from 'react-native-toast-message';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');
    const [jobCategory, setJobCategory] = useState('');

    const navigation = useNavigation();

    const submit = async () => {
        if (!username || !mobile || !city || !jobCategory) {
            Toast.show({ type: 'error', text1: 'All fields are required' });
            return;
        }
        // Add signup logic here...
    };

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <KeyboardAvoidingView
                style={styles.screen}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                {/* Top teal header section */}
                <View style={styles.header}>
                    <Text style={styles.helloText}>Hello!</Text>
                    <Text style={styles.welcomeText}>Welcome to plantland</Text>
                </View>
                {/* Card with rounded corners */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Create Account</Text>
                    <TextInput
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                        style={styles.input}
                        placeholderTextColor="#686868"
                    />
                    <TextInput
                        placeholder="Mobile Number"
                        value={mobile}
                        onChangeText={setMobile}
                        keyboardType="phone-pad"
                        style={styles.input}
                        placeholderTextColor="#686868"
                    />
                    <TextInput
                        placeholder="City"
                        value={city}
                        onChangeText={setCity}
                        style={styles.input}
                        placeholderTextColor="#686868"
                    />
                    <View style={styles.pickerWrapper}>
                        <Picker
                            selectedValue={jobCategory}
                            onValueChange={setJobCategory}
                            style={styles.picker}
                        >
                            <Picker.Item label="Job Category" value="" />
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
                    <TouchableOpacity style={styles.button} onPress={submit}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.terms}>Terms & Conditions</Text>
            </KeyboardAvoidingView>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#C2E6DF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
    },
    header: {
        width: '100%',
        height: 190,
        backgroundColor: '#177F7B',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 32,
        paddingTop: 50,
        position: 'absolute',
        top: 0,
    },
    helloText: {
        color: '#fff',
        fontSize: 36,
        fontWeight: '700',
    },
    welcomeText: {
        color: '#fff',
        fontSize: 17,
        marginTop: 7,
        fontWeight: '400',
        letterSpacing: 1,
    },
    card: {
        width: '89%',
        backgroundColor: '#E9F4F2',
        borderRadius: 40,
        padding: 30,
        marginTop: 150,
        elevation: 8,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#177F7B',
        marginBottom: 18,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 14,
        padding: 16,
        fontSize: 16,
        marginBottom: 14,
        borderWidth: 0,
        color: '#686868',
    },
    pickerWrapper: {
        backgroundColor: '#fff',
        borderRadius: 14,
        marginBottom: 8,
        overflow: 'hidden',
    },
    picker: {
        width: '100%',
        color: '#686868',
    },
    terms: {
        color: '#686868',
        fontSize: 13,
        textAlign: 'center',
        position: 'absolute',
        bottom: 38,
        alignSelf: 'center',
    },
    button: {
        backgroundColor: '#177F7B',
        borderRadius: 14,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 12,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
});
