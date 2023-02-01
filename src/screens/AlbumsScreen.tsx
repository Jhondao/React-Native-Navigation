import React,{ useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthState, AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {
 
 
  const { logout, authState} = useContext( AuthContext )
 
 
  return (
    <View>

        <View style={styles.globalMargin}>
        <Text style={styles.title}>AlbumScreen</Text>

        {
          authState.isLoggedIn && <Button title="Logout" onPress={logout} />
        }   

        
    </View>
    </View>
)
}
