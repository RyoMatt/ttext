import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import Post from 'ttext/src/Post.js';
import ServicePost from './ServicePost';
import Header from 'ttext/src/Header.js';
import HeaderButtons from './ServiceHeaderButtons.js';
import FilterSort from './FilterSortModal.js';
import { createStackNavigator } from '@react-navigation/stack';

const DATA = Array(10);
const searchKey=Header.textInputValue;

/*
const Item = ({ title, location }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={{color: 'orange', fontSize: 13, marginTop: 5}}>categories:</Text>
        <View style={styles.categoriesContainer}>
            <TouchableOpacity style={styles.categories}>
                <Text style={{fontSize: 12, textAlign: 'center'}}>Category</Text>
            </TouchableOpacity>
        </View>
    </View>
);
*/

const ServiceScreen = () => {
    /*
    const renderItem = ({ item }) => (
        <Item title={item.title} location={item.location}/>
    );
   */

    const renderItem = ({ item, onPress }) => (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ServicePost',{item},)}>
            <View style={styles.post}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={{color: 'orange', fontSize: 13, marginTop: 5, marginLeft: 5}}>categories:</Text>
                <View style={styles.categoriesContainer}>
                    <TouchableOpacity style={styles.categories}>
                        <Text style={{fontSize: 12, textAlign: 'center'}}>Category</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );

//sample items
    for(let i=0;i<10;i++){
            let p=new Post();
            p.id=i;
            p.title="service"+i;
            p.location="600 California St";
            DATA[i]=p
    }

    return (
        <View style={styles.container}>
            <Header/>

            <HeaderButtons/>

            <FilterSort/>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
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
    }
});

export default ServiceScreen;