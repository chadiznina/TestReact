import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Home from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
const AuthStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginScreen"  screenOptions={{
            headerShown: false,
          }}>
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
      
      />
        <Stack.Screen
        name="Login"
        component={LoginScreen}
      
      />
      <Stack.Screen
        name="HomeScreen"
        component={Home}
       
      />
       <Stack.Screen 
       name="ResetPasswordScreen" component={ResetPasswordScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
const NavigationProvider = () => {
  return <AuthStack />;
};
export default NavigationProvider;