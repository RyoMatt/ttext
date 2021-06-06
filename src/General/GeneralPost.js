/*  GeneralPost.js describes the functionality and visualization when clicking on
*   a specific post to view more information about the post. Such information includes
*   the comment section and underlying details that may be hidden in the initial
*   preview of the post.
*
*
*
*   NOTE!!: PostGeneral.js is not fully implemented and will need to be further developed
*           in order to have full functionality.
*/
import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, StatusBar, Button, Alert, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Post from 'ttext/src/Post.js';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    text: {
      fontSize: 42,
    },
    logoStyles: {
        width: 200,
        height: 50,
        marginLeft: 20,
        marginRight: 100,
        marginBottom: 0,
        marginTop: 0,
        resizeMode: 'contain'
    },
    searchStyles: {
        width: 25,
        height: 50,
        marginLeft: 0,
        marginBottom: 0,
        marginTop: 0,
        resizeMode: 'contain'
    },
    messageStyles: {
        width: 35,
        height: 50,
        marginLeft: 10,
        marginBottom: 0,
        marginTop: 0,
        resizeMode: 'contain'
    },
    post: {
        height: 120,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#20232a",
    },
    icon: {
        width:50,
        height:50,
        margin: 5,
    },
    image4Row: {
        height: 19,
        flexDirection: "row",
        marginTop: 80,
        marginLeft: 28,
        marginRight: 13
      },
      image4: {
          width: 20,
          height: 20
        },
        image2: {
          width: 20,
          height: 20,
          marginLeft: 259
        },
        image: {
          width: 20,
          height: 20,
          marginLeft: 6
        },
        title: {
            fontSize: 28,
            marginLeft: 18,
        },
        user: {
            fontSize: 20,
            marginLeft: 18,
        },
        detail: {
            fontSize: 15,
            marginTop: 15,
            marginLeft: 18,
            marginRight: 18,
        },
});



export default class GeneralPost extends Component {
    render(){
        const {item}=this.props.route.params;

        return (
            <View style={{flex: 1,flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
                {//Header
                }

                <View style={{flexDirection: "row",backgroundColor: '#F0000', borderWidth: 1}}>
                    <Image
                        style={styles.logoStyles}
                        source={require('ttext/src/assets/logo_title.png')}
                    />
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image
                            style={styles.searchStyles}
                            source={require('ttext/src/assets/back.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert('Message')}>
                        <Image
                            style={styles.messageStyles}
                            source={require('ttext/src/assets/message_icon.png')}
                        />
                    </TouchableOpacity>
                 </View>
                 <View style={styles.rect}>
                     <Text style={styles.title}>{item.title}</Text>
                     <Text style={styles.user}>@{item.user}</Text>
                     <Text style={styles.detail}>{item.detail}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                     <View style={styles.image4Row}>
                       <Image
                         source={require("ttext/src/assets/message_icon.png")}
                         resizeMode="contain"
                         style={styles.image4}
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
                <ScrollView>
                    <View style={{padding:10, flexDirection: 'column', backgroundColor: '#FFFFFF'}}>

                        <View style={{marginTop: 20, flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
                        {/*This is comment section, and this should be List*/}
                            <View style={styles.post}>
                                <Image
                                    style={styles.icon}
                                    source={item.image}
                                />
                                <View style={{ flexShrink: 1 }}>
                                    <Text style={{fontSize:15}}>{item.title}</Text>
                                    <Text style={{fontSize:10}}>{item.detail}</Text>
                                </View>
                            </View>
                            <View style={styles.post}>
                                <Image
                                    style={styles.icon}
                                    source={item.image}
                                />
                                <View style={{ flexShrink: 1 }}>
                                    <Text style={{fontSize:15}}>{item.title}</Text>
                                    <Text style={{fontSize:10}}>{item.detail}</Text>
                                </View>
                            </View>
                            <View style={styles.post}>
                                <Image
                                    style={styles.icon}
                                    source={item.image}
                                />
                                <View style={{ flexShrink: 1 }}>
                                    <Text style={{fontSize:15}}>{item.title}</Text>
                                    <Text style={{fontSize:10}}>{item.detail}</Text>
                                </View>
                            </View>
                            <View style={styles.post}>
                                <Image
                                    style={styles.icon}
                                    source={item.image}
                                />
                                <View style={{ flexShrink: 1 }}>
                                    <Text style={{fontSize:15}}>{item.title}</Text>
                                    <Text style={{fontSize:10}}>{item.detail}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
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