import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventScreen from './EventScreen';
import GeneralScreen from './GeneralScreen';
import MarketScreen from './MarketScreen';
import ServiceScreen from './ServiceScreen';
import ProfileScreen from './ProfileScreen';
import EventStack from './EventStack';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
    <View style={{ flex: 1}}>
        <Tab.Navigator>
            <Tab.Screen name="Event" component={EventStack}
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
    </View>
  );
}

export default BottomTabNav;