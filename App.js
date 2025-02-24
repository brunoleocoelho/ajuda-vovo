import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/screens/Home';
import CriarLista from './src/screens/CriarLista';

/*
  COMPONENTE PONTO DE PARTIDA DO APP, QUE SERÁ 
  COLOCADO O NAVIGATOR PARA TROCA DE TELAS.

  ENQUANTO EM DESENVOLVIMENTO PODE SER USADO DE INICIO 
  PARA TESTAR DETERMINADAS TELAS, SEM PASSAR PELA NAVEGAÇÃO NORMAL
*/

export default function App() {

  return (
    <CriarLista />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
