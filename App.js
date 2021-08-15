import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen, SignUpScreen, WelcomeScreen, AgreeScreen } from './src/screens';
//import { Provider as LocationProvider } from './src/context/LocationContext';
import { navigationRef } from './src/navigationRef';

import Tabs from './src/navigation/tabs';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Agreement" component={AgreeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={Tabs} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
      <App/> 
  );
};