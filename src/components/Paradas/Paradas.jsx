import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Estrela from "../Estrela/Estrela";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Paradas({title, subtitle, onPress, imagem, imageStyle}) {

    const navigation = useNavigation();

    return (
        <View style={styles.bloco}>
            <TouchableOpacity style={styles.enderecos} onPress={onPress}>
            
                <Image source={imagem ? imagem : require('../../../assets/parada2.png')} style={[styles.image, imageStyle]}></Image>
                
                <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                </View>

            </TouchableOpacity>

            <Estrela 
            favoritado={false} 
            onPress={()=>navigation.navigate('Favoritos')}
            // Denifir onPress que é para guardar a informação favorita e adicionar a pagina de favoritos
            ></Estrela>

        </View>
    );                
}

const styles = StyleSheet.create({
    title:{
        color:"black",
        fontSize:20,
        fontWeight:"bold",
    },
    subtitle:{
        color:"#0382C1",
        fontSize:15,
        fontWeight:"bold",
    },
    image:{
        width: 23,
        height: 50,
        marginHorizontal:10,
    },
    info:{
        marginHorizontal:10,
    },
    icon:{
        paddingHorizontal:120,
    },
    enderecos:{
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        paddingEnd:75,
        width: '80%',
    },
    bloco:{
        flexDirection: 'row',
        alignItems: 'center',                
    }  
});