import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import EventScreen from './ServiceScreen';
import EventPost from './ServicePost';

const Stack = createStackNavigator();

const ServiceStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="ServiceScreen" component={ServiceStackScreen} />
            <Stack.Screen name="ServicePost" component={ServicePost} />
        </Stack.Navigator>
    );
}

export default ServiceStack;