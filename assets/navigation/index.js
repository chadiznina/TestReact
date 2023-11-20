import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Home from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
const AuthStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
const NavigationProvider = () => {
  return <AuthStack />;
};
export default NavigationProvider;