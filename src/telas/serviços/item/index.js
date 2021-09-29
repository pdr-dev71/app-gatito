import React from "react";

import { useState } from "react";

import { Text, View, TextInput, Button } from 'react-native';

import CampoInteiro from "../../../componentes/CampoInteiro";

import estilos from './estilos';

export default function Item({ nome, preco, descricao }) {
    const [quantidade, setQuantidade] = useState(1)
    
    return <>
        <view style={estilos.informacao}>
            <Text style={estilos.nome}> {nome} </Text>
            <Text style={estilos.preco}> {preco} </Text>
            <Text style={estilos.descricao}> {descricao} </Text>
        </view>

        <View style={estilos.carrinho}>
            <View>
                <View styles={estilos.valor}>
                    <Text style={estilos.descricao}>Quantidade:</Text>
                    <CampoInteiro valor = {quantidade} acao = {setQuantidade}/>
                </View>
                <View styles={estilos.valor}>
                    <Text style={estilos.descricao}>Preço:</Text>
                    <Text style={estilos.preco}>0</Text>
                </View>
            </View>
            <Button title="Adicionar" />
        </View>
        <View style = {estilos.divisor}></View>

    </>

}