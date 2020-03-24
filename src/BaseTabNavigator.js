import React from 'react'
import {
    View,
    Text,
    Image,
    Platform
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './home/HomeScreen';
import DetailsScreen from './home/details/DetailsScreen';

import FindScreen from './find/FindScreen';
import FindScreens from './find/FindScreens';


import CenterScreen from './center/CenterScreen'
const tabsImage = Platform.OS == 'web'?{
    home : '../images/tabs/on/home.png',
    homeSelect : '../images/tabs/select/home.png',
    find : '../images/tabs/on/danyehuaban.png',
    findSelect : '../images/tabs/select/danyehuaban.png',
    center : '../images/tabs/on/geren.png',
    centerSelect : '../images/tabs/select/geren.png'
}:{
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
        <HomeStack.Navigator initialRouteName="HomeScreen"> 
            <HomeStack.Screen name="HomeScreen" component={HomeScreen}  options={{headerMode:"none",headerShown:false}}/>
            <HomeStack.Screen name="DetailsScreen" component={DetailsScreen} />
        </HomeStack.Navigator>
    )
}
function Find() {
    return (
        <FindStack.Navigator>
            <FindStack.Screen name="FindScreen" component={FindScreen}  options={{ title: '发现' }}/>
            <FindStack.Screen name="FindScreens" component={FindScreens} />
        </FindStack.Navigator>
    )
}
function Center() {
    return (
        <CenterStack.Navigator>
            <CenterStack.Screen name="CenterScreen" component={CenterScreen} options={{ title: '个人' }}/>
        </CenterStack.Navigator>
    )
}

export default class BaseTabNavigator extends React.Component {
    render() {
        return (
            <NavigationContainer displayName="dd"  >
                <Tab.Navigator  tabBarOptions={{
                    activeTintColor: '#1afa29',
                    inactiveTintColor: '#999',
                    }}>
                    <Tab.Screen name="Home" component={HomeScreen} options={{
                        title: '首页',
                        tabBarIcon: ({ color, size, focused }) => (
                            <Image style={{height:20,width:20}} source={focused?tabsImage.home:tabsImage.homeSelect}></Image>
                        ),

                    }} />
                    <Tab.Screen name="find" component={FindScreen} options={{
                        tabBarLabel: '发现',
                        tabBarIcon: ({ color, size, focused }) => (
                            <Image style={{height:20,width:20}} source={focused?tabsImage.find:tabsImage.findSelect}></Image>
                        ),
                    }}/>
                    <Tab.Screen name="center" component={Center} options={{
                        tabBarLabel:'个人',
                        tabBarIcon:({focused})=>(
                            <Image style={{height:20,width:20}} source={focused?tabsImage.center:tabsImage.centerSelect}></Image>
                        )
                    }} />
                </Tab.Navigator>
            </NavigationContainer>

        )
    }
}