import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const VideoEditor = () => {
    const onPress = () => {

    };
    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text style={styles.newText}>New Project</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default VideoEditor;

const styles = StyleSheet.create({
    container: {
        width: "50%",
        height: 60,
        borderWidth: 1,
        borderRadius: 30,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 50,
        backgroundColor: "#3a89fb",
    },
    newText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 30,
    }
});