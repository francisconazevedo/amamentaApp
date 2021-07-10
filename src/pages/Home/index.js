import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Button } from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

const gotomilk = async () => {
    navigation.navigate("Register");
};

export const Home = () => {
  const navigation = useNavigation();

  return (
  <ScrollView style={styles.container}>
    <View style={{ alignItems: "center", justifyContent: 'center' }}>
      <Image
        style={styles.stretch}
        source={require("../../../assets/icon.png")}
      />

      <Text style={styles.textTitle}> Bem-vindo ao Amamenta-SE! </Text>
      <Text style={styles.subtitle}>
        Aqui você pode obter mais informações sobre sobre doação de leite,
        conhecer quais os mitos e verdades sobre o tema e até onde você pode
        entrar bancos para doação!
      </Text>
    </View>
    <View style={{ justifyContent: "center", margin: 15 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Informations')}>
        <View style={styles.card}>
          <Image
            style={{ borderRadius: 20, width: 60, height: 60 }}
            source={require("../../../assets/donate.png")}
          />
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={styles.textCard}>Como doar</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Mythstruths')}>
        <View style={styles.card}>
          <Image
            style={{ borderRadius: 20, width: 60, height: 60 }}
            source={require("../../../assets/truthmiths.png")}
          />
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={styles.textCard}>Mito ou verdade?</Text>
          </View>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Links')}>
        <View style={styles.card}>
          <Image
            style={{ borderRadius: 20, width: 60, height: 60 }}
            source={require("../../../assets/link.png")}
          />
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={styles.textCard}>Links Úteis</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  </ScrollView>
)};
