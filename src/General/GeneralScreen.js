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
            <View style={{flex: 0.5, flexDirection: 'row',}}>

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

            <View style={{flex:10}}>
                <FlatList   //extraData to re-render DATA
                    data={this.state.filteredData}
                    extraData={this.state.refreshFlatList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
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
    title: {
        fontSize: 28,
        marginLeft: 10,
    },
    detail: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: 0,
    },
    post: {
        height: 110,
        borderWidth: 1,
        borderColor: "#20232a",
    },
    icon: {
        width:30,
        height:30,
        marginTop: 5,
        marginLeft: 5,
    },
    tab: {
        flex:1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#20232a",
    },
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
    image4Row: {
        height: 19,
        flexDirection: "row",
        flex: 1,
        marginRight: 0,
        marginLeft: 274,
        marginTop: 20
    },
    top: {
        height: 19,
        flexDirection: "row",
        flex: 1,
        marginRight: 0,
        marginLeft: 5,
        marginTop: 0,
    },
    rect: {
        width: 250,
        height: 14,
        backgroundColor: "rgb(128,128,128)",
        marginTop: 0,
        marginLeft: 30
    },
});

