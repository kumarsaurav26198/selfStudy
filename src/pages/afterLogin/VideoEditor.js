import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import * as Imagepicker from 'react-native-image-picker';
import VideoEditButton from '../../components/VideoEditButton';
import Video from 'react-native-video';


const VideoEditor = () => {
    const [response, setResponse] = useState(null);

    const handlechoosephoto = () => {
        const options = { mediaType: 'video', noData: 'false' };
        Imagepicker.launchImageLibrary(options, setResponse);
    };
    console.log(response);
    return (
        <>
            <View style={styles.editContainer}>
                {response?.assets &&
                    response?.assets.map(({ uri }) => (
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
                    ))}
            </View>


            <ScrollView style={styles.toolsContainer} scrollEnabled={true} horizontal={true}>
                <VideoEditButton toolsName={"Create"} image={require("../../../assets/ToolsIcons/video-editing.png")} onPress={handlechoosephoto} />
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
    },
    backgroundVideo: {
        height: "100%",
        width: "100%",
        aspectRatio: 1,
    },
    toolsContainer: {
        height: 70,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#000"
    }
});