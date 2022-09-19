import { View, StyleSheet, Text} from "react-native";
import { useState } from "react";
import Led from "./Led";

export default function Painel(){

    const changeColor = (id) => {

        if(id == 1)
            setColor(['#FF3131', '#4e4e4e', '#4e4e4e'])

        else if(id == 2)
            setColor(['#4e4e4e', '#ffff00', '#4e4e4e'])

        else if(id == 3)
            setColor(['#4e4e4e', '#4e4e4e', '#39FF14'])
    }

    const [colors, setColor] = useState(['#4e4e4e', '#4e4e4e', '#4e4e4e'])
    return(
        <View style={styles.container}>
            <Led
                onPress = {() => {
                    changeColor(1)
                }}
                color = {colors[0]}
            />
            <Led
                 onPress = {() => {
                    changeColor(2)
                }}
                color = {colors[1]}
            />
            <Led
                 onPress = {() => {
                    changeColor(3)
                }}

                color = {colors[2]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 100,
        height: 200,
        backgroundColor: '#292929',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: 40,

    }
})