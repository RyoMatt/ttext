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
                        {/*Post picture*/}
                        <Image
                            style={{width: '100%', height: 300}}
                            source={item.image}
                        />

                        {/*Post title + location*/}
                        <View style={{marginVertical: 5, flexDirection: 'row', backgroundColor: '#FFFFFF'}}>
                            <View style={{marginLeft: 10, flexDirection: 'column'}}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.subtitle}>{item.location}</Text>
                            </View>
                            {/*Extra options (three circles) button*/}
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
                            <Text style={styles.header}>Description:</Text>
                            <Text style={styles.body}>{item.detail}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                            <Text style={styles.header}>Upcoming Events:</Text>
                            <Text style={styles.body}>{item.detail}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                            <Text style={styles.header}>Contact:</Text>
                            <Text style={styles.body}>{item.detail}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                        </View>

                        {/*Post categories/tags*/}
                        <View style={styles.categoriesContainer}>
                            {
                                item.tag.map((item, key)=>(<Text key={key} style={styles.categories}> { item } </Text>))
                            }
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
    marginTop: 3,
    marginHorizontal: 5,
    fontSize: 16,
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