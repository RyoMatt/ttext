import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Picker } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Categories() {
    // for use with modal
    //const [filterModalOpen, setFilterModalOpen] = useState(false);
    //const [sortModalOpen, setSortModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    return (
        <View style={styles.container}>

            {/*In case dropdown doesn't work*/}
            {/*
            <Modal
            visible={filterModalOpen}
            animationType={'slide'}
            transparent={true}>
                <View style={styles.modalContent}>
                    <TouchableOpacity
                    onPress={() => setFilterModalOpen(false)}
                    style={styles.modalDone}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <View style={styles.filterSortContainer}>
                <TouchableOpacity
                onPress={() => setFilterModalOpen(true)}
                style={styles.filterSortButtons}>
                    <Text style={{textAlign:'center'}}>Categories</Text>
                </TouchableOpacity>
            </View>
            */}

            {/*https://reactnativeexample.com/a-picker-dropdown-component-for-react-native/*/}
            {/*
            <DropDownPicker
                items={[
                    {label: 'Item 1', value: 'item1'},
                    {label: 'Item 2', value: 'item2'},
                ]}
                defaultNull
                placeholder="Categories"
                containerStyle={{height: 40}}
                itemStyle={{alignItems: 'center'}}
                activeLabelStyle={{alignItems: 'center'}}
                dropDownStyle={{backgroundColor: 'white'}}
                onChangeItem={item => console.log(item.label, item.value)}
            />
            */}

            <Picker
                placeholder="Categories"
                selectedValue={selectedValue}
                style={{borderWidth: 1, height: 40, borderColor:'black', width:'100%' }}
                itemStyle={{textAlign:'center'}}
                mode="dropdown"
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="View All Categories" value="View All Categories" />
                <Picker.Item label="Category 1" value="Category 1" />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        marginBottom: 0,
        backgroundColor: 'white',
    },
    modalContent: {
        flexDirection: 'column',
        height: '50%',
        marginTop: 'auto',
        marginBottom: 0,
        backgroundColor: 'white'
    },
    filterSortContainer: {
        height: 40,
        marginTop: 0,
        marginBottom: 0,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    filterSortButtons: {
        width:'100%',
        justifyContent:'center',
        borderColor:'black',
        borderBottomWidth: 2,
    }
});