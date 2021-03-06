import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';

/*
EventPost shows individual event post chosen by users on EventScreen.
*/

export default class EventPost extends Component {
    render(){
        //Every information is passed as Post object from EventScreen now, but the "item" here could be just post id, and call backend to receive the information with the post id.
        const {item}=this.props.route.params;

        return (
            <View style={{flex: 1,flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
                {
                /* Custom header with back button. This should eventually be replaced with the regular header component with back button,*/
                }
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

                {/* main post view*/}
                <ScrollView>
                    <View style={{padding:10, flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
                        {/*Title, Location, and Time*/}
                        <Text style={{fontSize:40}}>{item.title}</Text>
                        <Text style={{fontSize:20}}>Location: {item.location}</Text>
                        <Text style={{fontSize:20}}>{item.time}</Text>

                        {/*main event image, this can be a list of images which can be swiped to switch images later.*/}
                        <Image
                            style={{width: '100%', height: 300}}
                            source={item.image}
                        />

                        {/*Host user and profile image, resister number and button*/}
                        <View style={{marginVertical: 5, flexDirection: 'row', backgroundColor: '#FFFFFF'}}>
                            <View style={{flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
                                <Text style={{fontSize:25}}>Hosted By</Text>
                                <Text style={{fontSize:20}}>{item.user}</Text>
                            </View>
                            {/*Need profile page screen for users to see the host user profile, replace alert with navigation to profile page*/}
                            <TouchableOpacity onPress={() => Alert.alert('Profile Page')}>
                                <Image
                                    style={{marginTop: 5, marginLeft: 10, height: 50, width: 50}}
                                    source={item.image}
                                />
                            </TouchableOpacity>
                            <View style={{alignItems: 'center', marginLeft: 20, flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
                                {/*
                                Alert function must be replaced with server function which toggles registered or not.
                                The number of registered people can be increased internally in this screen or updated from server.
                                Button title must be changed if users registered the event.
                                */}
                                <Text style={{fontSize:15}}>{item.registered} people registered</Text>
                                <Button
                                    title="Register"
                                    color="#F87D0B"
                                    onPress={() => Alert.alert('Registered')}
                                />
                            </View>
                        </View>

                        {/*Detail*/}
                        <View style={{flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
                            <Text style={{fontSize:35}}>Detail</Text>
                            <Text style={{fontSize:20}}>{item.detail}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                        </View>

                        {/*Tag list*/}
                        <View style={{marginTop: 20, flexDirection: 'row', backgroundColor: '#FFFFFF'}}>
                            {
                                item.tag.map((item, key)=>(<Text key={key} style={{marginHorizontal:5, fontSize:15, backgroundColor: '#FB9902', borderRadius: 8,}}> { item } </Text>))
                            }
                        </View>

                        {/*This is comment section, and this should be List*/}
                        <View style={{marginTop: 20, flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
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

                {/*Create Post Button: make this navigate to create-a-post page*/}
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
    },
    text: {
      fontSize: 42,
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