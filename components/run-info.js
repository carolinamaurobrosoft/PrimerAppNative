import React from "react";
import {Text, View} from 'react-native';

function RunInfo ({title, value}) {
    return(
        <View>
            <Text> {title} </Text>
            <Text> {value} </Text>
        </View>
    )
}

export default RunInfo;

