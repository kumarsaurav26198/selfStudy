import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';
import React, { useState, useCallback } from 'react';
import VideoEditButton from '../../components/VideoEditButton';
import Video from 'react-native-video';
import * as ImagePicker from 'react-native-image-picker';



const VideoEditor = () => {
    const [response, setResponse] = useState(null);

    const handleChooselaunchCamera = () => {
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
    const handlechooseImage = useCallback((type, options) => {
        if (type === 'capture')
        {
            ImagePicker.launchCamera(options, setResponse);
        } else
        {
            ImagePicker.launchImageLibrary(options, setResponse);
        }
    }, []);
    const handlechooseVideo = () => {
        const options = { mediaType: 'video', noData: 'false' };
        ImagePicker.launchImageLibrary(options, setResponse);
    };
    const handlechooseCutVideo = () => {
        const options = { mediaType: 'video', noData: 'false' };
        ImagePicker.launchImageLibrary(options, setResponse);
    };

    return (
        <>
            <View style={styles.editContainer}>

                {response?.assets &&
                    response?.assets.map(({ uri }) => (
                        <>
                            {response.assets[0].type === "video/mp4" ?
                                <>
                                    <View>
                                        <Video
                                            source={{ uri: uri }}
                                            repeat={true}
                                            playInBackground={false}
                                            playWhenInactive={false}
                                            style={styles.backgroundVideo}
                                            controls={true}
                                            muted={false}
                                            volume={1}
                                            duration={0.0}
                                            currentTime={0.0}
                                            paused={false}
                                            // onBuffer={self.onBuffer}
                                            // onEnd={self.onEnd}
                                            onError={self.videoError}
                                            onFullscreenPlayerWillPresent={self.fullScreenPlayerWillPresent}
                                            onFullscreenPlayerDidPresent={self.fullScreenPlayerDidPresent}
                                            onFullscreenPlayerWillDismiss={self.fullScreenPlayerWillDismiss}
                                            onFullscreenPlayerDidDismiss={self.fullScreenPlayerDidDissmiss}
                                            onLoad={self.setDuration}
                                            onProgress={self.setTime}
                                            // onTimedMetadata={self.onTimedMetadata}
                                            // onLoadStart={self.loadStart}
                                            resizeMode={"contain"}
                                            fullscreen={false}
                                        // ref={ref => {
                                        //     player = ref;
                                        // }}
                                        />


                                    </View>
                                </> : <>
                                    <View key={uri} style={styles.imageContainer}>
                                        <Image
                                            resizeMode="cover"
                                            resizeMethod="scale"
                                            style={styles.image}
                                            source={{ uri: uri }}
                                        />
                                    </View>
                                </>
                            }
                        </>
                    ))}
            </View>


            <ScrollView style={styles.toolsContainer} scrollEnabled={true} horizontal={true}>
                <VideoEditButton toolsName={"Camera"} image={require("../../../assets/ToolsIcons/camera.png")} onPress={handleChooselaunchCamera} />
                <VideoEditButton toolsName={"Image"} image={require("../../../assets/ToolsIcons/video-editing.png")} onPress={handlechooseImage} />
                <VideoEditButton toolsName={"Video"} image={require("../../../assets/ToolsIcons/video-editorIcon.png")} onPress={handlechooseVideo} />
                <VideoEditButton toolsName={"Cut"} image={require("../../../assets/ToolsIcons/video-editor.png")} onPress={handlechooseCutVideo} />
                <VideoEditButton toolsName={"Merge"} image={require("../../../assets/ToolsIcons/tab.png")} />
                <VideoEditButton toolsName={"Split"} image={require("../../../assets/ToolsIcons/video-editor.png")} />
                <VideoEditButton toolsName={"FX"} image={require("../../../assets/ToolsIcons/effects.png")} />
                <VideoEditButton toolsName={"Template"} image={require("../../../assets/ToolsIcons/effects.png")} />
                <VideoEditButton toolsName={"Speed"} image={require("../../../assets/ToolsIcons/effects.png")} />
                <VideoEditButton toolsName={"Trim"} image={require("../../../assets/ToolsIcons/effects.png")} />
                <VideoEditButton toolsName={"Template"} image={require("../../../assets/ToolsIcons/effects.png")} />
                <VideoEditButton toolsName={"Speed"} image={require("../../../assets/ToolsIcons/effects.png")} />
                <VideoEditButton toolsName={"Trim"} image={require("../../../assets/ToolsIcons/effects.png")} />
                <VideoEditButton toolsName={"Template"} image={require("../../../assets/ToolsIcons/effects.png")} />
                <VideoEditButton toolsName={"Speed"} image={require("../../../assets/ToolsIcons/effects.png")} />
                <VideoEditButton toolsName={"Trim"} image={require("../../../assets/ToolsIcons/effects.png")} />
            </ScrollView>
        </>
    );
};

export default VideoEditor;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        height: "100%",
        width: "100%"
    },
    editContainer: {
        height: "65%",
        width: "100%",
        backgroundColor: "#0b0b1b",
        alignItems: 'center',
        justifyContent: "center"
    },
    backgroundVideo: {
        height: "100%",
        width: "100%",
        aspectRatio: 1,
    },
    imageContainer: {
        height: "97%",
        width: "97%",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    toolsContainer: {
        height: 70,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#000"
    }
});