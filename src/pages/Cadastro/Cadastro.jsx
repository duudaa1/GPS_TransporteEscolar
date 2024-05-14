import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Image, ScrollView, Alert } from "react-native";
import styles from "./styles";
import Button from "../../components/CustomButton";
import { Picker } from "@react-native-picker/picker";
import { useAuth } from "../../context";
import Api from "../../api/api";
import axios from "axios";

export default function Form() {
  const [nome, setNome] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [data, setData] = useState(''); // Initialize data as an empty string
  const [genero, setGenero] = useState('');
  const [deficiencia, setDeficiencia] = useState(null);
  const [responsavel, setResponsavel] = useState(null);
  const [parentesco, setParentesco] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [casa, setCasa] = useState(null);
  const [escola, setEscola] = useState(null);
  const [serie, setSerie]= useState(null);
  const [turma, setTurma]= useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const {hundleCadastro} = useAuth()

  

  const generos = [
    { label: 'Selecionar', value: null },
    { label: 'Masculino', value: 'masculino' },
    { label: 'Feminino', value: 'feminino' },
    { label: 'Não Binário', value: 'naoBinario' },
  ];

  const parentescos = [
    { label: 'Selecionar', value: null },
    { label: 'Mãe', value: 'mae' },
    { label: 'Pai', value: 'pai' },
    { label: 'Irmã/Irmão', value: 'irmaos' },
    { label: 'Avó/Avô', value: 'avos' },
    { label: 'Tia/Tio', value: 'tios' },
  ];

  const handleDataChange = (text) => {
    // permitir apenas dígitos e barra
    const cleanText = text.replace(/[^0-9/]/g, '');
    //Limite de 10 caracteres (tamanho máximo para DD/MM/AAAA)
    const limitedText = cleanText.slice(0, 10);
    // Formate a entrada com separadores (opcional)
    const formattedData = limitedText.replace(/^(\d{2})(\d{2})(\d{4})?/, '$1/$2/$3');
    setData(formattedData);
  };
  
  const handleCpfChange = (text) => {
    // Remove  caracteres não numéricos
    const cleanText = text.replace(/[^0-9]/g, '');
    // Aplicar formatação do CPF com pontos e hífen
    const formattedCpf = cleanText.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    const limitedCpf = formattedCpf.slice(0, 14); // Limita a 14 caracteres (11 dígitos + pontos + hífen)
    setCpf(formattedCpf);
    setCpf(limitedCpf);
  };
  const preencherForms = () => {
    if (nome != null && cpf != null && data != null && genero !== null && responsavel != null && parentesco != null && email != null && password != null && casa != null && escola != null && serie != null && turma != null) {
      const post = async () => {
        try {
          const dados = {
            nome_usuario: nome,
            cpf_usuario: cpf,
            datanascimento_usuario: data,
            genero_usuario: genero,
            possuideficiencia_usuario: deficiencia,
            email_usuario: email,
            senha_usuario: password,
            nomeresponsavel_usuario: responsavel,
            grauparentesco_usuario: parentesco,
            endereco_usuario: casa,
            escola_usuario: escola,
            serie_usuario: serie,
            turma_usuario: turma
          };
          await Api.post('usuario', dados);
          console.log('passou');
  
          hundleCadastro({
            nome: nome,
            cpf: cpf,
            data: data,
            genero: genero,
            deficiencia: deficiencia,
            email: email,
            password: password,
            responsavel: responsavel,
            parentesco: parentesco,
            casa: casa,
            escola: escola,
            serie: serie,
            turma: turma
          });
          setErrorMessage(null);
          Alert.alert("Dados preenchidos com sucesso!");
        } catch (erro) {
          console.log(erro, "deu erro");
        }
      };
      post();
    } else {
      setErrorMessage("Campo obrigatório*");
      Alert.alert("Preencha todos os campos solicitados!");
    }
  };
   
  return (
    <ScrollView>
    <View style={styles.container}>
      
        <View style={styles.form}>
        <Image source={require("../../../assets/logo.png")} style={styles.image}></Image>
        <Text style={styles.title}>GPS do Transporte Escolar</Text>
        <Text style={styles.infoText}>Vamos nos cadastrar?!</Text>
        </View>

          <View style={styles.form}> 
          <Text style={styles.subtitle}>Dados pessoais</Text>
          <Text style={styles.textLabel}>Nome Completo:</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            onChangeText={(text) => setNome(text)}
            style={styles.input}
            keyboardType="default"
            placeholder="Digite seu nome completo"
          />

          <Text style={styles.textLabel}>CPF:</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
           value={cpf}
           onChangeText={handleCpfChange}
           placeholder="000.000.000-00"
           style={styles.input}
           keyboardType="numeric"
          />

          <Text style={styles.textLabel}>Data de Nascimento:</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            value={data}
            onChangeText={handleDataChange}
            placeholder="DD/MM/AAAA"
            style={styles.input}
            />

          <Text style={styles.textLabel}>Gênero:</Text>
          <View style={styles.espaco}><Picker
            selectedValue={genero} // seleção de genero 
            style={styles.picker}
            onValueChange={(itemValue) => setGenero(itemValue)}
          >
            {generos.map((item) => (
              <Picker.Item label={item.label} value={item.value} key={item.value} />
            ))}
          </Picker></View>

          <Text style={styles.textLabel}>Possui algum tipo de Deficiência?</Text>
          <TextInput
            onChangeText={(text) => setDeficiencia(text)}
            style={styles.input}
            keyboardType="default"
            placeholder="Se sim, digite qual deficiência (opcional)"
          />

          <Text style={styles.textLabel}>Nome do responsável:</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
           onChangeText={(text) => setResponsavel(text)}
            style={styles.input}
            keyboardType="default"
            placeholder="Nome do responsável"
          />
          
          <Text style={styles.textLabel}>Grau de parentesco:</Text>
          <View style={styles.espaco}><Picker
            selectedValue={parentesco} // seleção de Parentesco 
            style={styles.picker}
            onValueChange={(itemValue) => setParentesco(itemValue)}
          >
            {parentescos.map((item) => (
            <Picker.Item label={item.label} value={item.value} key={item.value} />
            ))}
          </Picker></View>
          
          </View>


          <View style={styles.form}>
          <Text style={styles.subtitle}>Dados de entrada</Text>
          <Text style={styles.textLabel}>Email</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            keyboardType="default"
            placeholder="Email"
          />

          <Text style={styles.textLabel}>Senha</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
             onChangeText={(text) => setPassword(text)}
            style={styles.input}
            keyboardType="default"
            placeholder="Senha"
          />
          </View>

          <View style={styles.form}>
          <Text style={styles.subtitle}>Casa</Text>
          <Text style={styles.textLabel}>Endereço da sua casa:</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
                
                <TextInput
                onChangeText={(texto)=>setCasa(texto)}
                style={styles.input}
                keyboardType="web-search"
                placeholder= "Digite seu endereço"
                ></TextInput>

          </View>

          <View style={styles.form}>
          <Text style={styles.subtitle}>Escola</Text>
          <Text style={styles.textLabel}>Escola:</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                onChangeText={setEscola}
                style={styles.input}
                keyboardType="web-search"
                placeholder= "Digite o nome da sua escola"
                // Também deve ser um campo de seleção com puxando os dados de escola cadastrados no banco de dados
                ></TextInput>

                <Text style={styles.textLabel}>Série:</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                onChangeText={setSerie}
                style={styles.input}
                keyboardType="web-search"
                placeholder= "Ex.: 8 ano"
                // Também deve ser um campo de seleção com puxando os dados de escola cadastrados no banco de dados
                ></TextInput>

                <Text style={styles.textLabel}>Turma:</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                onChangeText={setTurma}
                style={styles.input}
                keyboardType="web-search"
                placeholder= "Ex.: A"
                // Também deve ser um campo de seleção com puxando os dados de escola cadastrados no banco de dados
                ></TextInput>

            <Button title={'Cadastrar'} onPress={() => preencherForms()} />
            </View>

        </View>
      
    </ScrollView>
  );
}