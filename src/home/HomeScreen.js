import React from 'react';
import { 
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

export default class HomeScreen extends React.Component
{
    render(){
        console.log(this)
       return(
           
           <View style={{flex:1}}>
               <Button title="跳转详情" onPress={()=>{
                   this.props.navigation.push('DetailsScreen',{
                       itemId:'ceshi '
                   })
               }}></Button>
           </View>
    )}
}
const styles = StyleSheet.create({
    height:100,
    
})