import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation } from '@react-navigation/native';

const ProfileButton = () => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Perfil')}>
      <Icon name='user' size={25} color={"#000"} /> 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 75, // Define a borda circular
        backgroundColor: 'white', // Cor de fundo do botão
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        left: 10, 
    }
});

export default ProfileButton;