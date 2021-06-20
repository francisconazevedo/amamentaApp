import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import styles from "./styles";

import MoreData from "../../components/moreData";

const list = [
  {
    name: "Amy Farha",
    avatar_url: require("../../../assets/truthmiths.png"),
    subtitle: "Vice President",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
];

export const Home = () => (
  <ScrollView style={styles.container}>
    <View style={{ alignItems: "center" }}>
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
      <TouchableOpacity>
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
      <TouchableOpacity>
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
      <TouchableOpacity>
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
);
