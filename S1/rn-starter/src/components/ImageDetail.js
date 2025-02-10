import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
    return (
        <View>
            <Image source={imageSource} />
            <Text>{title}</Text>
            <Text>Image score - {score}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    }
});

export default ImageDetail;
