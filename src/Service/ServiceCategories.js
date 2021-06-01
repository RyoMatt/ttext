import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Categories() {
    // for use with modal
    //const [filterModalOpen, setFilterModalOpen] = useState(false);
    //const [sortModalOpen, setSortModalOpen] = useState(false);

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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        marginBottom: 0,
        backgroundColor: 'black',
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