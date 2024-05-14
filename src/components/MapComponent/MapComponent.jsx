import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import Api from "../../api/api";
import MapViewDirections from "react-native-maps-directions";

export default function Map() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState(null);
  const [responseEscola,setResponseEscola] = useState([]);
  const [responseParada, setResponseParada] = useState([]);
  const [responseRota4, setResponseRota4] = useState([]);
  const navigation = useNavigation();

  const Icones = async ()=>{
    try{
      const res_parada = await Api.get('allParadas')
      const res_escola = await Api.get('escola')
      const res_rota4 = await Api.get('rota04ida')
       setResponseEscola(res_escola.data)
       setResponseParada(res_parada.data)   
       setResponseRota4(res_rota4.data)  
    }catch(erro){
      console.log("erro" + erro)
    }
  } 
  
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        } 
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
  
        await Icones();
        
      } catch (error) {
        console.log("Erro ao buscar localização:", error);
      }
    };

    fetchLocation();
  }, []);

    const origin = {
      latitude:  -8.007265048140518,
      longitude:-35.026953110495974
    }
    const stopsCoords = responseRota4.map((rota4)=>({
      latitude: rota4.latitude_parada ? parseFloat(rota4.latitude_parada) : 0,
      longitude: rota4.longitude_parada ? parseFloat(rota4.longitude_parada) : 0
    }))
    const destination = {
      latitude: -7.998526521703519,
      longitude: -35.040417799877204  
    }

  return (
    <View style={{ flex: 1, height: "100%" }}>
      {region && (
        <MapView
          style={{ flex: 1, height: "60%",  position: "relative"  }}
          showsUserLocation
          region={region}
          onRegionChangeComplete={(reg) => setRegion(reg)}
        >
          
          {location && (
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="Seu Local"
              description="Você está aqui"
            >
              <Image
                source={require('../../../assets/laursa1.png')}
                style={{ width: 20, height: 30 }}
              />
            </Marker>
          )}

          {responseEscola.map((escola, index) => (
            <Marker 
              key={index}
              coordinate={{
                latitude: escola.latitude ? parseFloat(escola.latitude) : 0,
                longitude: escola.longitude ? parseFloat(escola.longitude) : 0
              }}
              title={`${escola.nome_escola}`}
            >
              <Image
                source={require('../../../assets/iconEscola.png')}
                style={{ width: 23, height: 28, paddingHorizontal: 10 }}
              />
            </Marker>
          ))}

           {responseParada.map((parada, index) => (
            <Marker 
              key={index}
              coordinate={{
                latitude: parada.latitude_parada ? parseFloat(parada.latitude_parada) : 0,
                longitude: parada.longitude_parada ? parseFloat(parada.longitude_parada) : 0

              }}
              title={`${parada.nome_parada}`} 
              onPress={()=>navigation.navigate('Parada')}
            >
              <Image
                source={require('../../../assets/paradaPeq.png')}
                style={{ width: 21, height: 43, paddingHorizontal: 10 }}
              />
            </Marker>
          ))}

            <MapViewDirections
              origin={origin}
              destination={destination}
              waypoints={stopsCoords}
              apikey={"AIzaSyAyG1FBPSBJD758y53Yff4nuAF6S5Cl-4U"}
              strokeWidth={3} 
              strokeColor="#00FF00" // Cor da linha da rota
              optimizeWaypoints={true} // Otimizar os pontos intermediários para encontrar a rota mais eficiente
              onStart={(params) => {}} // Callback chamada quando a direção começa
              onReady={(result) => {}} 
              onError={(errorMessage) => {}} 
            />
        </MapView>
      )}
      {errorMsg && <Text>{errorMsg}</Text>}

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

});
