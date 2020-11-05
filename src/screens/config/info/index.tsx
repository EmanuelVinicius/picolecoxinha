import * as React from "react";
import { Button } from 'react-native-elements';
import { View, Text, StyleSheet, Image, Share } from "react-native";

export interface ConfigInfoScreenProps { }
const recursoNativo = () => {
  Share.share({ message: "Obrigado" })
}
export function ConfigInfoScreen(props: any) {
  return (
    <View style={stlye.container}>
      <Image source={require("../../../../assets/img/Eu.jpg")} style={stlye.Img} />
      <Text style={stlye.text}>
        Este app foi feito por Emanuel Vinícius Rocha da Silva...
      </Text>
      <Image source={require("../../../../assets/img/logo.png")} style={stlye.Img} />
      <Text style={stlye.text}>
        A GostosinhoFood é uma ideia que surgiu no 2 semestre de 2020, com a
        itenção de vender Picolé de Coxinha,uma ideia inovadora para o ramo
        alimenticio.
      </Text>
      <Button title="Compartilhe"  onPress={recursoNativo} style={stlye.btnContainer}/>
    </View>
  );  
}

const stlye = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },
  text: {
    color: "red",
    fontSize: 20,
    marginHorizontal: "1%",
    textAlign: "center",
  },
  Img: {
    width: 175,
    height: 175,
    marginLeft: 100,
  },
  btnContainer: {
    width: '90%',
    height: 50,
    backgroundColor: '#17181a',
    borderRadius: 5,
    marginVertical: '5%',
    marginLeft:'5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
