import React, { useEffect } from 'react';
import { Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { useCameraRoll } from "@react-native-camera-roll/camera-roll";

const CameraRollTry = () => {
    const [photos, getPhotos, save] = useCameraRoll();
    const launchCamera = () => {
        const options = { mediaType: 'video', noData: 'false' };
        ImagePicker.launchCamera(
            {
                includeBase64: false,
                mediaType: 'photo',
                quality: 0.8,
            },
            async (response) => {
                if (response.didCancel)
                {
                    console.log('User cancelled image picker');
                } else if (response.error)
                {
                    console.log('ImagePicker Error: ', response.error);
                } else
                {

                }
            },
        );
    };
    return (
        <>
            <Button title='Get Photos' onPress={() => launchCamera()}>Get Photos</Button>


        </>
    );
};

export default CameraRollTry;

const styles = StyleSheet.create({});