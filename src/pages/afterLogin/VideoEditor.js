import { Image, StyleSheet, ScrollView, Text, View } from 'react-native';
import React from 'react';
import VideoEditButton from '../../components/VideoEditButton';
import AccessPhotos from './AccessPhotos';
import AccessVideos from './AccessVideos';
import ImagePickerTry from './ImagePickerTry';

const VideoEditor = () => {
    return (
        <>
            <>
                {/* <View style={styles.editContainer}>
                    <Image source={require("../../../assets/images/Account.png")} style={{ width: "85%", height: "85%", }} />

                </View> */}
                <ImagePickerTry />
                {/* <Text>Access Photos</Text>
                <AccessPhotos />
                <Text>Access Videos</Text>
                <AccessVideos />
                <Text>Access Videos</Text> */}

                <ScrollView style={styles.toolsContainer} scrollEnabled={true} horizontal={true}>
                    <VideoEditButton toolsName={"Create"} image={require("../../../assets/ToolsIcons/video-editing.png")} />
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
        </>
    );
};

export default VideoEditor;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        backgroundColor: "#000",
        height: "100%",
        width: "100%"
    },
    editContainer: {
        height: "65%",
        width: "100%",
        backgroundColor: "#0b0b1b",
        justifyContent: 'center',
        alignItems: 'center',
    },
    toolsContainer: {
        height: 70,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#000"
    }
});