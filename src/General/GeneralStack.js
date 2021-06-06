import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
/*  GeneralStack.js describes the navigation between the different pages available
*   through the general screen. Similar to the navigation of the different pages
*
*   Pages: GeneralScreen, GeneralPost, and PostGeneral
*/

import GeneralScreen from './GeneralScreen';
import GeneralPost from './GeneralPost';
import PostGeneral from './PostGeneral';

const Stack = createStackNavigator();

const GeneralStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="GeneralScreen" component={GeneralScreen} />
            <Stack.Screen name="GeneralPost" component={GeneralPost} />
            <Stack.Screen name="PostGeneral" component={PostGeneral} />
        </Stack.Navigator>
    );
}

export default GeneralStack;

