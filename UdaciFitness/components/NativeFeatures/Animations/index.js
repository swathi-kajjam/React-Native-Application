import React, {Component} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity, StyleSheet, Animated} from 'react-native';

class AnimationSample extends Component{
    state = {
        opacity : new Animated.Value(0),
        width: new Animated.Value(0),
        height: new Animated.Value(0)
    }

    componentDidMount(){
        const {opacity, width, height} = this.state;

        Animated.timing(opacity, {toValue: 1, duration:1000})
            .start();

        Animated.spring(width, {toValue:300, speed:5}).start();
        Animated.spring(height, {toValue:300, speed:5}).start(); // default speed is 12
    }

    render(){

        const {opacity, width, height} = this.state;

        return(
            <View style={styles.container}>
                <Animated.Image style={[styles.image, {opacity, width, height}]}
                    source={{uri:'https://tylermcginnis.com/tyler-mcginnis.jpg'}}/>

            </View>
        )
    }
}
 export default AnimationSample;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    image:{
        width:'50',
        height:'50'
    }
})