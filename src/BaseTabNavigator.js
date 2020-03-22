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
const tabsImage = {
    home : require('../images/tabs/on/home.png'),
    homeSelect : require('../images/tabs/select/home.png'),
    find : require('../images/tabs/on/danyehuaban.png'),
    findSelect : require('../images/tabs/select/danyehuaban.png'),
    center : require('../images/tabs/on/geren.png'),
    centerSelect : require('../images/tabs/select/geren.png')
}


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
                <Tab.Navigator  tabBarOptions={{
                    activeTintColor: '#1afa29',
                    inactiveTintColor: '#999',
                    }}>
                    <Tab.Screen name="Home" component={Home} options={{
                        title: '首页',
                        tabBarIcon: ({ color, size, focused }) => (
                            <Image source={focused?tabsImage.home:tabsImage.homeSelect}></Image>
                        ),

                    }} />
                    <Tab.Screen name="find" component={Find} options={{
                        tabBarLabel: '发现',
                        tabBarIcon: ({ color, size, focused }) => (
                            <Image source={focused?tabsImage.find:tabsImage.findSelect}></Image>
                        ),
                    }}/>
                    <Tab.Screen name="center" component={Center} options={{
                        tabBarLabel:'个人',
                        tabBarIcon:({focused})=>(
                            <Image source={focused?tabsImage.center:tabsImage.centerSelect}></Image>
                        )
                    }} />
                </Tab.Navigator>
            </NavigationContainer>

        )
    }
}