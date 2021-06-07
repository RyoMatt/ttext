import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { Picker } from "@react-native-picker/picker";

//Note: Picker is no longer going to be supported in newer versions of React Native.
//      Will have to use another package. (Possibly dropdown-menu)

export default function DropdownMenu() {
    const [selectedValue, setSelectedValue] = useState("Category");

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50  }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                mode="dropdown"
                itemStyle={{textAlign: "center"}}
                >
                <Picker.Item label="Category" value="Category" />
                <Picker.Item label="Furniture" value="Funiture" />
                <Picker.Item label="Textbook" value="Textbook" />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
