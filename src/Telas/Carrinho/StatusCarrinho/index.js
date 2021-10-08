import React from 'react';
import { View, Text} from 'react-native';
import Botao from '../../../Componentes/Botao'
import estilos from '../StatusCarrinho/estilos'
import { useDispatch } from 'react-redux';
import { actions } from '../../../Store/Carrinho';

export default function StatusCarrinho({ total }) {
    const dispatch = useDispatch();
    return <View style={estilos.conteudo}>
        <View style={estilos.total}>
            <Text style={estilos.descricao}>Total do Carrinho</Text>
            <Text style={estilos.valor}>
                {
                    Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(total)
                }
            </Text>
        </View>
        <View style={estilos.botao}>
            <Botao style={estilos.botao} valor='Concluir Pedido' invertido='true' acao={() => {
                dispatch(actions.reset());
                Alert.alert('Pedido realizado com sucesso.');
                }} />
        </View>
    </View>
}