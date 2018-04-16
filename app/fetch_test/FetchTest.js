/**
 * Created by liuyuan on 2018/3/27.
 */
import React, {Component} from "react";
import {
    Text,
    Image,
    View,
    StyleSheet,
    ToastAndroid
} from "react-native";

export default class FetchTest extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    render() {
        let item = this.state.user;
        if (item == null) {
            return (<Text style={fetchStyle.text_style}>加载中。。。</Text>)
        } else {
            return this.renderItem(item)
        }
    }

    renderItem(item) {
        return (<View style={fetchStyle.container_out}>
            <Image style={fetchStyle.image_style} source={{uri:item.owner.avatar_url}}/>
            <View style={fetchStyle.container_inner}>
                <Text>{item.name}</Text>
                <Text>{item.owner.login}</Text>
            </View>
        </View>)
    }


    componentDidMount() {
        this.fetchUser()
    }

    fetchUser() {
        const url = "https://api.github.com/users/mralexgray/repos";
        fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                var usrs = responseJson;
                this.setState({
                    user: usrs[0],
                })
            })
            .catch(error => ToastAndroid.show("catch", ToastAndroid.SHORT))
    }
}

const fetchStyle = StyleSheet.create({
    text_style: {
        color: "red",
        fontSize: 28,
        textAlign: "center"
    },
    container_out: {
        flexDirection: "row"
    },
    image_style: {
        borderRadius: 80,
        width: 80,
        height: 80,
        resizeMode: "contain"
    },
    container_inner: {
        flexDirection: "column",
        flexGrow: 1
    }
})