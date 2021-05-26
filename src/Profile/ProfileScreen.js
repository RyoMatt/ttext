import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileTop}>
        <Image
          style={styles.profileImage}
          source={
            require("../assets/silverash_profile.png")
          }
        />
        <View style={styles.profileDataColumn}>
          <Text style={styles.userName}>FluffyCat2000</Text>
          <Text style={styles.realName}>
            Enciodas{"\n"}
            SilverAsh{"\n"}
            {"\n"}
            3rd Year{"\n"}
            Engineering
          </Text>
        </View>
      </View>

      <Text style={styles.biographyBox}>
      Truesilver Schwing Schwing OP!
      </Text>

      <Text style={styles.contactBox}>Email: masterofkjerag@rhodes.island</Text>
      <Text style={styles.contactBox}>Phone: N/A</Text>

    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileTop: {
    height: 150,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 30,
    marginRight: 30
  },
  profileImage: {
    width: 150,
    height: 150,
  },
  profileDataColumn: {
    marginLeft: 10,
    width: 175,
  },
  userName: {
    height: 40,
    width: 175,
    textAlign: "center",
    fontSize: 24,
  },
  realName: {
    height: 125,
    width: 175,
    fontSize: 18,
    marginTop: 0,
    textAlign: "center"
  },
  biographyBox: {
    height: 120,
    width: 330,
    marginTop: 20,
    marginLeft: 30,
    fontSize: 16
  },
  contactBox: {
    fontSize: 16,
    marginLeft: 30
  }
});

export default ProfileScreen;
