import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import Button from "../../components/CustomButton";


export default function Feedback() {

    return (
        <View style={styles.container}>
            
            <View style={styles.emojis}>

            <TouchableOpacity>
            <Image
            source={require('../../../assets/F1.png')}
            style={styles.image}
            /></TouchableOpacity>

            <TouchableOpacity>
            <Image
            source={require('../../../assets/F2.png')}
            style={styles.image}
            /></TouchableOpacity>

            <TouchableOpacity>
            <Image
            source={require('../../../assets/F3.png')}
            style={styles.image}
            /></TouchableOpacity>

            <TouchableOpacity>
            <Image
            source={require('../../../assets/F4.png')}
            style={styles.image}
            /></TouchableOpacity>

            <TouchableOpacity>
            <Image
            source={require('../../../assets/F5.png')}
            style={styles.image}
            /></TouchableOpacity>

            </View>

            <TextInput style={styles.input}></TextInput>
            <Text style={styles.legalText}>Digite aqui seu feedback, nossa equipe irá avaliar e buscar a melhoria!</Text>
            <Button
            title={'Enviar'}></Button>
        </View>
    );                
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex:1,
        alignItems: 'center',
    },
    emojis:{
        flexDirection: 'row',
        alignItems: 'center',  
    },
      input:{
        width: '90%',
        height: 200,
        borderColor: '#069AC9',
        borderWidth: 1.3,
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        alignSelf:'center',
    },
    image:{
        width: 68,
        height: 68,
        marginHorizontal:2,
        margin: 30,
    },
    legalText: {
        fontSize: 14,
        textAlign: 'center',
        alignSelf:'center',
        bottom: 0,
        margin: 23,
        color: 'gray',
      },
});