import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../src/pages/beforeLogin/LogIn';
import SignUp from '../src/pages/beforeLogin/SignUp';
import Home from '../src/pages/afterLogin/Home';
import VideoEditor from '../src/pages/afterLogin/VideoEditor';


const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

export const SignedInStack = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="VideoEditor">
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name='VideoEditor' component={VideoEditor} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export const SignedOutStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LogIn" screenOptions={screenOptions}>
                <Stack.Screen name="LogIn" component={LogIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 20,
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'black',
    },
    headerStyle: {
        backgroundColor: '#f4511e',
    },
});