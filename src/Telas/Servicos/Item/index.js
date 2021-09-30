import React, { useState } from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import Botao from '../../../Componentes/Botao';
import CampoInteiro from '../../../Componentes/CampoInteiro';

import estilos from './estilos'

export default function Item({nome, preco, descricao}){
    const [quantidade, setQuantidade] = useState(1)
    const [total, setTotal] = useState(preco)
    const [expandir, setExpandir] = useState(false);

    const atualizaQuantidadeTotal =(novaQuantidade) =>{
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade)
    }

    const calculaTotal =(novaQuantidade) => {
        setTotal(novaQuantidade * preco);
    }

    const inverteExpandir = () =>{
        setExpandir(!expandir);
        atualizaQuantidadeTotal(1);
    }
    return <>
    <TouchableOpacity style = {estilos.info}onPress={inverteExpandir}>
        <Text style = {estilos.nome} >{nome}</Text>
        <Text style = {estilos.descricao}>{descricao}</Text>
        <Text style = {estilos.preco} >{
        Intl.NumberFormat('pt-BR',{
            style: 'currency', currency: 'BRL'
        }).format(preco)}
        </Text>
    </TouchableOpacity>
    {expandir &&
    <View style = {estilos.carrinho}>
        <View>
            <View style = {estilos.valor}>
                <Text style = {estilos.descricao}>Quantidade:</Text>
                <CampoInteiro valor = {quantidade} acao = {atualizaQuantidadeTotal} />
            </View>
            <View style = {estilos.valor}>                                                                                                                                                              
                <Text style = {estilos.descricao}>Total:</Text>
                <Text style = {estilos.preco}>{
                    Intl.NumberFormat('pt-BR',{
                style: 'currency', currency: 'BRL'
            }).format(total)} </Text>
            </View>
                <Botao valor = "Adicionar no Carrinho" acao = {() => {}}/>

        </View>
    </View>
    
}
        
    <View style = {estilos.divisor} />
    </>
}