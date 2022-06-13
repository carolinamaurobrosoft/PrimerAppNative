import React, {useState, useEffect} from "react";
import {Text, View, StyleSheet} from 'react-native';
import RunInfoNumeric from './components/run-info-numerics';

const styles = StyleSheet.create({
    infoWrapper: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        flexDirection: 'row',
        flex: 1
    }
})

function GetStarted () {

    const [distance, setDistance] = useState(0)
    const [speed, setSpeed] = useState(0)
    const [direction, setDirection] = useState('N')

    
    
    useEffect(() => { 
        const intervalId = setInterval(() => {
            setDistance((Math.random() * 100).toFixed(2));
            setSpeed((Math.random() * 15).toFixed(2));
            setDirection(direction === 'N' ? 'NW' : 'N');
        }, 1000);
    
        return () => clearInterval(intervalId);
    }, [])

    //useEffect (() => () => clearInterval( intervalId))

    return(
        <View style={{flex: 1}}>
            <Text style={{flex: 1,backgroundColor: 'red'}}>MAPVIEW</Text>
            <View style={styles.infoWrapper}>
                <RunInfoNumeric 
                    title="Distance"
                    value={distance}
                    unit="km"
                />
                <RunInfoNumeric
                    title="Speed"
                    value={speed}
                    unit="km/h"
                />
                <RunInfoNumeric 
                    title="Direction"
                    value={direction}
                    unit=""
                />
            </View>
        </View>

    );
}

export default GetStarted;

Math.random() * 100