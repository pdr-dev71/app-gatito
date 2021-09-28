import React from 'react';

import { Text, SafeAreaView, StatusBar, FlatList } from "react-native";

import Item from './item';



const servicos = [
        
    {
        id: 1,
        nome: 'banho',
        preco: 80.0,
        descricao: 'deixamos seu cachorro mais limpo que conta de prefeitura'
    },
    {
        id: 2,
        nome: 'vacina v8',
        preco: 200.0,
        descricao: 'Seu doguinho imunizado contra as doenças'
    
    },
    {
        id: 3,
        nome: 'vacina raiva',
        preco: 80.0,
        descricao: 'pra morder sem se preocupar'
    }
    
    

]

export default function Servicos() {
    return <SafeAreaView>
    <StatusBar/>
        <Text> Serviços</Text>
        <FlatList
            data={servicos}
            renderItem = {({item }) => <Item {...item} />}
            keyExtractor = {(id) => String(id)}
        />
    </SafeAreaView>

}