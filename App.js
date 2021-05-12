import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Header from './src/Header';
import EventScreen from './src/EventScreen';
import GeneralScreen from './src/GeneralScreen';
import MarketScreen from './src/MarketScreen';
import ServiceScreen from './src/ServiceScreen';
import ProfileScreen from './src/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
/*
function GeneralScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>GeneralScreen!</Text>
        </View>
  );
}

function ServiceScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ServiceScreen!</Text>
    </View>
  );
}

function EventsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>EventsScreen!</Text>
    </View>
  );
}*/
/*
function MarketScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MarketScreen!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ProfileScreen!</Text>
    </View>
  );
}*/

export default function App() {
  return (

    <NavigationContainer>
      <View>
                  <Header />
            </View>
      <Tab.Navigator>
        <Tab.Screen name="Event" component={EventScreen}
               options={{
                    tabBarLabel: 'Event',
                    tabBarIcon: ({focused, color, size}) => (
                      <Image
                        source={
                          focused
                            ? require('./assets/event_orange.png')
                            : require('./assets/event_black.png')
                        }
                        style={{
                          width: size,
                          height: size,
                          borderRadius: size,
                        }}
                      />
                    ),
               }}
        />
        <Tab.Screen name="Market" component={MarketScreen}
               options={{
                    tabBarLabel: 'Market',
                    tabBarIcon: ({focused, color, size}) => (
                      <Image
                        source={
                          focused
                            ? require('./assets/market_orange.png')
                            : require('./assets/market_black.png')
                        }
                        style={{
                          width: size,
                          height: size,
                          borderRadius: size,
                        }}
                      />
                    ),
               }}
        />
        <Tab.Screen name="General" component={GeneralScreen}
               options={{
                    tabBarLabel: 'General',
                    tabBarIcon: ({focused, color, size}) => (
                      <Image
                        source={
                          focused
                            ? require('./assets/general_orange.png')
                            : require('./assets/general_black.png')
                        }
                        style={{
                          width: size,
                          height: size,
                          borderRadius: size,
                        }}
                      />
                    ),
               }}
        />
        <Tab.Screen name="Service" component={ServiceScreen}
               options={{
                    tabBarLabel: 'Service',
                    tabBarIcon: ({focused, color, size}) => (
                      <Image
                        source={
                          focused
                            ? require('./assets/service_orange.png')
                            : require('./assets/service_black.png')
                        }
                        style={{
                          width: size,
                          height: size,
                          borderRadius: size,
                        }}
                      />
                    ),
               }}
         />
         <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({focused, color, size}) => (
                      <Image
                        source={
                          focused
                            ? require('./assets/profile_orange.png')
                            : require('./assets/profile_black.png')
                        }
                        style={{
                          width: size,
                          height: size,
                          borderRadius: size,
                        }}
                      />
                    ),
                }}
         />
      </Tab.Navigator>
    </NavigationContainer>
  );
}