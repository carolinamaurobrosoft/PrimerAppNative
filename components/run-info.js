import React, { useState } from "react";
import {Text, View} from 'react-native';
import sharedStyles from "../shared-styles";


function RunInfo ({title, value}) {  
    return(
        <View style={[sharedStyles.runInfoWrapper, {flex: 1, flexDirection: 'column-reverse'}]}>
            <Text style={[sharedStyles.runInfoTitle]}> {title.toUpperCase()} </Text>
            <Text style={[sharedStyles.runInfoValue]}> {value} </Text>
        </View>
    )
}

export default RunInfo;

