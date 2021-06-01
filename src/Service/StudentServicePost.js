import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, StatusBar, Button, Alert, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Post from 'ttext/src/Post.js';
import Header from 'ttext/src/Header';

export default class ServicePost extends Component {
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

                <ScrollView>
                    <View style={{flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
                        {/*Post image*/}
                        <Image
                            style={{width: '100%', height: 300}}
                            source={item.image}
                        />

                        {/*OP's profile pic + post title + OP's username + OP's rating + options button*/}
                        <View style={{marginVertical: 5, flexDirection: 'row', backgroundColor: '#FFFFFF'}}>
                            <TouchableOpacity onPress={() => Alert.alert('Profile Page')}>
                                <Image
                                    style={{marginTop: 5, marginLeft: 10, height: 50, width: 50}}
                                    source={item.image}
                                />
                            </TouchableOpacity>

                            <View style={{marginLeft: 10, flexDirection: 'column', alignSelf:'center'}}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.subtitle}>@username</Text>
                                <Image
                                    style={{resizeMode: 'contain', width:75}}
                                    source={require('./assets/stars.png')}
                                />
                            </View>

                            <TouchableOpacity
                                style={{position:'absolute',right:15}}
                                onPress={() => Alert.alert('Show options (ex. report, save, etc.)')}>
                                <Image
                                    style={{resizeMode: 'contain', width:20, marginTop:10}}
                                    source={require('./assets/more_button.png')}
                                />
                            </TouchableOpacity>
                        </View>

                        {/*Post body*/}
                        <View style={{padding: 10, flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
                            <Text style={styles.header}>Rates:</Text>
                            <Text style={styles.body}>Tier 1: $15/hr</Text>
                            <Text style={styles.body}>Tier 2: $18/hr</Text>
                            <Text style={styles.header}>Description:</Text>
                            <Text style={styles.body}>{item.detail}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                            <Text style={styles.header}>Contact:</Text>
                            <Text style={styles.body}>{item.detail}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                        </View>

                        {/*Post categories/tags + post ratings*/}
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.categoriesContainer}>
                                {
                                    item.tag.map((item, key)=>(<Text key={key} style={styles.categories}> { item } </Text>))
                                }
                            </View>

                            <View style={{padding:5, alignItems:'center', alignSelf:'center', position:'absolute', right:10, flexDirection:'row'}}>
                                <TouchableOpacity>
                                    <Image
                                        style={{resizeMode: 'contain', width:20}}
                                        source={require('./assets/up_arrow.png')}
                                    />
                                </TouchableOpacity>
                                <Text>40</Text>
                                <TouchableOpacity>
                                    <Image
                                        style={{resizeMode: 'contain', width:20}}
                                        source={require('./assets/down_arrow.png')}
                                    />
                                </TouchableOpacity>
                                <Text>9</Text>
                            </View>
                        </View>

                        {/*Review divider*/}
                        <View style={{justifyContent:'center', width:'100%', height:50, borderColor:'black', borderTopWidth:1, borderBottomWidth:1, backgroundColor:'white'}}>
                            <Text style={{textAlign:'center', fontSize:20}}>Reviews</Text>
                        </View>

                        {/*Contains all reviews*/}
                        <View style={styles.reviewsContainer}>
                            {/*Sample review*/}
                            <View style={styles.review}>
                                <View style={{marginBottom:5, flexDirection: 'row', backgroundColor: '#FFFFFF'}}>
                                    <TouchableOpacity onPress={() => Alert.alert('Profile Page')}>
                                        <Image
                                            style={{marginTop: 5, height: 50, width: 50}}
                                            source={item.image}
                                        />
                                    </TouchableOpacity>

                                    <View style={{marginLeft: 10, flexDirection: 'column', alignSelf:'center'}}>
                                        <Text style={styles.header}>Review Title</Text>
                                        <Text style={styles.subtitle}>@username</Text>
                                    </View>

                                    <TouchableOpacity
                                        style={{position:'absolute', right:0}}
                                        onPress={() => Alert.alert('Show options (ex. report, save, etc.)')}>
                                        <Image
                                            style={{resizeMode: 'contain', width:20, marginTop:10}}
                                            source={require('./assets/more_button.png')}
                                        />
                                    </TouchableOpacity>

                                    <Image
                                        style={{resizeMode: 'contain', width:75, position:'absolute', right:40}}
                                        source={require('./assets/stars.png')}
                                    />
                                </View>

                                <Text style={styles.body}>Review Text lalalalalala</Text>

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  header: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
  },
  categoriesContainer: {
    marginLeft: 5,
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF'
  },
  categories: {
    height: 25,
    backgroundColor: '#FB9902',
    borderRadius: 8,
    justifyContent: 'center',
    marginHorizontal: 5,
    marginBottom: 10,
    fontSize: 16,
  },
  reviewsContainer: {
    flexDirection: 'column'
  },
  review: {
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10,
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
});