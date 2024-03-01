import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

const Quadradopequeno  = () => {

    return (
        <View style = {{...style.pequeno}}></View>
    );

}

const Quadradomedio  = () => {

    return (
        <View style = {{...style.medio,
            backgroundColor: 'red' }}></View>
    );

}

const Quadradogrande  = () => {

    return (
        <View style = {{...style.grande}}></View>
    );

}

const Quadrado  = () => {
    
    return (
        <View style ={{...style.container}}>
            <Quadradopequeno/>
            <Quadradomedio/>
            <Quadradogrande/>
        </View>
    )

}

export default Quadrado;

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'row'
    },
    pequeno: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
    },
    medio: {
        width: 100,
        height: 100,
    },
    grande: {
        width: 150,
        height: 150,
        backgroundColor: 'green',
    }
});