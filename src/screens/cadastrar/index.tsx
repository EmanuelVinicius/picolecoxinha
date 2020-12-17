import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TextInput, ActivityIndicator, ToastAndroid, Platform, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Input } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import firebase from 'firebase';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { AlertCustom, AlertInput } from '../../components/alert-custom';
import { AdMobBanner } from 'expo-ads-admob';


export interface CadastroScreenProps {
}


export function CadastroScreen(props: CadastroScreenProps) {
    const nav = useNavigation();
    const [erro, setErro] = useState('');
    const [modalAberto, setModalAberto] = useState(false);

    const cadastrar = async (dados: { email: string; senha: string; }) => {

        console.log(dados);
        firebase.auth().createUserWithEmailAndPassword(dados.email, dados.senha)
            .then(() => ToastAndroid.show("Usuário criado com sucesso", 3000))
            .catch((erro) => ToastAndroid.show("Não foi possível criar a conta", 3000))
        setModalAberto(false);
    }
    return (
        <View style={styles.background}>
            <Formik
                initialValues={{ email: '', senha: '' }}
                onSubmit={cadastrar}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Campo precisa ser um email').required('Email obrigatório'),
                    senha: Yup.string().min(4, 'Mínimo 4 caracteres').required('Senha obrigatória')
                })}
            >
                {({ handleSubmit, handleChange, handleBlur, touched, errors }) => (
                    <AlertCustom
                        onCancelar={() => setModalAberto(false)}
                        onConfirmar={handleSubmit}
                        visivel={modalAberto}
                        titulo="Novo usuário">
                        <Text>Informe os dados do usuário</Text>
                        <AlertInput placeholder="Digite seu email" onChangeText={handleChange('email')} onBlur={handleBlur('email')} touched={touched.email} error={errors.email} />
                        <AlertInput placeholder="Digite sua senha" onChangeText={handleChange('senha')} onBlur={handleBlur('senha')} touched={touched.senha} error={errors.senha} senha noBorder />
                    </AlertCustom>
                )}
            </Formik>

            <Button title='Voltar' style={styles.botao} onPress={() => nav.goBack()} >Voltar</Button>

            <AdMobBanner
                bannerSize="mediumRectangle"
                adUnitID="ca-app-pub-8890411738087560/1818681309"
            />

        </View>
    );

} const styles = StyleSheet.create({
    background: {
        height: "100%",
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    cadastrar: {
        color: 'black',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    erroCadastro: {
        color: "red",
        fontSize: 15,
        textAlign: "right"
    },
    botao: {
        borderRadius: 100,
        justifyContent: "center",
        marginRight: 135,
        marginLeft: 134,
        marginBottom: 50
    }
});