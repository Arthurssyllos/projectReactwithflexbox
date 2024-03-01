import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

const Quadradopequeno  = ({props}) => {
    const {cor} = props;
    return (
        <View style = {{...style.pequeno,
        backgroundColor: `${cor}`}}></View>
    );

}

const Quadradomedio  = ({props}) => {
    const {cor} = props;
    return (
        <View style = {{...style.medio,
            backgroundColor: `${cor}`}}></View>
    );

}

const Quadradogrande  = ({props}) => {
    const {cor} = props;
    return (
        <View style = {{...style.grande,
            backgroundColor: `${cor}`}}></View>
    );

}

const Quadrado  = () => {
    
    return (
        <View style ={{...style.container}}>
            <Quadradopequeno cor={'purple'}/>
            <Quadradomedioc cor={'cyan'}/>
            <Quadradogrande cor={'pink'}/>
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
    },

});