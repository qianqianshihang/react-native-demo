import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
} from "react-native";
import ParallaxScrollView from 'react-native-parallax-scroll-view'

export default class ParallaxTest extends Component {

    constructor() {
        super();
        this.state = {
            fluidSizeIndex: 0,
        };
    }


    render() {
        return (
            <View>
                <ParallaxScrollView
                    style={{flex: 1, backgroundColor: 'hotpink', overflow: 'hidden'}}
                    renderBackground={() => <Image
                        source={{uri: `https://placekitten.com/414/350`, width: window.width, height: 350}}/>}
                    renderFixedHeader={() => <Text
                        style={{textAlign: 'right', color: 'white', padding: 5, fontSize: 20}}>Hello</Text>}
                    parallaxHeaderHeight={350}>
                    <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 30 }}>Meow!</Text></View>
                </ParallaxScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    example: {
        paddingVertical: 10,
    },
    title: {
        margin: 10,
        fontSize: 20,
    },
});