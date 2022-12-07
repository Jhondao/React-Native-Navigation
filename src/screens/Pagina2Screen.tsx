import React from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';

export const Pagina2Screen = () => {
  
  const navigator = useNavigation<any>();
  
  return (
    <View style={ styles.globalMargin }>
        <Text style={styles.title}> PaginaScreen  </Text>

        <Button 
          title='Ir página tres'
          onPress={ () => navigator.navigate('Pagina3Screen') }
        />

        

    </View>
  )
}
