import React from "react";
import { FlatList } from "react-native";
import Item from "./Item";
import TelaPadrao from "../../Componentes/TelaPadrao";
import StatusCarrinho from "../../Telas/Carrinho/StatusCarrinho";

import { useSelector } from "react-redux";
export function Carrinho(){
    const carrinho = useSelector((state) => state.carrinho.itens);
    const totalCarrinho = carrinho.reduce((resultado, {preco, quantidade}) => resultado + (preco * quantidade), 0)


    return(
        <TelaPadrao>
            <StatusCarrinho total={totalCarrinho} />
            <FlatList
                data={carrinho}
                renderItem={({ item, index }) => <Item {...item} index={index}/>}
                keyExtractor={({id}) => String(id)}
            />
        </TelaPadrao>

    ) 
}   