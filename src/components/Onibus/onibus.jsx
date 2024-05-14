import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Button} from "react-native";

export default function Enderecos({title, subtitle, onPress, tempo}) {

    return (
        <View style={styles.bloco}>
            <TouchableOpacity style={styles.enderecos} onPress={onPress}>
            
                <Image source={require('../../../assets/bus.png')} style={styles.image}></Image>
                
                <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>{tempo}</Text>
            </TouchableOpacity>

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
        width: 30,
        height: 40,
        marginHorizontal:10,
    },
    info:{
        marginHorizontal:10,
    },
    enderecos:{
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        paddingEnd:75,
        width: '60%',
    },
    bloco:{
        flexDirection: 'row',
        alignItems: 'center',                
    },
    button:{
        height: 40,
        width:"25%",
        paddingHorizontal: 10,
        backgroundColor:"#216AA9",
        borderWidth: 0.5, // Define a largura da borda
        borderColor: '#0382C1',     
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: 20, 
    },
    textButton:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    }
});