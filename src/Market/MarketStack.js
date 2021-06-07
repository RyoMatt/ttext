import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MarketScreen from './MarketScreen';
import MarketPost from "./MarketPost";
import CreatePost from "./CreatePost"

const Stack = createStackNavigator();

//This is where all the screens are connected. This enables the user to go from the MarketScreen (screen of the list of posts) 
//to the MarketPost (screen of viewing a single post).

const MarketStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="MarketScreen" component={MarketScreen} />
            <Stack.Screen name="MarketPost" component={MarketPost} />
            <Stack.Screen name="CreatePost" component={CreatePost} />

        </Stack.Navigator>
    );
}

export default MarketStack;