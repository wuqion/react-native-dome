import React from 'react'
import {
    Image,
    Platform
} from 'react-native'
import { NavigationContainer, useLinking } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './home/HomeScreen';
import DetailsScreen from './home/details/DetailsScreen'

import FindScreen from './find/FindScreen';

import center from './center/CenterScreen';

import FindsScreen from './find/FindsScreen'
const tabsImage = Platform.OS == 'web' ? {
    home: '../images/tabs/on/home.png',
    homeSelect: '../images/tabs/select/home.png',
    find: '../images/tabs/on/danyehuaban.png',
    findSelect: '../images/tabs/select/danyehuaban.png',
    center: '../images/tabs/on/geren.png',
    centerSelect: '../images/tabs/select/geren.png'
} : {
        home: require('../images/tabs/on/home.png'),
        homeSelect: require('../images/tabs/select/home.png'),
        find: require('../images/tabs/on/danyehuaban.png'),
        findSelect: require('../images/tabs/select/danyehuaban.png'),
        center: require('../images/tabs/on/geren.png'),
        centerSelect: require('../images/tabs/select/geren.png')
    }

// const routeNameRef = React.useRef(null);
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const getActiveRoute = state => {
    const route = state.routes[state.index]
console.log(state);
    if (route.state) {
        // Dive into nested navigators
        return getActiveRoute(route.state)
    }
    console.log("=======");


    return route
}
const Home = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#1afa29',
            inactiveTintColor: '#999',
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                title: '首页',
                tabBarIcon: ({ color, size, focused }) => (
                    <Image style={{ height: 20, width: 20 }} source={focused ? tabsImage.home : tabsImage.homeSelect}></Image>
                ),

            }} />
            <Tab.Screen name="Find" component={FindScreen} options={{
                tabBarLabel: '发现',
                tabBarIcon: ({ color, size, focused }) => (
                    <Image style={{ height: 20, width: 20 }} source={focused ? tabsImage.find : tabsImage.findSelect}></Image>
                ),
            }} />
            <Tab.Screen name="Center" component={center} options={{
                tabBarLabel: '个人',
                tabBarIcon: ({ focused }) => (
                    <Image style={{ height: 20, width: 20 }} source={focused ? tabsImage.center : tabsImage.centerSelect}></Image>
                )
            }} />
        </Tab.Navigator>

    )
};

function BaseTabNavigator() {
    // JPush.init();
    const ref = React.useRef();
    const { getInitialState } = useLinking(ref, {
        prefixes: ['#'],
        config: {
            Root: {
                path: 'Root',
                initialRouteName: 'Root',
                screens: {
                    Home: 'home',
                    Find: 'findd',
                    Center: 'center',
                },
            },

            Finds: 'finds',
            Details:'Details/:itemId'
        }
    });

    const [isReady, setIsReady] = React.useState(false);
    const [initialState, setInitialState] = React.useState();
    React.useEffect(() => {

        getInitialState()
            .catch(() => { })
            .then(state => {
                if (state !== undefined) {
                    console.log(state);
                
                    if(state.routes.length == 1 && state.routes[0]["name"]== "Root"){
                        let tmp = state.routes[0]['state']['routes'][1]['name'];
                        state = {
                            routes: 
                            [{
                                name: "Root",
                                state:{
                                    index: 2, 
                                    routes:
                                    [{name: "Home",key:'e'},
                                    {name: "Find",key:'5'},
                                    {name:"Center",key:'e6'}]}
                                }]}

                        if(tmp =='Find'){
                            state.routes[0]['state']['index'] = 1;
                        }else if(tmp =='Center'){
                            state.routes[0]['state']['index'] = 2;
                        }else{
                            state.routes[0]['state']['index'] = 0;
                        }
                        
                    }else{
                        state = {
                            routes: 
                            [{
                                name: "Root",
                                state:{
                                    index: 2, 
                                    routes:
                                    [{name: "Root",key:'---'},
                                    {name: "Find",key:'90i'},
                                    {name:"Center",key:'jo'}]}},
                                        state['routes'][0]
                                    ]}
                    }
                   

                    
                    console.log('=000');
                    setInitialState(state);
                }

                setIsReady(true);
            });
    }, [getInitialState]);

    if (!isReady) {
        return null;
    }
    return (
        <NavigationContainer
            initialState={initialState}
            ref={ref}
            onStateChange={state => {//跳转监听

                const currentRoute = getActiveRoute(state)
   
            }}
        >
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerTransparent: true,
                        headerTitleAlign: "center",
                        // headerMode: 'none',
                        headerShown: false,
                    }}
                    name="Root"
                    component={Home}
                />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen
                    options={{
                        headerTitleAlign: "center",
                    }}
                    name="Finds"
                    component={FindsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
export default BaseTabNavigator;


