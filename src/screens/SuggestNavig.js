import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Recommendations from './Recommendations';
import Destination from './Destination';

const Stack = createStackNavigator();

const SuggestNavig = () => {
  return (
    <Stack.Navigator
  screenOptions={{
    independent: true,
    headerShown: false
}}
  initialRouteName="Destinations">
  <Stack.Screen
    name="Destinations"
    component={Destination}
  />
  <Stack.Screen
    name="Recommendations"
    component={Recommendations}
  />
</Stack.Navigator>
  )
}

export default SuggestNavig