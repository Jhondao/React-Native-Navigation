import React from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';



interface Props extends DrawerScreenProps<any, any>{};


export const Pagina1Screen = ({ navigation }: Props) => { 
  
  return (
    <View style={ styles.globalMargin }>
        <Text style={styles.title}> PaginaScreen  </Text>
        <Button
          title='Ir página 2'
          onPress={() => navigation.navigate('Pagina2Screen')}
        />

        <Text style={{
          marginVertical: 20,
          fontSize: 18,
          marginLeft: 5
        }}>Navegar con argumentos</Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{...styles.botonGrande, backgroundColor:'#5856D6'}} onPress={() => navigation.navigate('PersonaScreen', {id:1, nombre:'Pedro'})}>
            <Icon name='body-outline' color='white' size={35}></Icon>
            <Text style={styles.botonGrandeTexto}> Pedro </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{...styles.botonGrande, backgroundColor:'#FF9427'}} onPress={() => navigation.navigate('PersonaScreen', {id:2, nombre:'María'})}>
            <Icon name='woman-outline' color='white' size={35}></Icon>
            <Text style={styles.botonGrandeTexto}> María </Text>
          </TouchableOpacity>
        </View>

    </View>
  )
}
