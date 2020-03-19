import React from 'react';
import { 
    View,
    Text,
    Button,
    Alert
} from 'react-native';

export default class DetailsScreen extends React.Component
{
    constructor(){
        super()
        this.state={
            obj:'dd'
        }
        // console.log(this.props.navigation)
    }
    render(){
        const {itemId, otherParam} = this.props.route.params;
       return(
        <View>
            <Text>{itemId+'+'+otherParam}</Text>
            <Button title="navigate跳转页面" onPress={()=>{
                this.setState({
                    obj:'gs'
                })
                this.props.navigation.navigate('Details')
                
            }}></Button>
            <Button title="push跳转页面" onPress={()=>{
                this.setState({
                    obj:'gs'
                })
                this.props.navigation.push('Details')
                
            }}></Button>
            <Button title="goBack返回" onPress={()=>{
                this.props.navigation.goBack();
            }}></Button>
            <Button title="navigate返回" onPress={()=>{
                this.props.navigation.navigate('Home');
            }}></Button>
        </View>
    )}
}