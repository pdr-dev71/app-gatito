import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'

import Carrinho from './src/Telas/Carrinho';
import TelaPadrao from './src/Componentes/TelaPadrao';
import Rotas from './src/Rotas';



export default function App() {
  return <TelaPadrao><Rotas/></TelaPadrao>
}