import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const VideoEditButton = ({ toolsName, image, onPress }) => {
    return (
        <TouchableOpacity style={styles.cardButton} onPress={onPress}>
            <Image
                style={styles.icon}
                source={image}
            />
            <Text style={styles.text}>{toolsName}</Text>
        </TouchableOpacity>
    );
};

export default VideoEditButton;

const styles = StyleSheet.create({
    cardButton: {
        width: 60,
        height: 70,
        backgroundColor: "#000",
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        height: 25,
        width: 25,
        tintColor: "#8e8e8e",
    },
    text: {
        textAlign: "center",
        color: "white"
    }
});