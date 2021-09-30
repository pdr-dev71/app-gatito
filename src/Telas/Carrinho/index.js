import React from "react";
import { FlatList } from "react-native";


import Item from "./Item";

import TelaPadrao from "../../Componentes/TelaPadrao";
import StatusCarrinho from "../../Componentes/StatusCarrinho";

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Realizamos a higiene completa do seu pet",
        quantidade: 1
    },
    {
        id: 2,
        nome: "Vacina v4",
        preco: 179.9,
        descricao: "Himunize seu pet de várias doenças.",
        quantidade: 2

    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 89.9,
        descricao: "Vacina contra raiva.",
        quantidade: 1

    },
]

export default function Carrinho() {

    const total = servicos.reduce((soma, { preco, quantidade }) => soma + preco * quantidade, 0)
    
    return <TelaPadrao>
        <StatusCarrinho total={total} />
        <FlatList
            data={servicos}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={({id}) => String(id)}
        />
    </TelaPadrao>
}