import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TextInput, ActivityIndicator, ToastAndroid, Platform, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Input } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import firebase from 'firebase';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { AdMobBanner } from 'expo-ads-admob';

export interface LoginProps { }

export default function LoginScreen(props: LoginProps) {

    const nav = useNavigation();
    const [erro, setErro] = useState("");
    const [modalAberto, setModalAberto] = useState(false);

    const logar = async (dados: { email: string; senha: string; }) => {
        setErro(""); //Limpa o erro
        //Realiza autenticação
        await firebase.auth().signInWithEmailAndPassword(dados.email, dados.senha)
            .then(() => nav.navigate('app'))
            .catch((erro) => {
                console.log(erro);
                if (Platform.OS == "android")
                    ToastAndroid.show("Email ou senha incorreta", 3000);
                else
                    //Alert.alert('Erro', 'Email ou senha incorreta');
                    setErro("Email ou senha incorreta");
            })
    }
    return (<ImageBackground source={require('./../../../assets/img/background.png')}
        style={styles.background}>
        <StatusBar style="light" />

        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', senha: '' }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().required('Informe o email').email('E-mail não válido'),
                    senha: Yup.string().required('Informe a senha').min(6, 'A senha precisa ter 6 caracteres')
                })}
                onSubmit={logar} >
                {({ errors, handleChange, handleSubmit, isSubmitting, touched, handleBlur }) => (
                    <View style={styles.container}>

                        <Input placeholder='Digite o seu email' leftIcon={{ name: 'person', color: 'red' }} onChangeText={handleChange("email")} />
                        {touched.email && <Text style={{ color: 'red', fontSize: 15, textAlign: 'right' }}>{errors.email}</Text>}

                        <Input placeholder='Digite sua senha ' leftIcon={{ name: 'lock', color: 'red' }} onChangeText={handleChange("senha")} />
                        {touched.senha && <Text style={{ color: 'red', fontSize: 15, textAlign: 'right' }}>{errors.senha}</Text>}

                        {erro != "" && <Text style={styles.erroLogin}>{erro}</Text>}
                        {isSubmitting && <ActivityIndicator />}

                        {!isSubmitting && <Button title="Logar" buttonStyle={{ borderRadius: 30 }} raised={true} onPress={() => handleSubmit()} />}

                        <TouchableOpacity onPress={() => nav.navigate("cadastrar")}>
                            <Text style={styles.cadastrar}>Não possui conta? Clique aqui para se cadastrar!!!</Text>
                        </TouchableOpacity>

                        <AdMobBanner
                            bannerSize="mediumRectangle"
                            adUnitID="ca-app-pub-3940256099942544/6300978111"
                        />

                    </View>
                )}
            </Formik>
        </View>
    </ImageBackground>)
}


const styles = StyleSheet.create({
    background: {
        height: "100%",
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    cadastrar: {
        color: 'red',
        fontSize: 20,
        textDecorationLine: 'underline',
        margin: 20,
        textAlign: 'center'

    },
    erroLogin: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },
});