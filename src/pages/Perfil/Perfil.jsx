import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../../context';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function ProfileScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState(null);
  const [userData, setUserData] = useState({
    name: 'Maria Eduarda Gomes de Oliveira',
    email: 'maria.eduarda@example.com',
    phone: '+55 (81) 9999-9999',
  });
  const navigation = useNavigation()
  const {user} = useAuth()

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //     setRegion({
  //       latitude: location.coords.latitude,
  //       longitude: location.coords.longitude,
  //       latitudeDelta: 0.0922,
  //       longitudeDelta: 0.0421,
  //     });
  //   })();
  // }, []);

  return (
    <View style={styles.container}>
      {/* <View style={styles.profileHeader}>
        <Image
          source={require('../../../assets/logo.png')} // colocar imagem, subi pelo code space ai não consegui colcoar uma imagem a tempo
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{userData.name}</Text>
          <Text style={styles.profileEmail}>{userData.email}</Text>
          <Text style={styles.profilePhone}>{userData.phone}</Text>
        </View>
      </View>

      <View style={styles.profileBody}>
        <View style={styles.inputContainer}>
          <Icon name="ios-location" size={24} color="#888" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Endereço atual"
            value={region ? `${region.latitude}, ${region.longitude}` : ''}
            editable={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="ios-email" size={24} color="#888" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={userData.email}
            editable={false}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="ios-call" size={24} color="#888" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={userData.phone}
            editable={false}
          />
        </View>
      </View> */}
      <Image source={require('../../../assets/user.png')} style={styles.profileImage}/>
      <Text style={styles.profileName}>Maria Eduarda Gomes de Oliveira</Text>

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.containerTextInput} onPress={() => navigation.navigate('Feedback')}>
        <Icon name='home' size={25} color={"#000"} paddingRight={10}/>
        <Text style={styles.input}>Casa</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.containerTextInput} onPress={() => navigation.navigate('Feedback')}>
        <Icon name='school' size={25} color={"#000"} paddingRight={10}/>
        <Text style={styles.input}>Escola</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.containerTextInput} onPress={() => navigation.navigate('Favoritos')}>
        <Icon name='star' size={25} color={"#000"} paddingRight={10}/>
        <Text style={styles.input}>Pontos Favoritos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.containerTextInput} onPress={() => navigation.navigate('Feedback')}>
        <Icon name='chatbubble' size={25} color={"#000"} paddingRight={10}/>
        <Text style={styles.input}>Feedback</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.containerTextInput} onPress={() => navigation.navigate('Feedback')}>
        <Icon name='close' size={25} color={"#000"} paddingRight={10}/>
        <Text style={styles.input}>Sair</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems:"center",
  },
  containerTextInput: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor:"#EEEEEE",
    height:60,
    width:350,
    borderRadius:10,
    marginTop:20,
    paddingLeft:20,
},
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 40,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:15,
    marginBottom:10,
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  profilePhone: {
    fontSize: 16,
    color: '#666',
  },
  profileBody: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position:"relative"
  },
  input:{
    fontSize:20,
    },
    // containerTextInput:{
    //   width:350,
    //   height:80
    // },
    iconImg:{
      position:'absolute',
      width:60,
      height:50,
      top: 43,
      left:10,
      zIndex:100
    }
});