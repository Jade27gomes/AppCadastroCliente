import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { Text, TextInput, Button, Appbar } from 'react-native-paper';

export default function UsuarioScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  
  const { width } = Dimensions.get('window');

  const handleLogin = () => {
    if (nome && senha) {
      navigation.navigate('Cliente');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Login de Usuário" />
      </Appbar.Header>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20
        }}
      >
        <Text style={{ marginBottom: 20, fontSize: 20 }}>Bem-vindo!</Text>

        <TextInput
          label="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
          style={{ width: width * 0.3, marginBottom: 15 }} // 30% da largura da tela
          mode="outlined"
        />

        <TextInput
          label="Senha"
          value={senha}
          onChangeText={text => setSenha(text)}
          secureTextEntry
          style={{ width: width * 0.3, marginBottom: 15 }} // 30% da largura da tela
          mode="outlined"
        />

        <Button
          mode="contained"
          onPress={handleLogin}
          style={{ marginTop: 15, width: width * 0.3 }} // 30% da largura da tela
        >
          Entrar
        </Button>
      </View>
    </View>
  );
}
