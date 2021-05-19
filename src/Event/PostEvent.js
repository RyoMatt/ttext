import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, StatusBar, Button, Alert, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from 'ttext/src/Header';

export default class EventPost extends Component {
    render(){

        return (
            <View style={{flex: 1,flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
                            <Header/>
            </View>
        );
    }
}