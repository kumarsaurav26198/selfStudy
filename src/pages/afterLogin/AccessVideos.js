import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-player';

const AccessVideos = () => {
    return (
        <View>
            <VideoPlayer
                video={{ uri: '../../../assets/DJ.mp4' }}
                videoWidth={1600}
                videoHeight={900}
                thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
            />
        </View>
    );
};

export default AccessVideos;

const styles = StyleSheet.create({});