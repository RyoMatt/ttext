import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ServiceScreen from './ServiceScreen.js';
import StudentServicePost from './StudentServicePost.js';
import SchoolServicePost from './SchoolServicePost.js';

const Stack = createStackNavigator();

const ServiceStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="ServiceScreen" component={ServiceScreen} />
            <Stack.Screen name="SchoolServicePost" component={SchoolServicePost} />
            <Stack.Screen name="StudentServicePost" component={StudentServicePost} />
        </Stack.Navigator>
    );
}

export default ServiceStack;