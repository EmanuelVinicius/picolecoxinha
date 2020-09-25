import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Produtos from '../../component/produtos/index';
export interface HomeScreenProps {

}
export function HomeScreen(props: any) {
    return (
        <View style={style.container}>
            <View style={style.top}>
                <Image source={require('./../../../assets/img/logo.png')} style={style.imagem} />
                <View style={style.textContainer}>
                    <Text style={style.text}>Comidas</Text>
                    <Text style={style.text}>-</Text>
                    <Text style={style.text}>Bebidas</Text>
                    <Text style={style.text}>-</Text>
                    <Text style={style.text}>Sobremesas</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                        <MaterialIcons name="filter-list" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={style.line} />

            <ScrollView>
                <Text style={style.text}>Mais Clicados</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Produtos img={require('../../../assets/img/images.jpg')} cost="R$4000,00" onclick={()=>alert('CLICOU')}>Picolé de coxinha</Produtos>
                    <Produtos img={require('../../../assets/img/refri1.jpg')} cost="R$4000,00" onclick={()=> alert('CLICOU')}>Refrigerante</Produtos>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Produtos img={require('../../../assets/img/imagem3.jpg')} cost="R$4000,00"onclick={()=> alert('CLICOU')}>Cerveja</Produtos>
                    <Produtos img={require('../../../assets/img/trufa.jpg')} cost="R$4000,00" onclick={()=> alert('CLICOU')}>Trufa de chocolate</Produtos>
                </View>
            </ScrollView>

        </View>

    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
    },
    top: {
        marginBottom: 8
    },
    imagem: {
        width: '100%'
    },
    textContainer: {
        flexDirection: "row",
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text: {
        color: 'red',
        fontSize: 20,
        marginHorizontal: '1%'
    },
    line: {
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2,
    }
});