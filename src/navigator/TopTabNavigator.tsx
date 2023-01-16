import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
  
  const {top} = useSafeAreaInsets();
  
  return (
    <Tab.Navigator 
        style={{paddingTop: top}} 
        sceneContainerStyle={{backgroundColor: 'white'}}
        screenOptions={({route}) => ({
         tabBarActiveTintColor: colores.primary,
         tabBarShowIcon: true,
         tabBarIndicatorStyle:{
          backgroundColor: colores.primary,
         },
         style: {
          shadowColor:'transparent',
          elevation: 0,
        },
        tabBarIcon: (props) => {
          let iconName: string = '';
          switch(route.name){
            case 'Chat':
              iconName = 'Ch'
            break;
            case 'Contacts':
              iconName = 'Co'
            break;
            case 'Albums':
              iconName = 'Al'
            break;
          }
          return <Text style={{color: props.color}}> {iconName} </Text>
        }
        })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}