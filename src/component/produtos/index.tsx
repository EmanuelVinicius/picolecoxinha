import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export interface ProdutosProps {
}

export default function Produto(props: any) {

    function tamanhoLetra(desc:any){
        if(desc.legth<27){
            return desc;
        }
        return desc.substring(0,23);
    }

    return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image source={props.img} style={styles.produtoImg} />
            <Text style={styles.produtoText}>
              {tamanhoLetra(props.children)}
            </Text>
            <View>
                <Text style={styles.produtoText}>{props.cost}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    produtoImg: {
        width: 175,
        height: 175
    },
    produtoText: {
        fontSize: 20
    }
});