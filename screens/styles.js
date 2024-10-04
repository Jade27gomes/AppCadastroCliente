import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6200ee', // Cor do cabeçalho
  },
  title: {
    color: '#ffffff',
  },
  container: {
    flex: 1,
    padding: 20, // Padding da página para afastar os componentes das bordas
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%', // Ajusta a largura dos inputs
    marginBottom: 15, // Espaçamento inferior entre os inputs
  },
  button: {
    marginTop: 20, // Espaçamento superior do botão
    width: '90%', // Ajusta a largura do botão
  },
});

export default styles;
