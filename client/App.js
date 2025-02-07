import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScree';
import RestaurantDetails from './screens/restaurantDetails';
import RestaurantScreen from './screens/restaurantScreen';

const Stcak = createNativeStackNavigator()

function App() {
  return(
    <NavigationContainer>
      <Stcak.Navigator initialRouteName="Home">
        <Stcak.Screen name="Home" componenet={HomeScreen} />
        <Stcak.Screen name="RestaurantDetails" componenet={RestaurantDetails} />  
        <Stcak.Screen name="RestaurantScreen" componenet={RestaurantScreen} />

      </Stcak.Navigator>
    </NavigationContainer>
  )
}

export default App;