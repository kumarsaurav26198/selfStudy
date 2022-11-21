import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';

const CustomTextInput = (props) => {
    const { value, placeholder, icon, type, onChange, keyboardType } = props;
    return (
        <>
            <View style={styles.container}>
                <Image source={icon} style={styles.imageContainer} />
                <TextInput style={styles.textContainer}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    secureTextEntry={type ? true : false}
                    keyboardType={keyboardType}
                />
            </View>
        </>
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        borderWidth: 0.5,
        borderRadius: 50,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,

    },
    imageContainer: {
        width: 24,
        height: 24
    },
    textContainer: {
        marginLeft: 10
    }
});