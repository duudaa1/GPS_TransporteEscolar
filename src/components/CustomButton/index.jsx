import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";


export default function Button({title, onPress, buttonStyle, textStyle}) {

    return (
        <View>
            <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
                <Text style={[styles.buttonText, textStyle]}>{title}</Text>
            </TouchableOpacity>
        </View>
    );                
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        borderWidth: 0.5, // Define a largura da borda
        borderColor: '#0382C1',     
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        width:"75%",
        backgroundColor:"#069AC9",
        paddingTop: 14,
        paddingBottom: 14,
        paddingHorizontal: 100,
        margin: 20,  
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});