import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useCallback } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import CustomButton from '../../components/CustomButton';

const ImagePickerTry = () => {
    const [response, setResponse] = useState(null);
    const onButtonPress = useCallback((type, options) => {
        if (type === 'capture')
        {
            ImagePicker.launchCamera(options, setResponse);
        } else
        {
            ImagePicker.launchImageLibrary(options, setResponse);
        }
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Text>🌄 React Native Image Picker</Text>
            <ScrollView>
                <CustomButton title={"ImagePicker"} backgroundColor={"red"} onPress={onButtonPress} color={"blue"} />
                {response?.assets &&
                    response?.assets.map(({ uri }) => (
                        <View key={uri} style={styles.imageContainer}>
                            <Image
                                resizeMode="cover"
                                resizeMethod="scale"
                                style={styles.image}
                                source={{ uri: uri }}
                            />
                        </View>
                    ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default ImagePickerTry;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aliceblue',
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 8,
    },
    imageContainer: {
        marginVertical: 24,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
});