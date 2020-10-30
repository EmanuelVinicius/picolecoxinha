import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import Button from '../../component/Button';
import Footer from '../../component/Footer';

export function DetailScreen() {
    return (
        <ScrollView>
            <Image source={require('../../../assets/img/imagem.jpg')}
                style={styles.imagemProduto}
                resizeMode="cover"
            />
            <View>
                <Text style={[styles.titulo, { fontSize: 15 }]}>R$ 4000,00</Text>
            </View>
            <View>
                <Text style={[styles.titulo, { fontSize: 30 }]}>Picolé de Coxinha</Text>
            </View>
            <View>
                <Text style={[styles.textoTitulo,{fontWeight: "bold"}]}> Picolé de Coxinha</Text>
                <Text style={styles.textoView}> 
                Picolé de coxinha é a mais nova sensação de 2020, uma delicia em formato de picolé,temos uma gama de sabores para você se deliciar,segue os sabores: Frango,Frango com Bacon,Carne,Carne com  Bacon,Camarão,Carne seca,Carne de sol,Leite moça.
                </Text>
            </View>
            <Button/>     
            <View style={styles.linha}/>
            <Footer/>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    imagemProduto: {
        width: '100%'
    },
    titulo: {
        paddingHorizontal: '2%'
    },
    textoView: {   
        fontSize:16,
        lineHeight:25,
        marginVertical:'2%',
        paddingHorizontal: '2%'
    },
    textoTitulo:{
        fontSize:15,
        lineHeight:25
    },
    linha:{
        borderWidth:1,
        borderBottomColor:'#DDD',
        marginVertical:'2%',
    }
});