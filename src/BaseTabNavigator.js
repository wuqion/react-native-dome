import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './home/HomeScreen';
import DetailsScreen from './home/details/DetailsScreen';

import FindScreen from './find/FindScreen';

import CenterScreen from './center/CenterScreen'

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const FindStack = createStackNavigator();
const CenterStack = createStackNavigator();

function Home() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen name="DetailsScreen" component={DetailsScreen} />
        </HomeStack.Navigator>
    )
}
function Find() {
    return (
        <FindStack.Navigator>
            <FindStack.Screen name="FindScreen" component={FindScreen} />
        </FindStack.Navigator>
    )
}
function Center() {
    return (
        <CenterStack.Navigator>
            <CenterStack.Screen name="CenterScreen" component={CenterScreen} />
        </CenterStack.Navigator>
    )
}

export default class BaseTabNavigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home} options={{
                        tabBarLabel: '首页',
                        tabBarIcon: ({ color, size, focused }) => (
                            <View style={{ backgroundColor: focused ? 'red' : 'blue', height: 20, width: 30 }}></View>
                        ),

                    }} />
                    <Tab.Screen name="find" component={Find} options={{
                        tabBarLabel: '发现',
                        tabBarIcon: ({ color, size, focused }) => (
                            <View style={{ backgroundColor: focused ? 'red' : 'blue', height: 20, width: 30 }}></View>
                        )
                    }}/>
                    <Tab.Screen name="center" component={Center} options={{
                        tabBarLabel:'个人',
                        tabBarIcon:({focused})=>(
                            <View style={{ backgroundColor: focused ? 'red' : 'blue', height: 20, width: 30 }}></View>
                        )
                    }} />
                </Tab.Navigator>
            </NavigationContainer>

        )
    }
}