import React from 'react';
import { View, Text, Button } from 'react-native';
import estilos from './estilos'
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
            <Button style={estilos.botao} valor='Concluir Pedido' invertido='true' acao={() => {dispatch(actions.reset())}} />
        </View>
    </View>
}