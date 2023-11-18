import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/home';
import Register from '../screens/Register';
import Login from '../screens/Login';
const Stack = createStackNavigator();

const CreateNavigation =()=>{
  return (
    <NavigationContainer >
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}  options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default CreateNavigation

