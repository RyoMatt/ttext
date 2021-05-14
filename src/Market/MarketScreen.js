import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Post from 'ttext/src/Post.js';

const DATA = Array(20);

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const MarketScreen = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
//sample items
    for(let i=0;i<20;i++){
            let p=new Post();
            p.id=i;
            p.title="market"+i;
            DATA[i]=p
        }

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={renderItem}
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
        width: 200,
        height: 100,
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 2,
        marginHorizontal: 2,
    },
    title: {
        fontSize: 15,
    },
});

export default MarketScreen;