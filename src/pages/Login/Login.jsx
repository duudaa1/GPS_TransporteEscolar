import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { useAuth } from '../../context'; 
import Button from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const { authenticate } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation()

  const handleSubmit = async(event) => {
    event.preventDefault()

    if (!email || !password) {
      Alert.alert('Por favor, preencha o e-mail e senha.');
      return;
    }else{  
    try{
      await authenticate(email, password)
      console.log("passei")
    }catch(erro){
      Alert.alert('Por favor, preencha o e-mail valido.');
    }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
 
      <Button title={'Entrar'} onPress={handleSubmit} />
    
    <Text onPress={()=>navigation.navigate('Cadastro')} style={styles.hiperlinkText}>Cadastrar</Text>

      <Text style={styles.legalText}>
        Utilizar o nosso aplicativo significa que você concorda com nossos Termos de Uso e Política de Privacidade.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
    color:"#0382C1",
    fontSize:24,
    fontWeight:"bold",
    marginVertical: 40,
    textAlign: 'center',
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
  },
  hiperlinkText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: "#0382C1",
    textDecorationLine: 'underline',
  },
  legalText: {
    fontSize: 10,
    textAlign: 'center',
    alignSelf:'center',
    position: 'absolute',
    bottom: 0,
    margin: 20,
    color: 'gray',
  },
});

export default Login;

