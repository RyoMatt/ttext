import React, { Component,useState } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, Button, Alert, TouchableOpacity, FlatList, TextInput, Picker } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    fontSize: 42,
  },
  logoStyles: {
          width: 200,
          height: 50,
          marginLeft: 20,
          marginRight: 100,
          marginBottom: 0,
          marginTop: 0,
          resizeMode: 'contain'
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
      input: {
          height: 40,
          marginLeft: 20,
          marginRight: 20,
          borderWidth: 1,
        },
        detail: {
                  height: 120,

                  borderWidth: 1,
                  marginLeft: 20,
                            marginRight: 20,
                },
      titleText: {
          marginLeft: 20,
          fontSize: 22,
          fontWeight: 'bold',
          paddingVertical: 5,
        },
        textStyle: {
          padding: 10,
          color: 'black',
        },
        buttonStyle: {
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#DDDDDD',
          padding: 5,
        },
        imageStyle: {
          width: 160,
          height: 100,
          margin: 5,
        },
});

const PostEvent =(props)=> {
    const [shouldShow, setShouldShow] = useState(true);
    const [selectedValue, setSelectedValue] = useState(null);
    const [text, onChangeText] = React.useState(null);
    const [text1, onChangeText1] = React.useState(null);
    const [text2, onChangeText2] = React.useState(null);
    const [text3, onChangeText3] = React.useState(null);

    const [filePath, setFilePath] = useState('ttext/src/asset/dummy.png');

    const chooseFile = () => {
        let options = {
          maxWidth: 300,
          maxHeight: 550,
          quality: 1,
        };
        launchImageLibrary(options, (response) => {
          console.log('Response = ', response);

          if (response.didCancel) {
            alert('User cancelled camera picker');
            return;
          } else if (response.errorCode == 'camera_unavailable') {
            alert('Camera not available on device');
            return;
          } else if (response.errorCode == 'permission') {
            alert('Permission not satisfied');
            return;
          } else if (response.errorCode == 'others') {
            alert(response.errorMessage);
            return;
          }
          console.log('base64 -> ', response.base64);
          console.log('uri -> ', response.uri);
          console.log('width -> ', response.width);
          console.log('height -> ', response.height);
          console.log('fileSize -> ', response.fileSize);
          console.log('fileName -> ', response.fileName);
          setShouldShow(false)
          setFilePath(response);
        });
      };

    return (
        <View style={{flex: 1,flexDirection: 'column', backgroundColor: '#FFFFFF'}}>
            {//Header
            }
            <View style={{flexDirection: "row",backgroundColor: '#F0000', borderWidth: 1}}>
                <Image
                    style={styles.logoStyles}
                    source={require('ttext/src/assets/logo_title.png')}
                />
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image
                        style={styles.searchStyles}
                        source={require('ttext/src/assets/back.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Message')}>
                    <Image
                        style={styles.messageStyles}
                        source={require('ttext/src/assets/message_icon.png')}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <Text style={styles.titleText}>Category</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ marginLeft:20, borderWidth: 1, height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    mode="dropdown"
                >
                    <Picker.Item label="School" value="School" />
                    <Picker.Item label="Near Me" value="Near Me" />
                </Picker>

                <Text style={styles.titleText}>Title</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Title"
                />

                <Text style={styles.titleText}>Location</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText1}
                    value={text1}
                    placeholder="Location"
                />

                <Text style={styles.titleText}>Time</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText2}
                    value={text2}
                    placeholder="Time"
                />

                <View style={{flex: 1,flexDirection: 'row', backgroundColor: '#FFFFFF'}}>
                    <Text style={{marginLeft: 20,
                                            fontSize: 22,
                                            fontWeight: 'bold',
                                            paddingVertical: 5,width:200}}>Image</Text>
                    <TouchableOpacity onPress={() => chooseFile()}>
                    {shouldShow ? (
                        <Image
                          style={styles.imageStyle}
                          source={require('ttext/src/assets/dummy.png')}
                        />
                    ) : null}
                    {!shouldShow ? (
                    <Image
                      source={{uri: filePath.uri}}
                      style={styles.imageStyle}
                    />
                    ) : null}
                    </TouchableOpacity>
                </View>

                <Text style={styles.titleText}>Detail</Text>
                <TextInput
                    style={styles.detail}
                    onChangeText={onChangeText3}
                    value={text3}
                    multiline={true}
                    placeholder="Detail"
                />
                <View style={{flex: 1,flexDirection: 'row', margin:5, marginLeft:200, backgroundColor: '#FFFFFF',justifyContent: 'space-around',}}>
                <Button
                  title="   Post   "
                  color='#F87D0B'
                  onPress={() => props.navigation.goBack()}
                />
                <Button
                   title="Cancel"
                   color='#F87D0B'
                   onPress={() => props.navigation.goBack()}
                />
                </View>
            </ScrollView>
        </View>
    );
}

export default PostEvent;