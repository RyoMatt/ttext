import React, { Component } from 'react';
import { Alert, Image, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import Post from 'ttext/src/Post.js';
import SchoolServicePost from './SchoolServicePost.js';
import StudentServicePost from './StudentServicePost.js';
import Header from 'ttext/src/Header.js';
import { createStackNavigator } from '@react-navigation/stack';

const SCHOOL_DATA = Array(10);
const STUDENT_DATA = Array(10);

export default class ServiceFlatList extends Component {
    render() {
        {/*Render function for list of school posts*/}
        const renderSchool = ({ item, onPress }) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SchoolServicePost',{item},)}>
                <View style={styles.schoolPost}>

                    {/*Post title + options button*/}
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.title}>{item.title}</Text>

                        <TouchableOpacity
                            style={{position:'absolute',right:15}}
                            onPress={() => Alert.alert('Show options (ex. report, save, etc.)')}>
                            <Image
                                style={{resizeMode: 'contain', width:20, marginTop:10}}
                                source={require('./assets/more_button.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.location}>{item.location}</Text>

                    {/*Post categories*/}
                    <Text style={{fontSize: 13, marginTop:5, marginLeft: 5}}>Categories:</Text>
                    <View style={styles.categoriesContainer}>
                        {
                            item.tag.map((item, key)=>(<Text key={key} style={styles.categories}> { item } </Text>))
                        }
                    </View>

                </View>
            </TouchableOpacity>
        );

        {/*Render function for list of student posts*/}
        const renderStudent = ({ item, onPress }) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('StudentServicePost',{item},)}>
                <View style={styles.studentPost}>

                    {/*OP's profile pic + post title + OP's username + options button*/}
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={() => Alert.alert('Profile Page')}>
                            <Image
                                style={{marginTop: 5, marginLeft: 10, height: 50, width: 50}}
                                source={item.image}
                            />
                        </TouchableOpacity>

                        <View style={{marginLeft: 10, flexDirection: 'column', alignSelf:'center'}}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.location}>@username</Text>
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


                    <Text numberOfLines={1} style={{padding:10}}>{item.detail}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>

                    {/*Post categories + up/down ratings*/}
                    <Text style={{fontSize: 13, marginLeft: 5}}>Categories:</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.categoriesContainer}>
                            {
                                item.tag.map((item, key)=>(<Text key={key} style={styles.categories}> { item } </Text>))
                            }
                        </View>
                        <View style={{backgroundColor:'white', padding:5, alignItems:'center', alignSelf:'center', position:'absolute', right:10, flexDirection:'row'}}>
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
                </View>
            </TouchableOpacity>
        );

    // Sample items
        for(let i=0;i<10;i++){
                let p=new Post();
                p.id=i;
                p.title="school_service"+i;
                SCHOOL_DATA[i]=p
        }

        for(let i=10;i<20;i++){
                let p=new Post();
                p.id=i;
                p.title="student_service"+i;
                STUDENT_DATA[i-10]=p
        }

        // Check which list to render
        if (this.props.toggleSchool) {
            const DATA = SCHOOL_DATA;
            const renderItem = renderSchool;
        } else {
            const DATA = STUDENT_DATA;
            const renderItem = renderStudent;
        }

        return (
            <FlatList
                data={this.props.toggleSchool ? SCHOOL_DATA: STUDENT_DATA}
                renderItem={this.props.toggleSchool ? renderSchool: renderStudent}
                keyExtractor={(item) => item.id}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1,
        backgroundColor: 'white'
        //marginTop: StatusBar.currentHeight || 0,
    },
    schoolPost: {
        backgroundColor: 'white',
        height: 100,
        flexDirection: "column",
        borderBottomWidth: 1,
        borderColor: "#20232a",
    },
    studentPost: {
        backgroundColor: 'white',
        height: 150,
        flexDirection: "column",
        borderBottomWidth: 1,
        borderColor: "#20232a",
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 5,
    },
    location: {
        fontSize: 12,
        color: 'gray',
        marginLeft: 5,
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex: 1,
    },
    categories: {
        height: 25,
        backgroundColor: '#F87D0B',
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 3,
        marginLeft: 5,
    }
});