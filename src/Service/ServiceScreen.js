import React, { Component } from 'react';
import { Image, Alert, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import Post from 'ttext/src/Post.js';
import Header from 'ttext/src/Header.js';
import HeaderButtons from './ServiceHeaderButtons.js';
import Categories from './ServiceCategories.js';
import { createStackNavigator } from '@react-navigation/stack';
import ServiceFlatList from './ServiceFlatList.js';

const searchKey=Header.textInputValue;

export default class ServiceScreen extends Component {
   state={
       toggleSchool: true,
       toggleStudent: false
   }

    // Handles change to School-Provided Services page
   handleSchoolChange = () => {
        if(!this.state.toggleSchool){
            const newSchoolState = !this.state.toggleSchool;
            const newStudentState = !this.state.toggleStudent;

            this.setState({toggleSchool:newSchoolState, toggleStudent:newStudentState});
        }
   }

    // Handles change to Student-Provided Services page
   handleStudentChange = () => {
        if(!this.state.toggleStudent){
            const newSchoolState = !this.state.toggleSchool;
            const newStudentState = !this.state.toggleStudent;

            this.setState({toggleSchool:newSchoolState, toggleStudent:newStudentState});
        }
   }

    render() {
        return (
            <View style={styles.container}>
                <Header/>

                <HeaderButtons
                    toggleSchool={this.state.toggleSchool}
                    toggleStudent={this.state.toggleStudent}
                    changeSchoolPage={this.handleSchoolChange.bind(this)}
                    changeStudentPage={this.handleStudentChange.bind(this)}
                />

                <Categories/>

                <ServiceFlatList
                    toggleSchool={this.state.toggleSchool}
                    navigation={this.props.navigation}
                />

                {/*Create Post Button: make this navigate to create-a-post page*/}
                <TouchableOpacity
                    style={{backgroundColor:'#00000000', borderRadius:30, position: 'absolute', right: 20, bottom: 0}}
                    onPress={() => Alert.alert('Show Add Service page')}>
                    {this.state.toggleStudent ? (
                        <Image
                            style={{resizeMode:'contain', width:60,}}
                            source={require('./assets/add_post.png')}
                        />
                    ) : null}
                </TouchableOpacity>
            </View>
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
    post: {
        backgroundColor: 'white',
        height: 100,
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "#20232a",
    },
    title: {
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
        width: 75,
        height: 25,
        backgroundColor: 'gray',
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 3,
        marginLeft: 5,
    },
    addPost: {

    }
});