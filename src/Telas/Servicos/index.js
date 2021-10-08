import React from 'react';

import { FlatList } from "react-native";

import Item from './Item';

import TelaPadrao from '../../Componentes/TelaPadrao';


const servicos = [
        
    {
        id: 1,
        nome: 'Banho Simples',
        preco: 80.0,
        descricao: 'Realização de banho sem tosagem'
    },
    {
        id: 2,
        nome: 'Banho Completo',
        preco: 160.0,
        descricao: 'Realização de banho com tosa de acordo com a pelagem do animal'
    
    },
    {
        id: 3,
        nome: 'Vacina Antirrabica ',
        preco: 50.0,
        descricao: 'Vacina aplicada a partir dos 6 meses em Cães e Gatos'

    },
    {
        id: 4,
        nome: 'Vacina V8',
        preco: 90.0,
        descricao: 'Proteja seu doguinho contra 8 doenças'
    }
    
]

export default function Servicos(){

    return <TelaPadrao>
        <FlatList
            data={servicos}
            renderItem = {({item}) => <Item {...item} />}
            keyExtractor = {(item) => String(item.id)}
        />
    
    </TelaPadrao>
}