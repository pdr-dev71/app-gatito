import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';
import Botao from '../../../Componentes/Botao';
import CampoInteiro from '../../../Componentes/CampoInteiro';
import estilos from './estilos';

import { useDispatch } from 'react-redux';
import { actions } from '../../../Store/Carrinho';

export default function Item({ nome, preco, descricao, quantidade: quantidadeInicial, index }) {
    
    const dispatch = useDispatch();

    const [quantidade, setQuantidade] = useState(quantidadeInicial)
    const [total, setTotal] = useState(preco * quantidadeInicial)


    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade)
    }

    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    }

    return <>
        <View style={estilos.informacao}>
            <Text style={estilos.nome} >{nome}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
            <Text style={estilos.preco} >{
                Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(preco)}
            </Text>
        </View>

        <View style={estilos.carrinho}>
            <View>
                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Quantidade:</Text>
                    <CampoInteiro valor={quantidade} acao={atualizaQuantidadeTotal} />
                </View>

                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Total:</Text>
                    <Text style={estilos.preco}>{
                        Intl.NumberFormat('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).format(total)} </Text>
                </View>
                <Botao valor="Remover do Carrinho" acao={() => {
                    dispatch(actions.remove(index));
                    Alert.alert('Item removido do carrinho');
                    }} />

            </View>
        </View>



        <View style={estilos.divisor} />
    </>
}