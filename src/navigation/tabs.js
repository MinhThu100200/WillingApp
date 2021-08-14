import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { UserScreen, SupportScreen } from '../screens';
import { COLORS, icons } from '../../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            style:{
                borderTopWidth: 0,
                backgroundColor: COLORS.lightBlue,
                elevation: 0,
            }
        }}
        >
             <Tab.Screen
                name="Trang chủ"
                component={UserScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (<Image
                            source={icons.home}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary :  COLORS.secondary,
                            }}
                        />);
                    },
                    
                }}/>

            <Tab.Screen
                name="Hỗ trợ"
                component={SupportScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (<Image
                            source={icons.support}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary : COLORS.secondary 
                            }}
                        />);
                    },
                }}/>

            <Tab.Screen
                name="Hộp thư"
                component={UserScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (<Image
                            source={icons.chat}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary : COLORS.secondary 
                            }}
                        />);
                    },
                   
                }}/>

            <Tab.Screen
                name="Thông báo"
                component={UserScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (<Image
                            source={icons.notify}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? COLORS.primary : COLORS.secondary 
                            }}
                        />);
                    },
                    
                }}/>

            <Tab.Screen
                name="Tôi"
                component={UserScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (<Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                
                                tintColor: focused ? COLORS.primary : COLORS.secondary 
                            }}
                        />);
                    },
                    
                }}/>
        </Tab.Navigator>
    );
};

export default Tabs;
