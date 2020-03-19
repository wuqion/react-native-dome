import React from 'react';
import { 
    View,
    Text,
    Button,
    Alert
} from 'react-native';

export default class CenterScreen extends React.Component
{
    constructor(){
        super()
        this.state={
            obj:'dd'
        }
    }
    render(){
        
       return(
        <View>
            <Button title="跳转首页" onPress={()=>{
                this.props.navigation.navigate('Home');
            }}></Button>
        </View>
    )}
}