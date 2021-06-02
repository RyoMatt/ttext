import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image, TextInput} from "react-native";


import Header from "../Header.js";


/* TEMPORARY CLASS DEFINITION & RENDER CODE FOR "COURSE"
 * This should be extracted to a separate model file and correspond
 * to the database / backend models. 
 */
class Course {
    constructor(courseTitle, courseIdentifier, professorName) {
        this.courseTitle = courseTitle;
        this.courseIdentifier = courseIdentifier;
        this.professorName = professorName;
        this.courseImage = require("./assets/sampleCourseImage.png")
    }
}
const renderItem = (item) => (
    <TouchableOpacity>
        <View style={postStyles.postBox}>
            <Image
                style={postStyles.displayImage}
                source={item.courseImage}
            />
            <View style={postStyles.dataBox}>
                <Text style={postStyles.postTitle}>{item.courseTitle}</Text>
                <Text style={postStyles.postDetail}>{item.courseIdentifier}</Text>
                <Text style={postStyles.postDetail}>{item.professorName}</Text>

            </View>
        </View>
    </TouchableOpacity>
);



export default class ClassSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentDisplay: this.changeDisplay("addClasses") // Major / Major-specific classes
        }
    }

    searchInput = () => {
        const [text, onChangeText] = React.useState(null);  // Don't ask me what this does, I copied it from the documentation of TextInput.
    }


    acquireDatabaseCourses = () => {
        // Get classes from the database; we're just going to use fake data here.
        // This can probably be adapted to also take parameters "searchText" and "sortBy" for searching/sorting.
        var classes = [];
        for (let i = 1; i < 10; i++) {
            let newClass = new Course("Class Name", "Class ID", "Professor Name");
            newClass.courseTitle += " " + i;
            classes.push(newClass);
        }
        return classes;
    }

    acquireUserCourses = () => {
        // Get user's classes; this is all fake data (obviously).
        // As mentioned in ProfileScreen.js, you could use caching (the very same one to display classes there)
        // to speed up loading times.
        var classes = [];
        let class_MGMT154 = new Course("Global Marketing", "MGMT 154", "Professor Dobermann");
        class_MGMT154.courseImage = require("./assets/classImage1.png");
        classes.push(class_MGMT154);

        let class_MGMT189 = new Course("Operations Management", "MGMT 189", "Professor Dur-nar");
        class_MGMT189.courseImage = require("./assets/classImage2.png");
        classes.push(class_MGMT189);

        return classes;
    }

    changeDisplay = (viewType) => {
        let renderCode = "";
        if (viewType == "addClasses") {
            let dbClassList = this.acquireDatabaseCourses();
            renderCode = (
                <View style={styles.addCourseGreen}>
                    {dbClassList.map(renderItem)}
                </View>
            )
        }
        else if (viewType == "removeClasses") {
            let userClassList = this.acquireUserCourses();
            renderCode = (
                <View style={styles.removeCourseRed}>
                    {userClassList.map(renderItem)}
                </View>
            )
        }

        return renderCode;
    }

    onPressChangeDisplay = (newView) => {
        this.setState({
            currentDisplay: this.changeDisplay(newView)
        })
    }



    render() {
        return (
            <View styles={styles.container}>

                <Header />

                <View style={styles.classesHeader}>

                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => this.props.navigation.goBack() }
                    >
                        <Image
                            style={styles.backButtonIcon}
                            source={require("./assets/back_icon.png")}
                        />
                    </TouchableOpacity>

                    <Text style={styles.classesTitle}>Classes</Text>

                </View>


                <View style={styles.tabBackground}>

                    <TouchableOpacity
                        style={styles.tabButton}
                        onPress={() => this.onPressChangeDisplay("addClasses")}
                    >
                        <Text style={styles.tabButtonText}>Add Course</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.tabButton}
                        onPress={() => this.onPressChangeDisplay("removeClasses")}
                    >
                        <Text style={styles.tabButtonText}>Remove Course</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.searchSortHeader}>

                    <Image
                        style={styles.searchIcon}
                        source={require("./assets/search_icon.png")}
                    />
                    <TextInput
                        style={styles.searchInput}
                        onChangeText={this.searchInput.onChangeText}
                        value={this.searchInput.text}
                        placeholder=" Search..."
                    />

                    <TouchableOpacity
                        style={styles.sortButton}
                    >
                        <Image
                            style={styles.sortIcon}
                            source={require("./assets/sort_icon.png")}
                        />
                    </TouchableOpacity>
                    
                </View>


                <ScrollView style={styles.scrollBox}>
                    {this.state.currentDisplay}
                </ScrollView>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    classesHeader: {
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
    classesTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 30,
        marginTop: 10,
    },
    tabBackground: {
        width: 400,
        height: 60,
        flexDirection: "row",
        alignSelf: "center",
        backgroundColor: "#F87D0B",
        marginTop: 10,
    },
    tabButton: {
        width: 150,
        height: 40,
        marginLeft: 35,
        backgroundColor: "#FFFFFF",
        alignSelf: "center",
    },
    tabButtonText: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 7,
        fontStyle: "italic",
    },
    searchSortHeader: {
        width: 420,
        marginTop: 5,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignSelf: "center",
    },
    searchIcon: {
        width: 20,
        height: 20,
        alignSelf: "center",
        marginLeft: 20,
    },
    searchInput: {
        height: 40,
        width: 150,
        marginLeft: 5,
    },
    sortButton: {
        height: 20,
        width: 20,
        alignSelf: "center",
        justifyContent: "flex-end",
        marginLeft: 180,
    },
    sortIcon: {
        height: 20,
        width: 20,
    },
    scrollBox: {
        width: 400,
        height: 380,
        backgroundColor: "#FFFFFF",
        marginTop: 10,
        alignSelf: "center",
    },
    addCourseGreen: {
        backgroundColor: "#9ef3cd",
    },
    removeCourseRed: {
        backgroundColor: "#f3a49e",
    }
})



// StyleSheet for the rendering of courses (renderItem).
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