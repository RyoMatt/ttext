import React, { Component } from 'react';
import { Image, SafeAreaView, View, FlatList, StyleSheet, Text,TouchableOpacity, Alert } from 'react-native';
import Post from 'ttext/src/Post.js';
import EventPost from './EventPost';
import { createStackNavigator } from '@react-navigation/stack';
import Header from 'ttext/src/Header';

const DATA = Array(10);
const searchKey=Header.textInputValue;

export default class EventScreen extends Component {
    render(){
        const renderItem = ({ item, onPress }) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('EventPost',{item},)}>
            <View style={styles.post}>
                <Image
                    style={styles.icon}
                    source={item.image}
                />
                <View style={styles.item}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.detail}>{item.detail}</Text>

                </View>
            </View>
            </TouchableOpacity>
        );

        //sample items & ask data here
        for(let i=0;i<10;i++){
            let p=new Post();
            p.id=i;
            p.title="event"+i;
            p.detail+=' '+p.title
            DATA[i]=p
        }

        return (
        <View style={styles.container}>
            <Header/>
            <FlatList   //extraData to re-render DATA
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View style={{position: 'absolute', bottom:20, right:30,zIndex: 10,width: 50, height: 50,}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('PostEvent')}>
                    <Image
                        style={{width: 50, height: 50,}}
                        source={require("ttext/src/assets/post_icon.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
        //marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 0,
        marginVertical: 5,//margin between item rows
        marginHorizontal: 5,//margin between image and texts
    },
    title: {
        fontSize: 28,
    },
    detail: {
        fontSize: 15,
    },
    post: {
        height: 125,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#20232a",
    },
    icon: {
        width:100,
        height:100,
        marginTop: 12.5,
        marginLeft: 5,
    },
});