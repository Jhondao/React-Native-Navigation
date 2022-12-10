import React from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';



interface Props extends DrawerScreenProps<any, any>{};


export const Pagina1Screen = ({ navigation }: Props) => {
  return (
    <View style={ styles.globalMargin }>
        <Text style={styles.title}> PaginaScreen  </Text>
        <Button
          title='Ir página 2'
          onPress={() => navigation.navigate('Pagina2Screen')}
        />

        <Text>Navegar con argumentos</Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{...styles.botonGrande, backgroundColor:'#5856D6'}} onPress={() => navigation.navigate('PersonaScreen', {id:1, nombre:'Pedro'})}>
            <Text style={styles.botonGrandeTexto}> Pedro </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{...styles.botonGrande, backgroundColor:'#FF9427'}} onPress={() => navigation.navigate('PersonaScreen', {id:2, nombre:'María'})}>
            <Text style={styles.botonGrandeTexto}> María </Text>
          </TouchableOpacity>
        </View>

    </View>
  )
}
