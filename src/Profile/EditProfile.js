import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TextInput, ScrollView, TouchableOpacity, Picker} from "react-native";


import Header from "../Header.js";


// Mock data for a user profile.
let userProfile = {
    id: "44a84eaf-6419-41c1-a8ae-7a4f8070ccd4",
    userName: "FluffyCat2000",
    firstName: "Enciodas",
    middleName: "Kjerag",
    lastName: "SilverAsh",
    year: "3rd Year",
    major: "Business",
    bio: "The stability of the alliance between Karlan and Rhodes Island depends solely on your state of mind, and mine. As such, we should at least try to get along, my friend.",
    email: "kjeragcat@rhodes.island",
    phone: "N/A",
    image: require("./assets/sampleProfileImage.png")
}


export default class EditProfile extends Component {
    constructor(props) {
        super(props);

        userProfile = this.acquireUserProfile();

        this.state = {
            userName: userProfile.userName,
            firstName: userProfile.firstName,
            middleName: userProfile.middleName,
            lastName: userProfile.lastName,
            year: userProfile.year,
            major: userProfile.major,
            bio: userProfile.bio,
            email: userProfile.email,
            phone: userProfile.phone,
            image: userProfile.image
        }
    }

    acquireUserProfile = () => {
        // Get user profile information from database.
        // Using fake data here.

        // This, along with anything that calls on this data, may have to be modified
        // to fit whatever data model is being used.
        return userProfile;
    }

    updateUserProfile = () => {
        // Submit changed data to database.
        // Make sure to do error checking! (No submitting empty names, etc)

        // This function is currently unused in the code, you'll have to go and modify the onPress
        // for the "Save Changes" button.
    }

