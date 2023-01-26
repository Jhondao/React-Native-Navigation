import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab1Screen effect');
  },[])
  

  return (
    <View style={ styles.globalMargin}>
        <Text style={ styles.title }> Iconos </Text>
        
        <Text> 
            <TouchableIcon iconName='attach-outline' ></TouchableIcon>  
            <TouchableIcon iconName='airplane-outline'></TouchableIcon>  
            <TouchableIcon iconName='bonfire-outline' ></TouchableIcon>  
            <TouchableIcon iconName='calculator-outline'></TouchableIcon>
            <TouchableIcon iconName='chatbubble-ellipses-outline' ></TouchableIcon>
            <TouchableIcon iconName='images-outline' ></TouchableIcon>
            <TouchableIcon iconName='leaf-outline' ></TouchableIcon>
        </Text>

    </View>
  )
}
