import React, { Component } from "react";
import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";


import Header from "../Header.js";
import Post from "../Post.js";


// Mock data for a user profile. 
const userProfile = {
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

    /* Design decision:
     * Posts/Saved/Subscriptions/Classes aren't stored as part of the user profile because
     * a user could have many of each.
     * Getting them all at once could bog down the loading time of the profile scren.
     * Thus, it is proposed that each category is retrieved via a separate API call.
     * 
     * Separate API calls could result in slow loading times if the user changes display tabs a lot.
     * So, I recommend caching the results as well.
     * 
     * In other words, 
     *  - Have acquirePosts() | acquireClasses() | ..etc to retrieve results from the database.
     *  - When calling them for the first time, save the results somewhere (cache).
     *  - On subsequent tab changes, use the cache rather than making another API call.
     *  - When the user leaves the profile screen, discard the contents of the cache.
     */
}


export default class ProfileScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentDisplay: this.changeDisplay("Posts")  // All Posts | Saved Posts | Subscribed | Classes
        }

        
    };

    acquirePosts = () => {
        // Get user posts; currently using fake data.
        var posts = [];
        for (let i = 1; i < 7; i++) {
            let newPost = new Post();
            newPost.id = i;
            newPost.title = "Profile Post #" + i;
            newPost.detail = "Profile post description #" + i;
            newPost.image = require("./assets/postImage.png");
            posts.push(newPost);
        }
        return posts;
    }

    acquireSaved = () => {
        // Get user saved items; currently using fake data.
        var saved = [];
        for (let i = 1; i < 4; i++) {
            let newPost = new Post();
            newPost.id = i;
            newPost.title = "Saved Item #" + i;
            newPost.detail = "Profile's saved item #" + i;
            newPost.image = require("./assets/savedImage.png");
            saved.push(newPost);
        }
        return saved;
    }

    acquireSubscribed = () => {
        // Get user subscriptions; currently using fake data.
        var subscriptions = [];
        let sub_rickAstley = new Post();
        sub_rickAstley.id = "dQw4w9WgXcQ"; // This should be a UUID, or whatever ID type is used.
        sub_rickAstley.title = "NvrGonaGivYuUp";
        sub_rickAstley.detail = "Rick Astley\n\n34th Year, Music"; // Never Gonna Give You Up: 1987 --> 2021 (current)
        sub_rickAstley.image = require("./assets/subscribedImage.png");
        subscriptions.push(sub_rickAstley);

        return subscriptions;
    }

    acquireClasses = () => {
        // Get user classes; currently using fake data.
        var classes = [];

        let class_MGMT154 = new Post();
        class_MGMT154.id = "MGMT154"; // Note to future devs: Please use a consistent ID scheme (e.g. UUIDs)
        class_MGMT154.title = "Global Marketing";
        class_MGMT154.detail = "MGMT 154\nProfessor Dobermann";
        class_MGMT154.image = require("./assets/classImage1.png");
        classes.push(class_MGMT154);

        let class_MGMT189 = new Post();
        class_MGMT189.id = "MGMT189";
        class_MGMT189.title = "Operations Management";
        class_MGMT189.detail = "MGMT 189\nProfessor Dur-nar";
        class_MGMT189.image = require("./assets/classImage2.png");
        classes.push(class_MGMT189);

        return classes;
    }

    onPressChangeDisplay = (newView) => {
        this.setState({
            currentDisplay: this.changeDisplay(newView)
        })
    }

    changeDisplay = (viewType) => {

        /* Temporary post rendering code.
         * We should define a consistent Post function/class/layout which takes a size, and
         * renders the contents of the post in a uniform way (scaling to match given size).
         * This would go in Post.js, or somewhere that makes sense.
         */
        const renderItem = (item) => (
            <TouchableOpacity>
                <View style={postStyles.postBox}>
                    <Image
                        style={postStyles.displayImage}
                        source={item.image}
                    />
                    <View style={postStyles.dataBox}>
                        <Text style={postStyles.postTitle}>{item.title}</Text>
                        <Text style={postStyles.postDetail}>{item.detail}</Text>

                    </View>
                </View>
            </TouchableOpacity>
        );



        let renderCode = "";

        if (viewType == "Posts") {
            let postList = this.acquirePosts();
            renderCode = (
                <View>
                    {postList.map(renderItem)}
                </View>
            )
        }

        else if (viewType == "Saved") {
            let savedList = this.acquireSaved();
            renderCode = (
                <View>
                    {savedList.map(renderItem)}
                </View>
            )
        }

        else if (viewType == "Subscribed") {
            let subscribedList = this.acquireSubscribed();
            renderCode = (
                <View>
                    {subscribedList.map(renderItem)}
                </View>
            )
        }

        else if (viewType == "Classes") {
            let classesList = this.acquireClasses();
            renderCode = (
                <View>

                    <TouchableOpacity
                        style={styles.modifyClassesButton}
                        onPress={() => this.props.navigation.navigate("ClassSelect")}
                    >
                        <ImageBackground
                            source={require("./assets/modify_classes_button.png")}
                            style={styles.modifyClassesImage}
                        >
                            <Text style={styles.modifyClassesText}>Edit Classes</Text>
                        </ImageBackground>
                    </TouchableOpacity>

                    {classesList.map(renderItem)}
                </View>
            )
        }

        return renderCode;
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>

                    <Header />

                    <View style={styles.profileTop}>

                        <Image
                            style={styles.profileImage}
                            source={userProfile.image}
                        />

                        <View style={styles.profileDataColumn}>
                            <Text style={styles.userName}>{userProfile.userName}</Text>
                            <Text style={styles.realName}>
                                {userProfile.firstName}{"\n"}
                                {userProfile.middleName}{"\n"}
                                {userProfile.lastName}{"\n"}
                                {"\n"}
                                {userProfile.year}{"\n"}
                                {userProfile.major}{"\n"}
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.biographyBox}>
                        {userProfile.bio}
                    </Text>

                    <Text style={styles.contactBox}>Email: {userProfile.email}</Text>
                    <Text style={styles.contactBox}>Phone: {userProfile.phone}</Text>


                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={() => this.props.navigation.navigate("EditProfile")}
                    >
                        <Image
                            source={require("./assets/edit_icon.png")}
                            style={styles.editIcon}
                        />
                    </TouchableOpacity>


                    <View style={styles.buttonRowBackground}>

                        <TouchableOpacity
                            style={styles.displayButton}
                            onPress={() => this.onPressChangeDisplay("Posts")}
                        >
                            <Text style={styles.displayButtonText}>My Posts</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.displayButton}
                            onPress={() => this.onPressChangeDisplay("Saved")}
                        >
                            <Text style={styles.displayButtonText}>Saved</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.displayButton}
                            onPress={() => this.onPressChangeDisplay("Subscribed")}
                        >
                            <Text style={styles.displayButtonText}>Subscribed</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.displayButton}
                            onPress={() => this.onPressChangeDisplay("Classes")}
                        >
                            <Text style={styles.displayButtonText}>Classes</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.displayBox}>
                        {this.state.currentDisplay}
                    </View>

                </View>
            </ScrollView>
        )
    }
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
        fontWeight: "bold",
    },
    realName: {
        height: 125,
        width: 175,
        fontSize: 16,
        marginTop: 0,
        textAlign: "center"
    },
    biographyBox: {
        height: 120,
        width: 330,
        marginTop: 20,
        marginLeft: 30,
        fontSize: 16,
        fontStyle: "italic",
    },
    contactBox: {
        fontSize: 16,
        marginLeft: 30
    },
    editButton: {
        width: 24,
        height: 24,
        marginLeft: 360,
    },
    editIcon: {
        width: 24,
        height: 24,
    },
    buttonRowBackground: {
        width: 400,
        height: 60,
        flexDirection: "row",
        alignSelf: "center",
        backgroundColor: "#F87D0B",
        marginTop: 20,
    },
    buttonRow: {
        height: 40,
        flexDirection: "row",
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
    },
    displayButton: {
        width: 80,
        height: 40,
        marginLeft: 15,
        marginTop: 10,
        backgroundColor: "#FFFFFF",
    },
    displayButtonText: {
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
    },
    displayBox: {
        marginLeft: 10,
        marginTop: 10,
    },
    displayPosts: {
        padding: 5,
    },
    modifyClassesButton: {
        alignSelf: "center",
        width: 150,
        height: 35,
        marginBottom: 10,
        marginLeft: -20,
    },
    modifyClassesImage: {
        alignSelf: "center",
        width: 150,
        height: 35,
        marginBottom: 10,
        marginLeft: -20,
    },
    modifyClassesText: {
        textAlign: "center",
        fontSize: 14,
        fontStyle: "italic",
        marginTop: 8,
    }

})


// StyleSheet for the rendering of posts (renderItem).
const postStyles = StyleSheet.create({
    postBox: {
        height: 93,
        width: 390,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#20232a",
    },
    displayImage: {
        width: 80,
        height: 80,
        marginTop: 5,
        marginLeft: 5,
    },
    dataBox: {
        marginVertical: 5,
        marginHorizontal: 5,
    },
    postTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    postDetail: {
        fontSize: 16,
    }

})