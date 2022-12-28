import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
// import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, useWindowDimensions, View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';


const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front'
       }}
       drawerContent={ (props) => <MenuInterno {...props} /> }
    >
      <Drawer.Screen name="Tabs" options={{title: 'Home'}} component={ Tabs} />
      <Drawer.Screen name="SettingsScreen" options={{title: 'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps) => {
  return (

    <DrawerContentScrollView>
      {/* Parte del AVATAR */}
      <View style={styles.avatarContainer}>
        <Image 
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={styles.avatar}
        />
      </View>


      {/* Opciones de menú  */}

      <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuBoton} onPress={() => navigation.navigate('Tabs')}>
            <Text style={styles.menuTexto}>Navegación</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuBoton} onPress={() => navigation.navigate('SettingsScreen')}>
            <Text style={styles.menuTexto}>Ajustes</Text>
          </TouchableOpacity>
      </View>
    </DrawerContentScrollView>

  );
}