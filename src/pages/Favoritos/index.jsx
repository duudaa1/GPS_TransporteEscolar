import React from "react";
import { StyleSheet, View, ScrollView} from "react-native";
import Parada from "../../components/Paradas/Paradas";
import Button from "../../components/CustomButton/index";
import { useNavigation } from '@react-navigation/native';

export default function Favoritos() {

    const navigation = useNavigation();

    return (
    <View style={styles.container}>
    <ScrollView>
      <Parada 
      title={'Parada favorita'} 
      subtitle={'Rua dos Amores, 195'}>
      </Parada>

      <Parada 
      title={'Parada favorita'} 
      subtitle={'Rua dos Amores, 195'}>
      </Parada>

      <Parada 
      title={'Parada favorita'} 
      subtitle={'Rua dos Amores, 195'}>
      </Parada>

      <Parada 
      title={'Parada favorita'} 
      subtitle={'Rua dos Amores, 195'}>
      </Parada>

      <Parada 
      title={'Parada favorita'} 
      subtitle={'Rua dos Amores, 195'}>
      </Parada>

      <Parada 
      title={'Parada favorita'} 
      subtitle={'Rua dos Amores, 195'}>
      </Parada>
    </ScrollView>

    <Button
    title={'Ok'}
    ></Button>
    </View>
    );                
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:"center",
    },
});

