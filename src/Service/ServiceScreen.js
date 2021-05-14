import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Post from 'ttext/src/Post.js';

const DATA = Array(10);

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const ServiceScreen = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
//sample items
    for(let i=0;i<10;i++){
            let p=new Post();
            p.id=i;
            p.title="service"+i;
            DATA[i]=p
        }

    return (
        <View style={styles.container}>
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
        flex: 1,
        //marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default ServiceScreen;