import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';

export default function FilterSort() {
    const [filterModalOpen, setFilterModalOpen] = useState(false);
    const [sortModalOpen, setSortModalOpen] = useState(false);

    return (
        <View style={styles.container}>
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

            <Modal
            visible={sortModalOpen}
            animationType={'slide'}
            transparent={true}>
                <View style={styles.modalContent}>
                    <TouchableOpacity
                    onPress={() => setSortModalOpen(false)}
                    style={styles.modalDone}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            <View style={styles.filterSortContainer}>
                <TouchableOpacity
                onPress={() => setFilterModalOpen(true)}
                style={styles.filterSortButtons}>
                    <Text style={{textAlign:'center'}}>Filter</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => setSortModalOpen(true)}
                style={styles.filterSortButtons}>
                    <Text style={{textAlign:'center'}}>Sort</Text>
                </TouchableOpacity>
            </View>
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
    modalCancelReset: {

    },
    modalList: {

    },
    modalDone: {

    },
    filterSortContainer: {
        height: 25,
        marginTop: 0,
        marginBottom: 0,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    filterSortButtons: {
        width:'50%',
        justifyContent:'center',
        borderColor:'black',
        borderWidth: 1,
    }
});