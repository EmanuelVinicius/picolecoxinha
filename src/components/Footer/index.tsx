import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Produtos from '../produtos/index';

export default function Footer() {
    return (
        <View>
            <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ marginHorizontal: 10 }}>
                        <Produtos img={require('../../../assets/img/refri1.jpg')} cost="110,90">
                            Refrigerante
                   </Produtos>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Produtos img={require('../../../assets/img/trufa.jpg')} cost="360,90">
                            Trufa de chocolate
                   </Produtos>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Produtos img={require('../../../assets/img/imagem3.jpg')} cost="890">
                            Cerveja Long Neck
                   </Produtos>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
})