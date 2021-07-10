import React, { useState, useEffect } from "react";
import { View, Text, AsyncStorage, TextInput, Button } from "react-native";
import styles from "./styles";
import { Formik } from 'formik';


export const Register = ({ navigation }) => {

  const [donater, setDonater] = useState({
    name: '',
    second_name: '',
    contact: '',
    cep: '',
    address: '',
    number: '',
    complement: ''
  });

  const onClickRegister = async () => {
    try {
      await AsyncStorage.setItem('donater', donater)
      navigation.navigate("Home");
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <Text> { } </Text>
          <TextInput style={styles.textinput} onChangeText={handleChange('name')} onBlur={handleBlur('name')} value={donater.name} onChange={(e) => { setDonater({ ...donater, name: e.value }) }} placeholder="Nome" />
          <TextInput style={styles.textinput} value={donater.second_name} onChange={(e) => { setDonater({ ...donater, second_name: e.value }) }} placeholder="Sobrenome" />
          <TextInput style={styles.textinput} value={donater.contact} onChange={(e) => { setDonater({ ...donater, contact: e.value }) }} placeholder="Contato" />
          <TextInput style={styles.textinput} value={donater.cep} onChange={(e) => { setDonater({ ...donater, cep: e.value }) }} placeholder="CEP" />
          <TextInput style={styles.textinput} value={donater.address} onChange={(e) => { setDonater({ ...donater, address: e.value }) }} placeholder="Endereço" />
          <TextInput style={styles.textinput} value={donater.number} onChange={(e) => { setDonater({ ...donater, number: e.value }) }} placeholder="Numero" />
          <TextInput style={styles.textinput} value={donater.complement} onChange={(e) => { setDonater({ ...donater, complement: e.value }) }} placeholder="Complemento" />
          <Button title="Enviar" onPress={onClickRegister} />
        </View>
      )}
    </Formik>
  )

};
