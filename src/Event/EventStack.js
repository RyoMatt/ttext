import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import EventScreen from './EventScreen';
import EventPost from './EventPost';
import PostEvent from './PostEvent';

const Stack = createStackNavigator();

const EventStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="EventScreen" component={EventScreen} />
            <Stack.Screen name="EventPost" component={EventPost} />
            <Stack.Screen name="PostEvent" component={PostEvent} />
        </Stack.Navigator>
    );
}

export default EventStack;