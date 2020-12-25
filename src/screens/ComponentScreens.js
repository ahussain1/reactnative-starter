import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
	const greeting = <Text style={styles.anotherStyle}>Hello to you</Text>;

	return (
		<View>
			<Text style={styles.textStyle}>This is the ComponentScreen</Text>
			{greeting}
		</View>	
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30
	}, 
	anotherStyle: {
		fontSize: 35, 
		color: "#20232a",
		backgroundColor: "#61dafb",
	}
});

export default ComponentScreen;