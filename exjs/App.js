import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  Alert,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "https://fujisom.com.br/uploads/produto_fotos/20221229095753_guitarramichaellespaulgm730ncscherrysumburst.jpg",
        }}
      />
      <Text style={{ color: "blue" }}>Vasconcelos</Text>
      <View style={{ backgroundColor: "blue", flex: 1 }}>
        <View style={{ backgroundColor: "red", flex: 1.2 }}>
          <ScrollView>
            <View style={[styles.card, { backgroundColor: "#F08080" }]}>
              <Text style={styles.textoBase}>
                Operando Deus
                <Text style={styles.textoInterno}>Quem impedirá?</Text>
              </Text>
            </View>

            <View style={[styles.card, styles.blue]}>
              <Image
                style={styles.img}
                source={{
                  uri: "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/eletroso/catalog/instrumentos-cordas/tagima/guitarras/t-635/59840-guitarra-tagima-t635-classic-preto-bk-df-mg-pr-15707-t-635-classic-bk-z1-637777590165477691.png",
                }}
              />
            </View>
            <View style={[styles.card, { backgroundColor: "#F08080" }]}>
              <Text style={styles.textoBase}>
                Operando Deus
                <Text style={styles.textoInterno}>Quem impedirá?</Text>
              </Text>
            </View>
            <View style={[styles.card, styles.blue]}>
              <Image
                style={styles.img}
                source={{
                  uri: "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/eletroso/catalog/instrumentos-cordas/tagima/guitarras/t-635/59840-guitarra-tagima-t635-classic-preto-bk-df-mg-pr-15707-t-635-classic-bk-z1-637777590165477691.png",
                }}
              />
            </View>
            <View style={[styles.card, { backgroundColor: "#F08080" }]}>
              <Text style={styles.textoBase}>
                Operando Deus
                <Text style={styles.textoInterno}>Quem impedirá?</Text>
              </Text>
            </View>
            <View style={[styles.card, styles.blue]}>
              <Image
                style={styles.img}
                source={{
                  uri: "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/eletroso/catalog/instrumentos-cordas/tagima/guitarras/t-635/59840-guitarra-tagima-t635-classic-preto-bk-df-mg-pr-15707-t-635-classic-bk-z1-637777590165477691.png",
                }}
              />
            </View>
            <View style={[styles.card, { backgroundColor: "#F08080" }]}>
              <Text style={styles.textoBase}>
                Operando Deus
                <Text style={styles.textoInterno}>Quem impedirá?</Text>
              </Text>
            </View>
            <View style={[styles.card, styles.blue]}>
              <Image
                style={styles.img}
                source={{
                  uri: "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/eletroso/catalog/instrumentos-cordas/tagima/guitarras/t-635/59840-guitarra-tagima-t635-classic-preto-bk-df-mg-pr-15707-t-635-classic-bk-z1-637777590165477691.png",
                }}
              />
            </View>
            <View style={[styles.card, { backgroundColor: "#F08080" }]}>
              <Text style={styles.textoBase}>
                Operando Deus
                <Text style={styles.textoInterno}>Quem impedirá?</Text>
              </Text>
            </View>
            <View style={[styles.card, styles.blue]}>
              <Image
                style={styles.img}
                source={{
                  uri: "https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/eletroso/catalog/instrumentos-cordas/tagima/guitarras/t-635/59840-guitarra-tagima-t635-classic-preto-bk-df-mg-pr-15707-t-635-classic-bk-z1-637777590165477691.png",
                }}
              />
            </View>
          </ScrollView>
        </View>
        <View>
          <Button
            onPress={() => Alert.alert("Quero um MB")}
            title="Mostrar Alerta"
            color={"#2196F3"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  fundo: {
    height: 900,
    width: 400,
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
  blue: {
    backgroundColor: "#836FFF",
  },
  card: {
    marginTop: 10,
    height: 100,
    borderRadius: 3,
    width: 300,
  },

  img: {
    width: 50,
    height: 50,
  },

  textoBase: {
    color: "#000000",
    fontWeight: "bold",
  },

  textoInterno: {
    color: "red",
    fontWeight: "normal",
  },
});
