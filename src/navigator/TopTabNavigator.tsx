import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
              iconName = 'chatbox-ellipses-outline'
            break;
            case 'Contacts':
              iconName = 'people-outline'
            break;
            case 'Albums':
              iconName = 'albums-outline'
            break;
          }
          return <Icon name={iconName} size={20} color={ colores.primary}></Icon>
        }
        })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}