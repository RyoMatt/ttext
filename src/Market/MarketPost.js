import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, StatusBar, Button, Alert, TouchableOpacity, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Post from 'ttext/src/Post.js';
import Header from 'ttext/src/Header';

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 386
  },
  view: {
    height: 386,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(0,0,0,1)",
    flexDirection: "column"
  },
  detail: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    left: 10
  },
  title: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15,
    marginTop: 5,
    marginLeft: 58
  },
  postImage: {
    top: 28,
    left: 10,
    width: 305,
    height: 305,
    position: "absolute"
  },
  postInfo: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 13,
    marginTop: 2,
    marginLeft: 58
  },
  commentButton: {
    left: 35,
    width: 26,
    height: 26,
    marginTop: 1,
    position: "absolute"
  },
  commentButtonImage: {
    width: 26,
    height: 26
  },
  favoriteButton: {
    width: 26,
    height: 26,
    marginBottom: 5,
    marginRight: 4

  },
  favoriteButtonImage: {
    width: 26,
    height: 26
  },
  userPFPButton: {
    top: 0,
    left: 0,
    width: 59,
    height: 59,
    position: "absolute"
  },
  userPFPImage: {
    width: 59,
    height: 59,
    borderRadius: 100
  },
  moreButton: {
    top: 0,
    left: 370,
    width: 23,
    height: 23,
    position: "absolute"
  },
  moreButtonImage: {
    width: 23,
    height: 23
  },
  dmButton: {
    left: 37,
    width: 21,
    height: 21
  },
  dmButtonImage: {
    width: 26,
    height: 26
  },
  detailRow: {
    height: 370,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginLeft: 4,
    marginTop: 230
  },
  logoRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 5,
},
logoIcon: {
    width: 55,
    height: 35,
},
logoText: {
    width: 160,
    height: 25,
    marginLeft: 15,
    alignSelf: "center",
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
});
//Viewing a single post from the Marketplace tab.

// A concern I have in regards to the viewing of the post is the alignment of the text. For example, if the title is longer that what it is right now
// the more button (the 3 dots at the top right of the post) is moved. There are alot of things that are hard-coded for demonstration purposes. 
//
//To be implemented :
//  1. Navigation to profile page
//  2. Functionality for all the buttons (more, DM, comment, favorite buttons)
//  3. The comment section.



export default class MarketPost extends Component {
    render(){
        const {item}=this.props.route.params;

        return (
          //This is a different header compared to the file 'Header.js'. This header implements a back Button.
            <View style={{flex: 1,flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
                <View style={{ flexDirection: "row", backgroundColor: '#FFFFFF', borderBottomWidth: 1 }}>
                    <View style={styles.logoRow}>
                        <Image
                            style={styles.logoIcon}
                            source={require('../assets/logo_icon.png')}
                        />
                        <Image
                            style={styles.logoText}
                            source={require("../assets/logo_text.png")}
                        />
                    </View>
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
                {/* Below is how the post contents are organized.*/}
                <View style={styles.view}> 
                  <View style={{flex: 1, flexDirection: 'row', marginLeft: 5}}>
                    <TouchableOpacity style={styles.userPFPButton}>
                      <Image
                      source={require("ttext/src/assets/catpfp.jpg")}
                      resizeMode="contain"
                      style={styles.userPFPImage}
                      ></Image>
                    </TouchableOpacity>
                    <View style={{flex: 2, flexDirection: 'column', marginLeft: 10}}>
                      {/* The text should be from the database and not hard-coded */}
                      <Text style={styles.title}>Anyone Want a lamp? Im moving out.</Text> 
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
                  <Image
                      source={require("ttext/src/assets/catpfp.jpg")}
                      resizeMode="contain"
                      style={styles.postImage}
                    ></Image>
                  <View style={styles.detailRow}>
                    {/* The text should be from the database and not hard-coded */}
                    <Text style={styles.detail}>Brand new.</Text>
                  </View>
                  <View style={{flexDirection: "row-reverse"}}>
                    <TouchableOpacity style={styles.favoriteButton}>
                      <Image
                        source={require("ttext/src/assets/favorite_button.png")}
                        resizeMode="contain"
                        style={styles.favoriteButtonImage}
                      ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.commentButton}>
                      <Image
                        source={require("ttext/src/assets/messages_symbol.png")}
                        resizeMode="contain"
                        style={styles.commentButtonImage}
                      ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dmButton}>
                      <Image
                        source={require("ttext/src/assets/message_icon.png")}
                        resizeMode="contain"
                        style={styles.dmButtonImage}
                      ></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
        );
    }
}