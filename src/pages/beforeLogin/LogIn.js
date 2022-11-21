import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';

const LogIn = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [badEmail, setBadEmail] = useState(false);
    const [password, setPassword] = useState('');
    const [badPassword, setBadPassword] = useState('');

    const onPressLogin = () => {
        if (email == '')
        {
            setBadEmail(true);
        } else
        {
            setBadEmail(false);

        }
        if (password == '')
        {
            setBadPassword(true);
        } else
        {
            setBadPassword(false);
        }
    };
    return (
        <>
            <View style={styles.container}>
                <View style={styles.imageContainer}>

                </View>
                <CustomTextInput value={email} onChange={setEmail} placeholder="E-mail" icon={require("../../../assets/email.png")} />
                {
                    badEmail === true && (
                        <>
                            <Text style={styles.warning}> Plesase Enter Email Id</Text>
                        </>
                    )
                }
                <CustomTextInput placeholder="Password" value={password} onChange={setPassword} icon={require("../../../assets/padlock.png")} />
                {
                    badPassword === true && (
                        <>
                            <Text style={styles.warning}> Plesase Enter Valid Password</Text>
                        </>
                    )
                }
                <CustomButton title={"LogIn"} onPress={onPressLogin} color={"#fff"} backgroundColor={"#8b9dc3"} />
                <Text style={styles.accountText} onPress={() => navigation.navigate("SignUp")}> Create New Account ?</Text>
            </View>
        </>
    );
};

export default LogIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#ff5a66",
        marginTop: 20,
        marginBottom: 20,
    },
    leftTitle: {
        alignSelf: 'stretch',
        textAlign: 'left',
        marginLeft: 20,
    },
    imageContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 140,
        borderWidth: 0.3,
        width: 140,
        borderRadius: 100,
        marginBottom: 70,
        marginTop: 60,
        marginLeft: "33%"
    },
    accountText: {
        marginTop: 30,
        alignSelf: "center",
        fontSize: 18,
        fontWeight: "600",
        color: "#878786",
        textDecorationLine: "underline"
    },
    warning: {
        marginTop: 10,
        marginLeft: 24,
        left: 10,
        color: "red",
    }
});