import * as React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-elements";
import Footer from "../../components/Footer";
export function DetailScreen() {

  const comprar = () => {
    Alert.alert("TEM CERTEZA ? ", "Deseja realmente comprar ?", [
      {
        text: "Sim", onPress: () => {
          console.log("Você comprou");
        }
      },
      { text: "Não" }
    ])
  }
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/imagem.jpg")}
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
        <Text style={styles.textoView}>
          Picolé de coxinha é a mais nova sensação de 2020, uma delicia em
          formato de picolé.
        </Text>
      </View>
      <Button title="COMPRAR" onPress={comprar} style={styles.btnContainer} />
      <View style={styles.linha} />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },
  imagemProduto: {
    width: 175,
    height: 175,
    marginLeft: 100,
  },
  titulo: {
    paddingHorizontal: "2%",
  },
  textoView: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
  textoTitulo: {
    fontSize: 15,
    lineHeight: 25,
  },
  linha: {
    borderWidth: 1,
    borderBottomColor: "#DDD",
    marginVertical: "2%",
  },
  btnContainer: {
    width: '90%',
    height: 50,
    backgroundColor: '#17181a',
    borderRadius: 5,
    marginVertical: '5%',
    marginLeft: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
