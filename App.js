import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'
import TelaPadrao from './src/Componentes/TelaPadrao';
import Rotas from './src/navegacao/Rotas';
import { Provider } from 'react-redux';
import { store } from './src/Store'



export default function App() {
  return (
    <Provider store={store}>
      <TelaPadrao>
        <Rotas/>
      </TelaPadrao>
    </Provider>
  )

}