    render() {

        return (
            <ScrollView>

                <Header />

                <View style={styles.editHeader}>

                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Image
                            style={styles.backButtonIcon}
                            source={require("./assets/back_icon.png")}
                        />
                    </TouchableOpacity>

                    <Text style={styles.editProfileTitle}>Edit Profile</Text>

                </View>

                <View style={styles.separator}></View>

                <View style={styles.contentBox}>

                    <View style={styles.rowBox}>
                        <Text style={styles.titleText}>Username:</Text>
                        <Text style={styles.titleText}>{userProfile.userName}</Text>
                    </View>

                    <View style={styles.rowBox}>
                        <Text style={styles.titleText}>First Name:</Text>
                        <TextInput
                            style={styles.basicTextInput}
                            onChangeText={(text) => this.setState({ firstName: text })}
                            value={this.state.firstName}
                            defaultValue={this.state.firstName}
                            maxLength={25}
                        />
                    </View>

                    <View style={styles.rowBox}>
                        <Text style={styles.titleText}>Middle Name:</Text>
                        <TextInput
                            style={styles.basicTextInput}
                            onChangeText={(text) => this.setState({ middleName: text })}
                            value={this.state.middleName}
                            defaultValue={this.state.middleName}
                            maxLength={25}
                        />
                    </View>

                    <View style={styles.rowBox}>
                        <Text style={styles.titleText}>Last Name:</Text>
                        <TextInput
                            style={styles.basicTextInput}
                            onChangeText={(text) => this.setState({ lastName: text })}
                            value={this.state.lastName}
                            defaultValue={this.state.lastName}
                            maxLength={25}
                        />
                    </View>

                    <View style={styles.rowBox}>
                        <Text style={styles.titleText}>Major:</Text>
                        <TextInput
                            style={styles.basicTextInput}
                            onChangeText={(text) => this.setState({ major: text })}
                            value={this.state.major}
                            defaultValue={this.state.major}
                            maxLength={25}
                        />
                    </View>

                    <View style={styles.rowBox}>
                        <Text style={styles.titleText}>Email:</Text>
                        <TextInput
                            style={styles.basicTextInput}
                            onChangeText={(text) => this.setState({ email: text })}
                            value={this.state.email}
                            defaultValue={this.state.email}
                            maxLength={40}
                        />
                    </View>

                    <View style={styles.rowBox}>
                        <Text style={styles.titleText}>Phone:</Text>
                        <TextInput
                            style={styles.basicTextInput}
                            onChangeText={(text) => this.setState({ phone: text })}
                            value={this.state.phone}
                            defaultValue={this.state.phone}
                            maxLength={15}
                        />
                    </View>

                    <View style={styles.rowBox}>
                        <Text style={styles.titleText}>Year:</Text>
                        <Picker
                            style={styles.basicDropdown}
                            selectedValue={this.state.year}
                            onValueChange={(itemValue, itemIndex) => this.setState({ year: itemValue })}
                            mode="dropdown"
                        >
                            <Picker.Item label="1st Year" value="1st Year" />
                            <Picker.Item label="2nd Year" value="2nd Year" />
                            <Picker.Item label="3rd Year" value="3rd Year" />
                            <Picker.Item label="4th Year" value="4th Year" />
                            <Picker.Item label="5th Year" value="5th Year" />
                            <Picker.Item label="6th Year" value="6th Year" />
                        </Picker>
                    </View>

                    <View>
                        <View style={styles.rowBox}>
                            <Text style={styles.titleText}>Biography:</Text>
                        </View>
                        <TextInput
                            multiline={true}
                            editable={true}
                            numberOfLines={8}
                            style={styles.bigTextInput}
                            onChangeText={(text) => this.setState({ bio: text })}
                            value={this.state.bio}
                            defaultValue={this.state.bio}
                            textAlign="left"
                            textAlignVertical="top"
                            maxLength={500}
                        />
                    </View>

                </View>

                <View style={styles.separator}></View>

                <View style={styles.submitCancelRow}>

                    <TouchableOpacity
                        style={styles.submitCancelButton}
                        onPress={() => this.props.navigation.navigate("ProfileScreen")}
                    >
                        <View style={styles.buttonBackground}>
                            <View style={[styles.buttonForeground, { backgroundColor: "#F3A49E" }]}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.submitCancelButton}
                        onPress={() => this.props.navigation.navigate("ProfileScreen")} // Change to submit data.
                    >
                        <View style={styles.buttonBackground}>
                            <View style={[styles.buttonForeground, { backgroundColor: "#9EF3CD" }]}>
                                <Text style={styles.buttonText}>Save Changes</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={styles.bottomSpacer}>
                </View>


            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    editHeader: {
        width: "100%",
        flexDirection: "row",
    },
    backButton: {
        width: 40,
        height: 20,
        marginLeft: 10,
        marginTop: 15,
    },
    backButtonIcon: {
        width: 40,
        height: 20,
    },
    editProfileTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 10,
    },
    separator: {
        backgroundColor: "#F87D0B",
        width: "100%",
        height: 10,
        marginTop: 5,
    },
    contentBox: {
        marginLeft: 10,
        marginTop: 10,
    },
    rowBox: {
        flexDirection: "row",
        marginTop: 15,
        alignContent: "center",
        justifyContent: "space-between",
        marginRight: 15,
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    basicTextInput: {
        marginLeft: 10,
        height: 30,
        width: 200,
        backgroundColor: "#FFFFFF",
        fontSize: 18,
        padding: 0,
        paddingLeft: 5,
        borderWidth: 1,
    },
    basicDropdown: {
        marginLeft: 10,
        height: 30,
        width: 150,
        backgroundColor: "#FFFFFF",
        fontSize: 18,
        padding: 0,
        paddingLeft: 5,
        borderWidth: 1,
    },
    bigTextInput: {
        width: 380,
        alignSelf: "center",
        marginTop: 5,
        backgroundColor: "#FFFFFF",
        fontSize: 14,
        paddingLeft: 5,
        paddingTop: 0,
        paddingBottom: 0,
        borderWidth: 1,
    },
    submitCancelRow: {
        flexDirection: "row",
        width: "100%",
        marginTop: 10,
        justifyContent: "space-between",
        paddingStart: 30,
        paddingEnd: 30,
    },
    submitCancelButton: {
        width: 150,
        height: 50,
        alignSelf: "center",
    },
    buttonBackground: {
        backgroundColor: "#F87D0B",
        width: 160,
        height: 50,
        alignSelf: "center",
    },
    buttonForeground: {
        width: 140,
        height: 40,
        alignSelf: "center",
        marginTop: 6,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 7,
    },
    bottomSpacer: {
        marginTop: 25,  // Puts gap between the buttons and the navbar to reduce user error.
    }


})