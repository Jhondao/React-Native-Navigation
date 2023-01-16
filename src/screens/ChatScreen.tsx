import React from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';


export const ChatScreen = () => {
  return (
    <View>
        <Text>ChatScreen con iconos</Text>
        <Icon name="airplane-outline" size={80} color={ colores.primary}></Icon>
    </View>
)
}
