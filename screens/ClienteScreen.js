import React, { useState } from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';
import styles from './styles'; // Importando o arquivo de estilos

export default function ClienteScreen({ navigation }) {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');
  const { width } = Dimensions.get('window');

  const handleSaveClient = () => {
    if (id && nome && cpf && endereco && bairro && cidade && cep && telefone) {
      alert('Cliente salvo com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={styles.header}>
        <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
        <Appbar.Content title="Cadastro de Cliente" titleStyle={styles.title} />
      </Appbar.Header>

      {}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[styles.container, { alignItems: 'center' }]}>
          <View style={styles.photoContainer}>
           
            <View style={styles.photo} />
          </View>

          <TextInput
            label="ID"
            value={id}
            onChangeText={text => setId(text)}
            style={{ width: width * 0.3, marginBottom: 15 }} 
            mode="outlined"
          />
          <TextInput
            label="Nome"
            value={nome}
            onChangeText={text => setNome(text)}
            style={{ width: width * 0.3, marginBottom: 15 }} 
            mode="outlined"
          />
          <TextInput
            label="CPF"
            value={cpf}
            onChangeText={text => setCpf(text)}
            style={{ width: width * 0.3, marginBottom: 15 }} 
            mode="outlined"
            keyboardType="numeric"
          />
          <TextInput
            label="Endereço"
            value={endereco}
            onChangeText={text => setEndereco(text)}
            style={{ width: width * 0.3, marginBottom: 15 }} 
            mode="outlined"
          />
          <TextInput
            label="Bairro"
            value={bairro}
            onChangeText={text => setBairro(text)}
            style={{ width: width * 0.3, marginBottom: 15 }} 
            mode="outlined"
          />
          <TextInput
            label="Cidade"
            value={cidade}
            onChangeText={text => setCidade(text)}
            style={{ width: width * 0.3, marginBottom: 15 }} 
            mode="outlined"
          />
          <TextInput
            label="CEP"
            value={cep}
            onChangeText={text => setCep(text)}
            style={{ width: width * 0.3, marginBottom: 15 }} 
            mode="outlined"
            keyboardType="numeric"
          />
          <TextInput
            label="Telefone"
            value={telefone}
            onChangeText={text => setTelefone(text)}
            style={{ width: width * 0.3, marginBottom: 15 }} 
            mode="outlined"
            keyboardType="phone-pad"
          />

          <Button
            mode="contained"
            onPress={handleSaveClient}
            style={{ width: width * 0.3, marginBottom: 15 }} 
          >
            Salvar Cliente
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}
