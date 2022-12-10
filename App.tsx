import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import 'react-native-gesture-handler';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';

export const App = () => {
  return (
    <NavigationContainer> 
      {/* <StackNavigator /> */}
      <MenuLateralBasico />
    </NavigationContainer>
  )
}

export default App;
