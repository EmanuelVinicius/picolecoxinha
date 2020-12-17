import * as React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

export interface AlertCustomProps {
  titulo?:string;
  visivel:boolean;
  children:any;
  onConfirmar();
}

export function AlertCustom (props: AlertCustomProps) {
   return (
    <Modal 
        animationType="slide"
        transparent
        visible={props.visivel}
        >
        {/* Centraliza a caixa */}
        <View style={style.background}>  
            {/* Cria a caixa branca */}
            <View style={style.container}> 
                {props.titulo  && <Text style={style.titulo}>{props.titulo}</Text>}

                {/* Exibe os conteúdos passados externamente */}
                {props.children}

                {/* Ajustar os botões */}
                <View style={style.botao}>
                    <Button title="Confirmar" onPress={props.onConfirmar} type="clear" />
                </View>

            </View>
        </View>
    </Modal>);
}


    const style = StyleSheet.create({
        background: {
            height: "100%",
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        container: {
            color: 'blue',
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
            marginBottom: 50,
            color:"blue"
        },
        titulo: { textAlign:'center', fontSize: 20},
    })

// ===========================================================================
export interface AlertInputProps {
    onChangeText:any;
    placeholder: string;
    onBlur:any
    error?:any;
    senha?: boolean;
    touched?: any;
    noBorder?: boolean;
}


export function AlertInput (props: AlertInputProps) {
    return (
     <View style={[styleI.input, (props.noBorder ? {} : styleI.borderBottom)]}>
        <TextInput placeholder={props.placeholder} onChangeText={props.onChangeText} onBlur={props.onBlur} secureTextEntry={props.senha} />
        {props.touched && props.error && <Text style={styleI.erro}>{props.error}</Text>}
     </View>
     );
 }
 
 const styleI = StyleSheet.create({
     input: {paddingVertical: 5},
     borderBottom: {borderBottomWidth: 1, borderBottomColor: 'lightgray'},
     erro: { textAlign: 'right', color: 'red' }
 })