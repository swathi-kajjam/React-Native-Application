import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import {purple} from "../utils/colors";

const styles=StyleSheet.create({
    reset:{
        color:'purple',
        textAlign:'center'
    }
})
export default function TextButton({onPress, children, style={}}){
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={[styles.reset, style]}> {children} </Text>
        </TouchableOpacity>
    )
}


