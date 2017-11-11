import React from 'react';
import {View, Text, Slider, StyleSheet} from 'react-native';
import {gray} from '../utils/colors';

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        alignItems:'center',
        flex:1
    },
    metricCounter:{
        width: 85,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

//stateless functional Component
export default function UdaciSlider({ max, unit, step, value, onChange }){
    return (
        <View style={styles.row}>
            <Slider style={{flex:1}}
                step={step}
                value={value}
                maximumValue={max}
                minimumValue={0}
                onValueChange={onChange}
            />
            <View style={styles.metricCounter}>
                <Text style={{fontSize:24, textAlign:'center'}}>{value}</Text>
                <Text style={{fontSize:18, textAlign:'center'}}>{unit}</Text>
            </View>
        </View>
    )
}