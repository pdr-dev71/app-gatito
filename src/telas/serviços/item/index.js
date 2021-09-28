import React from "react";

import {Text, View, TextInput, Button} from 'react-native';

import estilos from './estilos';

export default function Item({nome, preco, descricao}) {

    return <>
    <view style = {estilos.informacao}>
    <Text style={estilo.nome}> {nome} </Text>
    <Text style={estilos.preco}> {preco} </Text>
    <Text style={estilos.descricao}> {descricao} </Text>
    </view>

    <View style={estilos.carrinho}>
        <View>
            <View styles={estilos.valor}>
                <Text style={estilos.descricao}>Quantidade:</Text>
                <TextInput value = "0" />
            </View>
            <View styles={estilos.valor}>
                <Text style={estilos.descricao}>Preço:</Text>
                <Text style={estilos.preco}>0</Text>
            </View>
        </View>
        <Button title = "Adicionar"/>
    </View>

    </>

}