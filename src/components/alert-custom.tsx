import * as React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export interface AlertCustomProps {
    titulo?: string;
    visivel: boolean;
    children: any;
    onConfirmar();
    onCancelar();
}

export function AlertCustom(props: AlertCustomProps) {
    return (
        <Modal
            animationType="slide"
            transparent
            visible={props.visivel}
        >
            {/* Centraliza a caixa */}
            <View style={style.background}>
                {/* Cria a caixa branca */}
                <View style={style.background}>
                    {props.titulo && <Text style={style.titulo}>{props.titulo}</Text>}
                    {/* Exibe os conteúdos passados externamente */}
                    {props.children}
                    {/* Ajustar os botões */}
                    <View style={style.botao}>
                        <Button title="Confirmar" onPress={props.onConfirmar} type="clear" />
                        <Button title="Cancelar" onPress={props.onCancelar} type="clear"/>
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
        alignItems: "stretch",
        backgroundColor: "pink"
    },
    botao: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    titulo: {
        textAlign: 'center',
        fontSize: 20
    },
})

// ===========================================================================
export interface AlertInputProps {
    onChangeText: any;
    placeholder: string;
    onBlur: any
    error?: any;
    senha?: boolean;
    touched?: any;
    noBorder?: boolean;
}


export function AlertInput(props: AlertInputProps) {
    return (
        <View style={[styleI.input, (props.noBorder ? {} : styleI.borderBottom)]}>
            <TextInput placeholder={props.placeholder} onChangeText={props.onChangeText}
                onBlur={props.onBlur} secureTextEntry={props.senha} />
            {props.touched && props.error && <Text style={styleI.erro}>{props.error}</Text>}
        </View>
    );
}

const styleI = StyleSheet.create({
    input: { paddingVertical: 10, paddingHorizontal: 100 },
    borderBottom: { borderBottomWidth: 1, borderBottomColor: 'lightgray' },
    erro: { textAlign: 'right', color: 'red' }
})