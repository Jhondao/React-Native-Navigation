import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Text, Platform } from 'react-native';
import { TopTapNavigator } from './TopTabNavigator';


export const Tabs = () => {
  return Platform.OS === 'ios'
      ? <TabsIOS />
      : <TabsAndroid />
}


const BottomTabAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator 
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colores.primary,
        style: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle:{
          fontSize: 15
        },
        tabBarIcon: (props) => {
  
          let iconName: string = '';
          switch(route.name){
            case 'Tab1Screen':
              iconName = 'T1'
            break;
            case 'Tab2Screen':
              iconName = 'T1'
            break;
            case 'StackNavigator':
              iconName = 'St'
            break;
          }
  
          return <Text style={{color: props.color}}> {iconName} </Text>
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab1'}}  component={ Tab1Screen } />
      <BottomTabAndroid.Screen name="TopTapNavigator" options={{title: 'Tap2'}} component={ TopTapNavigator } />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={ StackNavigator } />
    </BottomTabAndroid.Navigator>
  );
}




const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator sceneContainerStyle={{
      backgroundColor: 'white',
    }}
    screenOptions={({route}) => ({
      tabBarActiveTintColor: colores.primary,
      Style: {
        borderTopColor: colores.primary,
        borderTopWidth: 0,
        elevation: 0,
      },
      tabBarLabelStyle:{
        fontSize: 15
      },
      tabBarIcon: (props) => {

        let iconName: string = '';
        switch(route.name){
          case 'Tab1Screen':
            iconName = 'T1'
          break;
          case 'Tab2Screen':
            iconName = 'T1'
          break;
          case 'StackNavigator':
            iconName = 'St'
          break;
        }

        return <Text style={{color: props.color}}> {iconName} </Text>
      }
    })}>
      {/* <Tab.Screen name="Tab1Screen" options={{title: 'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text> }} component={ Tab1Screen } /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab1'}}  component={ Tab1Screen } />
      <BottomTabIOS.Screen name="TopTapNavigator" options={{title: 'Tab2'}} component={ TopTapNavigator } />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={ StackNavigator } />
    </BottomTabIOS.Navigator>
  );
}