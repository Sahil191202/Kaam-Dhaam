import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import Signup from '../screens/Signup';

const Stack = createNativeStackNavigator();

// Custom Toast config
const toastConfig = {
  custom_whatsapp: ({ text1 }) => (
    <View style={toastStyles.container}>
      <Text style={toastStyles.text}>{text1}</Text>
      <TouchableOpacity onPress={() => Toast.hide()}>
        <Icon name="close" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  ),
};

export default function App() {
  return (
    <>
        <Stack.Navigator
          initialRouteName="Signup"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>

      <Toast config={toastConfig} />
    </>
  );
}

const toastStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#111827',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  text: { color: '#fff', flex: 1, fontSize: 14 },
});
