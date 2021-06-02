import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import ProfileScreen from "./ProfileScreen.js";
import ClassSelect from "./ClassSelect.js";
import EditProfile from "./EditProfile.js";


const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="ClassSelect" component={ClassSelect} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
    )
}

export default ProfileStack;