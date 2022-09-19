import { View, StyleSheet, TouchableOpacity} from "react-native";
import React, {useState} from 'react';

export default function Led(props){
 
    return(
        <TouchableOpacity
            onPress={props.onPress}
        >
            <View 
                style = {[styles.led,
                    {
                        backgroundColor: props.color
                    }
                ]}>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    led:{
        width: 50,
        height: 50,
        borderRadius: '100%'
    }
})