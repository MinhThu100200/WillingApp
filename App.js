import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen, SignUpScreen } from './src/screens';
//import { Provider as LocationProvider } from './src/context/LocationContext';

import Tabs from './src/navigation/tabs';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeUser"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
      <App/>
    
  );
};