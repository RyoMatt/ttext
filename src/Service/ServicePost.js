import React, { Component } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, StatusBar, Button, Alert, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Post from 'ttext/src/Post.js';
import Header from 'ttext/src/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 42,
  },
});



export default class ServicePost extends Component {
    render(){
        const {item}=this.props.route.params;

        return (
            <View style={{flex: 1,flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
                <Header/>
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
                            <Text style={{fontSize:20}}>{item.detail}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                        </View>
                        <View style={{marginTop: 20, flexDirection: 'row', backgroundColor: '#FFFFFF'}}>
                            {
                                item.tag.map((item, key)=>(<Text key={key} style={{marginHorizontal:5, fontSize:15, backgroundColor: '#FB9902', borderRadius: 8,}}> { item } </Text>))
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}