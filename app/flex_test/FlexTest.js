/**
 * Created by liuyuan on 2018/3/26.
 */
import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

export default class FlexTest extends Component {
    render() {
        return (
            <View style={FlexTestStyle.container}>
                <Text style={FlexTestStyle.item1}>1</Text>
                <Text style={FlexTestStyle.item1}>2</Text>
                <Text style={FlexTestStyle.item1}>3</Text>
                <Text style={FlexTestStyle.item1}>4</Text>
                <Text style={FlexTestStyle.item2_flex_end}>5</Text>
            </View>
        )
    }
}

const FlexTestStyle = StyleSheet.create(
    {
        container: {
            backgroundColor: "#0ff",
            flexDirection: "row",
            flex: 1,
        },
        item1: {
            backgroundColor: "#f0f",
            flexGrow: 1,
            margin: 4,
            height: 100,
        },
        item2_flex_end: {
            backgroundColor: "#ff0",
            flexGrow: 1,
            margin: 4,
            height: 100,
            alignSelf: "flex-end",
        }
        // container: {
        //     backgroundColor: "blue",
        //     height: 300,
        //     width: 200,
        //     justifyContent: "space-between",
        //     flexWrap: "wrap",
        //     flexDirection: "row",
        // },
        // item1: {
        //     color: "#fff",
        //     backgroundColor: "#000",
        //     height: 80,
        //     width: 80,
        //     textAlign: "center",
        //     margin: 4,
        // },
        // item2: {
        //     color: "#fff",
        //     backgroundColor: "#000",
        //     height: 80,
        //     width: 80,
        //     textAlign: "center",
        //     margin: 4,
        // },
        // item3:{
        //     color: "#fff",
        //     backgroundColor: "#000",
        //     height: 80,
        //     width: 80,
        //     textAlign: "center",
        //     textAlignVertical:"center",
        //     alignSelf:"flex-end",
        //     margin: 4,
        // },
        // item4:{
        //     color: "#fff",
        //     backgroundColor: "#000",
        //     height: 80,
        //     width: 80,
        //     textAlign: "center",
        //     textAlignVertical:"center",
        //     margin: 4,
        // }
    }
)
