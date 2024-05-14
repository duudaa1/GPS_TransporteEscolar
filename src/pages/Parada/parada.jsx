import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Parada from "../../components/Paradas/Paradas";
import Onibus from "../../components/Onibus/onibus";
import ProfileButton from "../../components/PerfilButton/PerfilButton";
import MapComponent from "../../components/MapComponent/MapComponent";


export default function ParadaView() {

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, height: "100%" }}>

      <MapComponent/>
      <ProfileButton/>
      
      <View style={styles.blocoParadas}>          
      
      <View >
      <Parada 
      title={'Parada favorita'} 
      subtitle={'Rua dos Amores, 195'}>
      </Parada>
      </View>

      <ScrollView>
      <Onibus
      title={'Bela Vista  '}
      subtitle={'Ida'}
      tempo={'5 min'}
      ></Onibus>

      <Onibus
      title={'Várzea Fria'}
      subtitle={'Volta'}
      tempo={'10 min'}
      ></Onibus>
      </ScrollView>

      </View>
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  map: {
    flex: 1,
    height: "50%"
  },
  input:{
    width: '90%',
    height: 40,
    borderColor: '#069AC9',
    borderWidth: 1.3,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    alignSelf:'center',
    flexDirection: 'row',
  },
  view:{

  },
  blocoParadas:{
    flex: 1, 
    height: "35%", 
    paddingTop: 10, 
    backgroundColor: "white", 
    borderRadius: 20, 
    margin: 10, 
    position: "absolute", 
    bottom: 0,
    left: 0,
    right: 0, // Define a largura do bloco igual à largura do contêiner pai
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

});
