import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper';

const deviceWidth = Dimensions.get('window').width;      //设备的宽度

export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      swiper: []
    }
  }
  componentWillMount() {
    fetch('http://rap2.taobao.org:38080/app/mock/247672/homo')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          swiper: responseJson.swiper
        })
        console.log(responseJson.swiper)
      })
      .catch((error) => {
        console.error(error);
      });
  }
  ceshi(){
    // alert('ddd');
  }
  render() {
    console.log(this)
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.wrapper}>
          <Swiper showsButtons={false} autoplay={true}>
            <View>
              <Image style={styles.slide_image} onLoad={this.ceshi}
                source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584638767208&di=93a6e8c3a4ec8efbe09b06ecd255fcce&imgtype=0&src=http%3A%2F%2Fimage.hnol.net%2Fc%2F2016-03%2F31%2F16%2F201603311627201261-2089977.jpg' }}></Image>
              <Text style={styles.slide_title}>标题</Text>
            </View>
            <View>
              <Image style={styles.slide_image} onLoad={this.ceshi}
                source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584638767206&di=de2d7277cb423125e1dac0fb1af8cdc9&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F4%2F77%2Fc445755754.jpg' }}></Image>
              <Text style={styles.slide_title}>标题</Text>
            </View>
          </Swiper>
        </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    width: deviceWidth,
    height: 200
  },
  slide_title: {
      color: 'red', 
      position: 'absolute', 
      right: 0, 
      bottom: 0
  },
  slide_image:{
    height: '100%', 
    width: '100%'
  }
})