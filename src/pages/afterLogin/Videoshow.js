import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Imagepicker from 'react-native-image-picker';
import Video from 'react-native-video';
import CustomButton from '../../components/CustomButton';

const Videoshow = () => {
    const [ response, setResponse ] = useState(null);
    const handlechoosephoto = () => {
        const options = { mediaType: 'video', noData: 'false' };
        Imagepicker.launchImageLibrary(options, setResponse);
    };
    console.log(response);
    return (
        <>
            <View style={styles.videoContainer}>
                {response?.assets &&
                    response?.assets.map(({ uri }) => (
                        <View>
                            <Video
                                source={{ uri: uri }}
                                style={styles.backgroundVideo}
                                controls={true}
                                fullscreen={false}
                                ref={ref => {
                                    this.player = ref;
                                }}
                            />
                        </View>
                    ))}
            </View>
            <CustomButton title="Select video" onPress={handlechoosephoto} backgroundColor={"#efbfff"} color={"#fff"} />
        </>
    );
};

export default Videoshow;

const styles = StyleSheet.create({
    videoContainer: {
        flex: 1,
        height: 500,
        width: "100%",
        backgroundColor: "red",
        backgroundColor: "#000",
    },
    backgroundVideo: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        justifyContent: 'center',
        alignContent: "center",
        alignItems: "center",
        border: 2
        // backgroundColor: "#000",
        // alignItems: 'center',
    },

});