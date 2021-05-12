import React,{useState} from 'react';
import { Text, View, Image, StyleSheet,TouchableOpacity, Alert, TextInput} from 'react-native';

const logoStyles = StyleSheet.create({
  stretch: {
    width: 200,
    height: 50,
    marginLeft: 20,
    marginRight: 100,
    marginBottom: 0,
    marginTop: 0,
    resizeMode: 'contain'
  }
});

const searchStyles = StyleSheet.create({
  stretch: {
    width: 25,
    height: 50,
    marginLeft: 0,
    marginBottom: 0,
    marginTop: 0,
    resizeMode: 'contain'
  }
});

const messageStyles = StyleSheet.create({
  stretch: {
    width: 35,
    height: 50,
    marginLeft: 10,
    marginBottom: 0,
    marginTop: 0,
    resizeMode: 'contain'
  }
});

const inputStyles = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    marginLeft: 10,
    marginBottom: 0,
    marginTop: 5,
    borderWidth: 1,
  },
});

const searchSetStyles = StyleSheet.create({
  stretch: {
    width: 25,
    height: 50,
    marginLeft: 15,
    marginBottom: 0,
    marginTop: 0,
    resizeMode: 'contain'
  }
});

const cancelStyles = StyleSheet.create({
  stretch: {
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
    <View style={{flexDirection: "row",backgroundColor: '#F0000'}}>
      {shouldShow ? (
          <Image
            style={logoStyles.stretch}
            source={require('./logo_title.png')}
          />
      ) : null}

      {!shouldShow ? (
      <View style={{flexDirection: "row",backgroundColor: '#F0000'}}>
            <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
            <Image
                  style={cancelStyles.stretch}
                  source={require('./cancel_icon.png')}
            />
            </TouchableOpacity>
            <TextInput
                  style={inputStyles.input}
                  onChangeText={text => setTextInputValue(text)}
                  value={textInputValue}
                  placeholder="Search"
            />
            <TouchableOpacity onPress={() => Alert.alert('Searching')}>
            <Image
                  style={searchSetStyles.stretch}
                  source={require('./search_icon.png')}
            />
            </TouchableOpacity>
      </View>
      ) : null}

      <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
      {shouldShow ? (
            <Image
                  style={searchStyles.stretch}
                  source={require('./search_icon.png')}
            />
      ) : null}
      </TouchableOpacity>
      {shouldShow ? (
      <TouchableOpacity onPress={() => Alert.alert('Message')}>
            <Image
                  style={messageStyles.stretch}
                  source={require('./message_icon.png')}
            />
      </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Header;