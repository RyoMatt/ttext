import React, { Component, useState } from 'react';
import { Image, SafeAreaView, View, FlatList, StyleSheet, Text,TouchableOpacity, Alert, Button, TouchableHighlight } from 'react-native';
import Post from 'ttext/src/Post.js';
import EventPost from './EventPost';
import { createStackNavigator } from '@react-navigation/stack';
import Header from 'ttext/src/Header';

const searchKey=Header.textInputValue;

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
    tab: {
        flex:1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#20232a",
    },
});

export default class EventScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshFlatList: true,
            filteredData: [],
            allData: [],
            allColor: '#F87D0B',
            schoolColor: '#FFFFFF',
            nearMeColor: '#FFFFFF',
            followColor: '#FFFFFF',
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
            p.title="event"+i;
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
        else if(category=='School'){
            var temp=[];
            for(let i=0;i<array.length;i++){
                if(i%2==0){
                    temp.push(array[i])
                }
            }
            this.setState({filteredData: temp, refreshFlatList: !this.state.refreshFlatList});
        }
        else if(category=='Near Me'){
            var temp=[];
            for(let i=0;i<array.length;i++){
                if(i%2==1){
                    temp.push(array[i])
                }
            }
            this.setState({filteredData: temp, refreshFlatList: !this.state.refreshFlatList});
        }
        else if(category=='Following'){
            var temp=[];
            for(let i=0;i<array.length;i++){
                if(array[i].title=='event2'){
                    temp.push(array[i])
                }
                if(array[i].title=='event5'){
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
                schoolColor: '#FFFFFF',
                nearMeColor: '#FFFFFF',
                followColor: '#FFFFFF',
            })
        }else if(tab=='School'){
            this.setState({
                allColor: '#FFFFFF',
                schoolColor: '#F87D0B',
                nearMeColor: '#FFFFFF',
                followColor: '#FFFFFF',
            })
        }else if(tab=='Near Me'){
            this.setState({
                allColor: '#FFFFFF',
                schoolColor: '#FFFFFF',
                nearMeColor: '#F87D0B',
                followColor: '#FFFFFF',
            })
        }else if(tab=='Following'){
            this.setState({
                allColor: '#FFFFFF',
                schoolColor: '#FFFFFF',
                nearMeColor: '#FFFFFF',
                followColor: '#F87D0B',
            })
        }
    }

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

        return (
        <View style={styles.container}>
            <Header/>
            <View style={{flex: 0.5, flexDirection: 'row',}}>

                <TouchableHighlight style={[{flex:1},{backgroundColor: this.state.allColor}]} onPress={() => {this.changeColor('All'); this.selectItem('All');}}>
                    <Text style={styles.tab}>All</Text>
                </TouchableHighlight>

                <TouchableHighlight style={[{flex:1},{backgroundColor: this.state.schoolColor}]} onPress={() => {this.changeColor('School'); this.selectItem('School');}}>
                    <Text style={styles.tab}>School</Text>
                </TouchableHighlight>

                <TouchableHighlight style={[{flex:1},{backgroundColor: this.state.nearMeColor}]} onPress={() => {this.changeColor('Near Me'); this.selectItem('Near Me');}}>
                    <Text style={styles.tab}>Near Me</Text>
                </TouchableHighlight>

                <TouchableHighlight style={[{flex:1},{backgroundColor: this.state.followColor}]} onPress={() => {this.changeColor('Following'); this.selectItem('Following');}}>
                    <Text style={styles.tab}>Following</Text>
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

