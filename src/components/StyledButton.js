import React from 'react';
import { View, Text, Pressable, StyleSheet } from "react-native";

const StyledButton = (props) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => {}}>
            <Text style={styles.text}>Đăng nhập</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
    },
    button:{
        backgroundColor: "#2D6AAD",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    text: {
        color: "white",
        fontSize: 12,
        fontWeight: "500",
        textTransform: "uppercase",
    },
});

export default StyledButton;