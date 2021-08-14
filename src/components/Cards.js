import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cards = (props) => {
    return (
        <View style={Styles.cards}>

        </View>
    );
}

const styles = StyleSheet.create({
    cards: {
        backgroundColor: "#ffffff",
        width: 200,
        height: 200,
        borderRadius: 5,
        shadowRadius: 5,
    },
})

export default Cards;