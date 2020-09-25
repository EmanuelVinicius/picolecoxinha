import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TextInput, ActivityIndicator, ToastAndroid, Platform, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Input } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';


export interface CadastroScreenProps {  
}


export function CadastroScreen(props: CadastroScreenProps) {
    const nav = useNavigation();
    
    const nome = String ;
    const email = String;
    const senha = String;
    const confirmarSenha = String;

    const enviardados = async()=>{
        nav.navigate("login");
    }
    return (
        <View style={styles.background}>
            <Formik
                initialValues={{ nome: '', email: '', senha: '', confirmarSenhar: '' }}
                validationSchema={Yup.object().shape({
                    nome: Yup.string().required('O campo nome é obrigatório!'),
                    email: Yup.string().required('O campo email é obrigatório!'),
                    senha: Yup.string().required('O campo senha é obrigatório!').min(6, 'A senha precisa ter no mínimo 6 caracteres!'),
                    confirmarSenha: Yup.string().required('O campo confirmar senha é obrigatório!').min(6, 'A senha precisa ter no mínimo 6 caracteres!')
                })}
                onSubmit={enviardados}
            >
                {({ values, handleChange, errors, handleSubmit, isSubmitting, isValid, touched, handleBlur }) => (
                    <View style={styles.background}>
                        <Input inputStyle={styles.cadastrar} placeholder="Digite seu nome" placeholderTextColor="white" leftIcon={{name: 'person',color:'red'}}
                            onChangeText={handleChange("nome")} onBlur={handleBlur("nome")}/>
                        { touched.nome && <Text style={styles.erroCadastro}>{errors.nome}</Text>}

                        <Input inputStyle={styles.cadastrar} placeholder="Digite seu email"  placeholderTextColor="white"leftIcon={{name: 'email',color:'red'}}
                         onChangeText={handleChange("email")} onBlur={handleBlur("email")} />
                        { touched.email && <Text style={styles.erroCadastro}>{errors.email}</Text>}

                        <Input inputStyle={styles.cadastrar} placeholder="Digite a senha" placeholderTextColor="white" leftIcon={{name: 'lock',color:'red'}}
                         onChangeText={handleChange("senha")}onBlur={handleBlur("senha")} />
                        { touched.senha && <Text style={styles.erroCadastro}>{errors.senha}</Text>}

                        <Input inputStyle={styles.cadastrar}placeholder="Digite a senha novamente"placeholderTextColor="white"leftIcon={{name: 'lock',color:'red'}}
                            onChangeText={handleChange("confirmarSenha")} onBlur={handleBlur("confirmarSenha")}/>

                        { touched.confirmarSenhar && <Text style={styles.erroCadastro}>{errors.confirmarSenhar}</Text>}

                        { isSubmitting && <ActivityIndicator size={30} />}
                        { !isSubmitting && <Button title='Cadastrar' disabled={!isValid}onPress={() => handleSubmit()}></Button>}
                    </View>
                )}

            </Formik>

            <Button title='Voltar' style={styles.botao} onPress={() => nav.goBack()} >Voltar</Button>

        </View>
    );

}

const styles = StyleSheet.create({
    background: {
        height: "100%",
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'orange'
    },
    cadastrar: {
        color: 'black',
        fontSize: 20,
        marginTop : 20,
        marginBottom:20,
        textAlign: 'center'
    },
    erroCadastro: {
        color:"red", 
        fontSize: 15, 
        textAlign:"right"
    },
    botao:{
        borderRadius:100,
        justifyContent:"center",
        marginRight:135,
        marginLeft:134,
        marginBottom:50
    }
});