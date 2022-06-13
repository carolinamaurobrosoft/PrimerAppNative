import React from 'react';
import { Text, View, StyleSheet } from 'react-native'; 


const Geretting = ({name}) => {
	return <Text> Hello {name} </Text>;
}

const AvancedHelloWorld = () => {
	return (
		<View>
			<Geretting name = "Alice" />
			<Geretting name = "Bob" />
		</View>
	);
}

export default AvancedHelloWorld;