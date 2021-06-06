/*  GeneralScreen.js describes functionality and visualisation that the general screen
*   is entitled to have. Functionality includes filtering of the post, Post display, and post
*   creation.
*
*
*
*   NOTE!!: GeneralScreen.js is not fully implemented and will need to be further developed
*           in order to have full functionality.
*           Ex: Post accessory features are not implemented; ie up/down votes, direct message, etc.
*/

import React, { Component, useState } from 'react';
import { Image, SafeAreaView, View, FlatList, StyleSheet, Text,TouchableOpacity, Alert, Button, TouchableHighlight } from 'react-native';
import Post from 'ttext/src/Post.js';
import GeneralPost from './GeneralPost';
import { createStackNavigator } from '@react-navigation/stack';
import Header from 'ttext/src/Header';

const searchKey=Header.textInputValue;



export default class GeneralScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshFlatList: true,
            filteredData: [],
            allData: [],
            allColor: '#F87D0B',
            psaColor: '#FFFFFF',
            followingColor: '#FFFFFF',
            helpColor: '#FFFFFF',
        };

        this.selectItem = this.selectItem.bind(this);
        this.changeColor = this.changeColor.bind(this);
      }

    componentDidMount() {
        this.setData();
      }

    //initializes dummy info to put on display for demonstration purposes
    setData = () => {
        //sample items & ask server to get data here
        var temp=[]
        for(let i=0;i<10;i++){
            let p=new Post();
            p.id=i;
            p.title="Post"+i;
            p.detail+=' '+p.title
            temp.push(p)
        }
        this.setState({
            filteredData: temp,
            allData: temp,
        });
      }

    //This acts as functionality for tab navigation by showing selected posts depending on the
    //category chosen. This is also hard coded
    selectItem = (category) =>{
        var array = Object.assign([], this.state.allData);
        console.log(category)
        if(category=='All'){
            this.setState({filteredData: array, refreshFlatList: !this.state.refreshFlatList});
        }
        else if(category=='PSA'){
            var temp=[];
            for(let i=0;i<array.length;i++){
                if(i%2==0){
                    temp.push(array[i])
                }
            }
            this.setState({filteredData: temp, refreshFlatList: !this.state.refreshFlatList});
        }
        else if(category=='Following'){
            var temp=[];
            for(let i=0;i<array.length;i++){
                if(i%2==1){
                    temp.push(array[i])
                }
            }
            this.setState({filteredData: temp, refreshFlatList: !this.state.refreshFlatList});
        }
        else if(category=='Help'){
            var temp=[];
            for(let i=0;i<array.length;i++){
                if(array[i].title=='Post2'){
                    temp.push(array[i])
                }
                if(array[i].title=='Post5'){
                    temp.push(array[i])
                }
            }
            this.setState({filteredData: temp, refreshFlatList: !this.state.refreshFlatList})
        }
    }

    //This acts as visual effects when tabs are being changed between one another
    changeColor = (tab) =>{
        if(tab=='All'){
            this.setState({
                allColor: '#F87D0B',
                psaColor: '#FFFFFF',
                followingColor: '#FFFFFF',
                helpColor: '#FFFFFF',
            })
        }else if(tab=='PSA'){
            this.setState({
                allColor: '#FFFFFF',
                psaColor: '#F87D0B',
                followingColor: '#FFFFFF',
                helpColor: '#FFFFFF',
            })
        }else if(tab=='Following'){
            this.setState({
                allColor: '#FFFFFF',
                psaColor: '#FFFFFF',
                followingColor: '#F87D0B',
                helpColor: '#FFFFFF',
            })
        }else if(tab=='Help'){
            this.setState({
                allColor: '#FFFFFF',
                psaColor: '#FFFFFF',
                followingColor: '#FFFFFF',
                helpColor: '#F87D0B',
            })
        }
    }

    render(){
        const renderItem = ({ item, onPress }) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('GeneralPost',{item},)}>
            <View style={styles.post}>
                <View style={styles.top}>
                    <Image
                        source={require("ttext/src/assets/aqua.png")}
                        resizeMode="contain"
                        style={styles.icon}
                    ></Image>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <Text style={styles.detail}>{item.detail}</Text>
                <View style={styles.image4Row}>
                  <Image
                    source={require("ttext/src/assets/message_icon.png")}
                    resizeMode="contain"
                    style={styles.image4}
                  ></Image>
                  <Image
                    source={require("ttext/src/assets/messages_symbol.png")}
                    resizeMode="contain"
                    style={styles.image3}
                  ></Image>
                  <Image
                    source={require("ttext/src/assets/up_arrow.png")}
                    resizeMode="contain"
                    style={styles.image2}
                  ></Image>
                  <Image
                    source={require("ttext/src/assets/down_arrow.png")}
                    resizeMode="contain"
                    style={styles.image}
                  ></Image>
                </View>
            </View>
            </TouchableOpacity>
        );

        return (
        <View style={styles.container}>
            <Header/>
            <View style={{flexDirection: 'row',}}>

                <TouchableHighlight style={[{flex:1},{backgroundColor: this.state.allColor}]} onPress={() => {this.changeColor('All'); this.selectItem('All');}}>
                    <Text style={styles.tab}>All</Text>
                </TouchableHighlight>

                <TouchableHighlight style={[{flex:1},{backgroundColor: this.state.psaColor}]} onPress={() => {this.changeColor('PSA'); this.selectItem('PSA');}}>
                    <Text style={styles.tab}>PSA</Text>
                </TouchableHighlight>

                <TouchableHighlight style={[{flex:1},{backgroundColor: this.state.followingColor}]} onPress={() => {this.changeColor('Following'); this.selectItem('Following');}}>
                    <Text style={styles.tab}>Following</Text>
                </TouchableHighlight>

                <TouchableHighlight style={[{flex:1},{backgroundColor: this.state.helpColor}]} onPress={() => {this.changeColor('Help'); this.selectItem('Help');}}>
                    <Text style={styles.tab}>Help</Text>
                </TouchableHighlight>
            </View>

            <FlatList   //extraData to re-render DATA
                data={this.state.filteredData}
                extraData={this.state.refreshFlatList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View style={{position: 'absolute', bottom:20, right:30,zIndex: 10,width: 50, height: 50,}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('PostGeneral')}>
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
        flexDirection:'column',
        backgroundColor: '#FFFFFF'
        //marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 0,
        marginVertical: 5,//margin between item rows
        marginHorizontal: 5,//margin between image and texts
    },
    //style to describe the post title/header
    title: {
        fontSize: 28,
        marginLeft: 10,
    },
    //style to describe the details in the initial preview of the post
    detail: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: 0,
    },
    //style to describe post
    post: {
        height: 110,
        borderWidth: 1,
        borderColor: "#20232a",
    },
    //style to describe profile picture
    icon: {
        width:30,
        height:30,
        marginTop: 5,
        marginLeft: 5,
    },
    //style to describe top tab navigation
    tab: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#20232a",
    },
    //styles to describe the dimensions of each post
    image4: {
        width: 20,
        height: 20
    },
    image3: {
        width: 20,
        height: 20,
        marginLeft: 13
    },
    image2: {
        width: 20,
        height: 20,
        marginLeft: 11
    },
    image: {
        width: 19,
        height: 19,
        marginTop: 2,
        marginLeft: 7
    },
    //style to describe the bottom post accessory features: direct messaging, commenting, up/down voting
    image4Row: {
        height: 19,
        flexDirection: "row",
        flex: 1,
        marginRight: 0,
        marginLeft: 274,
        marginTop: 20
    },
    //style to describe each post header: Profile picture and Title of the post
    top: {
        height: 19,
        flexDirection: "row",
        flex: 1,
        marginLeft: 5,
    },
});

