import React from "react";
import { Text, SafeAreaView, StatusBar } from "react-native";

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
    <status/>
        <text> Serviços</text>
    </SafeAreaView>

}