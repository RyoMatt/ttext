import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Event Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Event Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Event Item',
  },
  {
    id: 'bd7acbea-c1b1-46a2-aed5-3ad53abb28ba',
    title: 'First Event Item',
  },
  {
    id: '3ac68afc-c605-48h3-a4f8-fbd91aa97f63',
    title: 'Second Event Item',
  },
  {
    id: '58694a0f-3da1-47jf-bd96-145571e29d72',
    title: 'Third Event Item',
  },
  {
    id: 'bd7acbea-c1b1-f6c2-aed5-3ad53abb28ba',
    title: 'First Event Item',
  },
  {
    id: '3ac68afc-c6a5-48d3-a4f8-fbd91aa97f63',
    title: 'Second Event Item',
  },
  {
    id: '58694a0f-3dh1-471f-bd96-145571e29d72',
    title: 'Third Event Item',
  },
  {
    id: 'bd7acbea-a1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Event Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4a8-fbd91aa97f63',
    title: 'Second Event Item',
  },
  {
    id: '58694a0f-3da1-471f-bd36-145571e29d72',
    title: 'Third Event Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const EventScreen = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

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

export default EventScreen;