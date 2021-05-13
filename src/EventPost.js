import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Post from './Post.js';

export default class EventPost extends Component {
    render(){
        const {item}=this.props.route.params;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{item.title}</Text>
                <Text>{item.detail}</Text>
            </View>
        );
    }
}