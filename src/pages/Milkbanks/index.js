import React from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import styles from "./styles";

export const Milkbanks = () => (
  <ScrollView style={styles.container}>
    <View>
      <View style={styles.card}>
        <Image
          style={{ borderRadius: 20, width: 110, height: 110, margin: 5 }}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.textCard} numberOfLines={5}>
            TEste 01 duas vezes para tentar resolver o e ver se ta ok ehruiahs
            asdaosdkpaksdajsidoj dajhuisdhj ahusidhaush asuhdihaweq qweq weq we
            qweqwe qweq we qwe qweqweqwe qweq weqwe qwe qwe123 123 1231241
            we1231
          </Text>
          <Pressable style={[styles.button, styles.buttonOpen]}>
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.card}>
        <Image
          style={{ borderRadius: 20, width: 110, height: 110, margin: 5 }}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.textCard} numberOfLines={5}>
            TEste 01 duas vezes para tentar resolver o e ver se ta ok ehruiahs
            asdaosdkpaksdajsidoj dajhuisdhj ahusidhaush asuhdihaweq qweq weq we
            qweqwe qweq we qwe qweqweqwe qweq weqwe qwe qwe123 123 1231241
            we1231
          </Text>
          <Pressable style={[styles.button, styles.buttonOpen]}>
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.card}>
        <Image
          style={{ borderRadius: 20, width: 110, height: 110, margin: 5 }}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.textCard} numberOfLines={5}>
            TEste 01 duas vezes para tentar resolver o e ver se ta ok ehruiahs
            asdaosdkpaksdajsidoj dajhuisdhj ahusidhaush asuhdihaweq qweq weq we
            qweqwe qweq we qwe qweqweqwe qweq weqwe qwe qwe123 123 1231241
            we1231
          </Text>
          <Pressable style={[styles.button, styles.buttonOpen]}>
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable>
        </View>
      </View>
    </View>
  </ScrollView>
);
