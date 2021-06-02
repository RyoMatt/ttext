import React,{useState} from 'react';
import { Text, View, Image, StyleSheet,TouchableOpacity, Alert, TextInput} from 'react-native';

const styles = StyleSheet.create({
    logoRow: {
        height: 40,
        flexDirection: "row",
        flex: 1,
        marginRight: 15,
        marginLeft: 15,
        marginTop: 5,
    },
    logoIcon: {
        width: 55,
        height: 35,
    },
    logoText: {
        width: 160,
        height: 25,
        marginLeft: 15,
        alignSelf: "center",
    },
    searchStyles: {
        width: 25,
        height: 50,
        marginLeft: 0,
        marginBottom: 0,
        marginTop: 0,
        resizeMode: 'contain'
    },
    messageStyles: {
        width: 35,
        height: 50,
        marginLeft: 10,
        marginBottom: 0,
        marginTop: 0,
        resizeMode: 'contain'
    },
    inputStyles: {
        width: 300,
        height: 40,
        marginLeft: 10,
        marginBottom: 0,
        marginTop: 5,
        borderWidth: 1,
    },
    searchSetStyles: {
        width: 25,
        height: 50,
        marginLeft: 15,
        marginBottom: 0,
        marginTop: 0,
        resizeMode: 'contain'
    },
    cancelStyles: {
        width: 20,
        height: 50,
        marginLeft: 10,
        marginBottom: 0,
        marginTop: 0,
        resizeMode: 'contain'
    }
});

const Header = () => {
    const [shouldShow, setShouldShow] = useState(true);
    const [textInputValue, setTextInputValue] = React.useState('');
    return (
        <View style={{flexDirection: "row",backgroundColor: '#FFFFFF', borderBottomWidth: 1}}>
            {shouldShow ? (
                <View style={styles.logoRow}>
                    <Image
                      style={styles.logoIcon}
                      source={require('./assets/logo_icon.png')}
                    />
                    <Image
                        style={styles.logoText}
                        source={require("./assets/logo_text.png")}
                    />
                </View>
            ) : null}

            {!shouldShow ? (
                <View style={{flexDirection: "row",backgroundColor: '#FFFFFF'}}>
                    <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                        <Image
                              style={styles.cancelStyles}
                              source={require('./assets/cancel_icon.png')}
                        />
                    </TouchableOpacity>

                    <TextInput
                          style={styles.inputStyles}
                          onChangeText={text => setTextInputValue(text)}
                          value={textInputValue}
                          placeholder="Search"
                    />

                    <TouchableOpacity onPress={() => Alert.alert('Searching')}>
                        <Image
                              style={styles.searchSetStyles}
                              source={require('./assets/search_icon.png')}
                        />
                    </TouchableOpacity>
                </View>
            ) : null}

            <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
                {shouldShow ? (
                    <Image
                        style={styles.searchStyles}
                        source={require('./assets/search_icon.png')}
                    />
                ) : null}
            </TouchableOpacity>
            {shouldShow ? (
                <TouchableOpacity onPress={() => Alert.alert('Message')}>
                    <Image
                        style={styles.messageStyles}
                        source={require('./assets/message_icon.png')}
                    />
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

export default Header;