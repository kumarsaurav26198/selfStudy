import React, { useState, useEffect } from 'react';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import {
    Image,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    View,
    Button,
    StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';

const AccessPhotos = () => {
    useEffect(() => {
        getPhotos();
    }, []);

    const getPhotos = async () => {
        const photos = await CameraRoll.getPhotos({
            first: 10
        });
        console.log(photos, "photos");
        setNodes(photos.edges.map(edge => edge.node));
    };
    const [nodes, setNodes] = useState([]);
    const [detailViewVisible, setDetailViewVisibility] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    {
                        detailViewVisible
                            ? (
                                <Swiper
                                    loop={false}
                                    index={selectedIndex}
                                >
                                    {
                                        nodes.map(
                                            (node, index) => (
                                                <View
                                                    key={index}
                                                    style={{
                                                        flex: 1,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        backgroundColor: '#333',
                                                    }}
                                                >
                                                    <Image
                                                        style={{
                                                            width: "100%",
                                                            flex: 1,
                                                        }}
                                                        resizeMode="contain"
                                                        source={{
                                                            uri: node.image.uri
                                                        }}
                                                    />
                                                    <View
                                                        style={{
                                                            position: 'absolute',
                                                            bottom: 60
                                                        }}
                                                    >
                                                        <Button
                                                            title="Close"
                                                            onPress={() => {
                                                                setDetailViewVisibility(false);
                                                            }}
                                                        />
                                                    </View>
                                                </View>
                                            )
                                        )
                                    }
                                </Swiper>
                            )
                            : (
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    {
                                        nodes.map(
                                            (node, index) => (
                                                <TouchableOpacity
                                                    key={index}
                                                    style={{
                                                        height: 100,
                                                        minWidth: 100,
                                                        flex: 1
                                                    }}
                                                    onPress={() => {
                                                        setDetailViewVisibility(true);
                                                        setSelectedIndex(index);
                                                    }}
                                                >
                                                    <Image
                                                        style={{
                                                            height: 100,
                                                            minWidth: 100,
                                                            flex: 1
                                                        }}
                                                        source={{
                                                            uri: node.image.uri
                                                        }}
                                                    />
                                                </TouchableOpacity>
                                            )
                                        )
                                    }
                                </View>
                            )
                    }
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default AccessPhotos;

const styles = StyleSheet.create({});