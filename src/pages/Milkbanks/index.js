import React, { useEffect, useState } from 'react'; 
import { View, Text, Image, Button, Linking } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './styles.js';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const ScreenContainer = ({children}) => (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <Image source={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fimagem&psig=AOvVaw1hyjqeHgknu4BQlawcuf3H&ust=1623724758019000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDl0p6MlvECFQAAAAAdAAAAABAJ"}/>
            <Text style={styles.headerText}>
                Bancos de Leite
            </Text>
            <TouchableOpacity>
            </TouchableOpacity>
        </View> 
        
        <View >
            <Card 
                image={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fimagem&psig=AOvVaw1hyjqeHgknu4BQlawcuf3H&ust=1623724758019000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDl0p6MlvECFQAAAAAdAAAAABAJ"}>
                <Text style={{marginBottom: 10}}>
                Banco de Leite Humano Marly Sarney
                R. Mato Grosso, 1401 · (79) 3226-6301
                Closed ⋅ Opens 7AM Mon
                </Text>
                <Button title="Entrar em contato" onPress={ ()=>{ Linking.openURL(notice.link)}} />
            </Card>
            <Card 
                image={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fimagem&psig=AOvVaw1hyjqeHgknu4BQlawcuf3H&ust=1623724758019000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDl0p6MlvECFQAAAAAdAAAAABAJ"}>
                <Text style={{marginBottom: 10}}>
                Banco de Leite Humano Marly Sarney
                R. Mato Grosso, 1401 · (79) 3226-6301
                Closed ⋅ Opens 7AM Mon
                </Text>
                <Button title="Entrar em contato" onPress={ ()=>{ Linking.openURL(notice.link)}} />
            </Card>
            <Card 
                image={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fimagem&psig=AOvVaw1hyjqeHgknu4BQlawcuf3H&ust=1623724758019000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDl0p6MlvECFQAAAAAdAAAAABAJ"}>
                <Text style={{marginBottom: 10}}>
                Banco de Leite Humano Marly Sarney
                R. Mato Grosso, 1401 · (79) 3226-6301
                Closed ⋅ Opens 7AM Mon
                </Text>
                <Button title="Entrar em contato" onPress={ ()=>{ Linking.openURL(notice.link)}} />
            </Card>
            <Card 
                image={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fimagem&psig=AOvVaw1hyjqeHgknu4BQlawcuf3H&ust=1623724758019000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDl0p6MlvECFQAAAAAdAAAAABAJ"}>
                <Text style={{marginBottom: 10}}>
                Banco de Leite Humano Marly Sarney
                R. Mato Grosso, 1401 · (79) 3226-6301
                Closed ⋅ Opens 7AM Mon
                </Text>
                <Button title="Entrar em contato" onPress={ ()=>{ Linking.openURL(notice.link)}} />
            </Card>
            <Card 
                image={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fimagem&psig=AOvVaw1hyjqeHgknu4BQlawcuf3H&ust=1623724758019000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDl0p6MlvECFQAAAAAdAAAAABAJ"}>
                <Text style={{marginBottom: 10}}>
                Banco de Leite Humano Marly Sarney
                R. Mato Grosso, 1401 · (79) 3226-6301
                Closed ⋅ Opens 7AM Mon
                </Text>
                <Button title="Entrar em contato" onPress={ ()=>{ Linking.openURL(notice.link)}} />
            </Card>
            
        </View>
    </ScrollView>
)

export const Milkbanks = () => (
    <ScreenContainer/>
)