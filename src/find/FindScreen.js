import React from 'react';
import { 
    View,
    Text,
    Button,
    Alert
} from 'react-native';

export default class FindScreen extends React.Component
{
    render(){
        
       return(
        <View>
            <Button title="跳转二级" onPress={()=>{
                this.props.navigation.navigate('FindScreens');
            }}></Button>
        </View>
    )}
}