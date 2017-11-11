import React, {Component} from 'react';
import {
            Text,
            View,
            StyleSheet,
            ImageEditor,
            Image,
            TouchableOpacity
        } from 'react-native';
import { ImagePicker } from 'expo';

class PhotoPicker extends Component{
    state = {
        image: null
    }

    pickImage(){
        ImagePicker.launchImageLibraryAsync({
            allowEditing: true,
            aspect: [2, 1]
        }).then((result) => {
            if(result.cancelled){
                return;
            }

            ImagePicker.cropImage(result.uri, {
                offset: {x:0, y:0},
                size: {width: result.width, height: result.height},
                displaySize: {width: 200, height:100 },
                resizeMode: 'contain'
            }, (uri) => this.setState(() => ({image: uri})),
                () => console.log('Error')
            )
        })
    }
    render(){
        const {image} = this.state;

        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this.pickImage}>
                    <Text> Pick the image </Text>
                </TouchableOpacity>

                {image && (
                    <Image style={styles.img} source={{uri:image}} />
                )}
            </View>

        )
    }
}

const styles = {
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img:{
        width:150,
        height:150,
        backgroundColor:'black',
        resizeMode: 'contain'
    }
}