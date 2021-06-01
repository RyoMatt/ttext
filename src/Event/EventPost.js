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
});



export default class EventPost extends Component {
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
                    <View style={{padding:10, flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
                        <Text style={{fontSize:40}}>{item.title}</Text>
                        <Text style={{fontSize:20}}>Location: {item.location}</Text>
                        <Text style={{fontSize:20}}>{item.time}</Text>

                        <Image
                            style={{width: '100%', height: 300}}
                            source={item.image}
                        />

                        <View style={{marginVertical: 5, flexDirection: 'row', backgroundColor: '#FFFFFF'}}>
                            <View style={{flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
                                <Text style={{fontSize:25}}>Hosted By</Text>
                                <Text style={{fontSize:20}}>{item.user}</Text>
                            </View>
                            <TouchableOpacity onPress={() => Alert.alert('Profile Page')}>
                                <Image
                                    style={{marginTop: 5, marginLeft: 10, height: 50, width: 50}}
                                    source={item.image}
                                />
                            </TouchableOpacity>
                            <View style={{alignItems: 'center', marginLeft: 20, flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
                                <Text style={{fontSize:15}}>{item.registered} people registered</Text>
                                <Button
                                    title="Register"
                                    color="#F87D0B"
                                    onPress={() => Alert.alert('Registered')}
                                />
                            </View>
                        </View>

                        <View style={{flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
                            <Text style={{fontSize:35}}>Detail</Text>
                            <Text style={{fontSize:20}}>{item.detail}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                        </View>

                        <View style={{marginTop: 20, flexDirection: 'row', backgroundColor: '#FFFFFF'}}>
                            {
                                item.tag.map((item, key)=>(<Text key={key} style={{marginHorizontal:5, fontSize:15, backgroundColor: '#FB9902', borderRadius: 8,}}> { item } </Text>))
                            }
                        </View>

                        <View style={{marginTop: 20, flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
                        {/*This is comment section, and this should be List*/}
                            <View style={styles.post}>
                                <Image
                                    style={styles.icon}
                                    source={item.image}
                                />
                                <View style={{ flexShrink: 1 }}>
                                    <Text style={{fontSize:15}}>{item.title}</Text>
                                    <Text style={{fontSize:10}}>{item.detail}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
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