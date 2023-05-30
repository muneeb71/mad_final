import 'react-native-gesture-handler'
import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/screens/Home';
import Destination from './src/screens/Destination';
import Recommendations from './src/screens/Recommendations';
import Checkout from './src/screens/Checkout';
import SingleFlight from './src/screens/SingleFlight';
import Login from './src/screens/Login'
import Register from './src/screens/Register';
import SingleHotel from './src/screens/SingleHotel';
import Flights from './src/screens/Flights';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={Flights}>
        <Drawer.Screen name="Flight Details" component={Flights} />
        <Drawer.Screen name="Register" component={Register} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
