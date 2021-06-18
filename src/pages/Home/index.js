import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./styles";

import MoreData from "../../components/MoreData";

export const Home = () => (
  <View style={styles.container}>
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

    <View style={{ marginTop: 20 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
          <MoreData imageUri={require("./366768.jpg")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MoreData imageUri={require("./366768.jpg")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MoreData imageUri={require("./366768.jpg")} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  </View>
);
