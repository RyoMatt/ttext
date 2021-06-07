import React, { Component } from 'react';
import { Image, SafeAreaView, View, FlatList, StyleSheet, Text,TouchableOpacity, Alert } from 'react-native';
import Post from 'ttext/src/Post.js';
import MarketPost from "./MarketPost.js";
import CreatePost from "./CreatePost"
import { createStackNavigator } from '@react-navigation/stack';
import DropdownMenu from "./DropdownMenu"
import Header from 'ttext/src/Header';

const DATA = Array(10);
const searchKey=Header.textInputValue;

//A concern I have in regards to the viewing of the post is the alignment of the text and potentially moving the other componets within a post. 

//What needs to be implemented:
//  1. Filtering by selecting the category
//  2. Switching between the two tabs. --> There is code in EventScreen.js that successfully implements this.



export default class MarketScreen extends Component {
    render(){
        const renderItem = ({ item, onPress }) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('MarketPost',{item},)}>
                <View style={styles.post}>
                    <View style={styles.postContents}>
                        <View style={styles.topButtonOfPost}>
                            <TouchableOpacity style={styles.userPFPButton}>
                                <Image
                                source={require("ttext/src/assets/catpfp.jpg")}
                                resizeMode="contain"
                                style={styles.userPFPImage}
                                ></Image>
                            </TouchableOpacity>
                            <View style={{flexDirection: "column", marginTop: 5, marginLeft: 6}}>
                              {/* The text should be from the database and not hard-coded */}
                            <Text style={styles.title}>Anyone wants a lamp?</Text>
                            <Text style={styles.postInfo}>AVAILABLE | $20</Text>
                            </View>
                            <TouchableOpacity style={styles.moreButton}>
                                <Image
                                source={require("ttext/src/assets/more_button.png")}
                                resizeMode="contain"
                                style={styles.moreButtonImage}
                                ></Image>
                            </TouchableOpacity>
                        </View>
                        {/* The text should be from the database and not hard-coded */}
                        <Text style={styles.detail}>Brand new.</Text>
                        <View style={styles.interactiveButtons}>
                            <TouchableOpacity style={styles.dmButton}>
                                <Image
                                source={require("ttext/src/assets/message_icon.png")}
                                resizeMode="contain"
                                style={styles.dmButtonImage}
                                ></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.commentButton}>
                                <Image
                                source={require("ttext/src/assets/messages_symbol.png")}
                                resizeMode="contain"
                                style={styles.commentButtonImage}
                                ></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.favoriteButton}>
                                <Image
                                source={require("ttext/src/assets/favorite_button.png")}
                                resizeMode="contain"
                                style={styles.favoriteButtonImage}
                                ></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Image
                    source={require("ttext/src/assets/catpfp.jpg")}
                    resizeMode="contain"
                    style={styles.postImage}
                    ></Image>
                </View>
            </TouchableOpacity>
        );

        //sample items & ask data here
        // Esstentailly this creates an array of posts formated in the way specified above.
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

            <View style={{flex: 1, alignContent: "center"}}>
              <DropdownMenu/>
            </View>
            {/* This section below the two tab category needed in the Marketplace, which are Selling and Requsted */}
            <View style={{flexDirection: "row"}}>
              <View style={{height: 30, width: 225, borderColor: "black", borderWidth: 2, backgroundColor: "#F87D0B"}}>
                <TouchableOpacity>
                  <Text style={{fontSize: 17, left: 60}}>Selling</Text>
                </TouchableOpacity>
              </View>
              <View style={{height: 30, width: 225, borderColor: "black", borderWidth: 2}}>
                <TouchableOpacity>
                  <Text style={{fontSize: 17, left: 60}}>Requested</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flex: 10}}>
              <FlatList   //extraData to re-render DATA
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
            <View style={{position: 'absolute', bottom:20, right:30,zIndex: 10,width: 50, height: 50,}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CreatePost')}>
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
    userPFPButton: {
        width: 44,
        height: 44,
        marginTop: 5
    },
    userPFPImage: {
        width: 44,
        height: 44,
        borderRadius: 100
    },
    postContents: {
        top: 0,
        width: 420,
        height: 140,
        position: "absolute",
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 2,
        borderColor: "#000000",
        left: 0
      },
      title: {
        fontFamily: "roboto-700",
        color: "#121212",
        fontSize: 15,
      },
      moreButton: {
        width: 23,
        height: 23,
        marginLeft: 167
      },
      moreButtonImage: {
        width: 23,
        height: 23
      },
      topButtonOfPost: {
        height: 49,
        flexDirection: "row",
        marginLeft: 8,
        marginRight: 3
      },
      postInfo: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 12
      },
      detail: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 15,
        marginLeft: 116
      },
      dmButton: {
        width: 19,
        height: 19,
        marginTop: 1
      },
      dmButtonImage: {
        width: 19,
        height: 19
      },
      commentButton: {
        width: 20,
        height: 20,
        marginLeft: 4,
        marginTop: 1
      },
      commentButtonImage: {
        width: 20,
        height: 20
      },
      favoriteButton: {
        width: 20,
        height: 20,
        marginLeft: 5
      },
      favoriteButtonImage: {
        width: 20,
        height: 20
      },
      interactiveButtons: {
        height: 21,
        flexDirection: "row",
        marginTop: 28,
        marginLeft: 338,
        marginRight: 5
      },
      postImage: {
        top: 41,
        left: 10,
        width: 100,
        height: 100,
        position: "absolute"
      },
      post: {
        width: 360,
        height: 139
      }
});