import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
        <View>
          <Text style={styles.textStyle}>Arif Hussain</Text>
          <Button
              onPress={() => props.navigation.navigate('Components')}
              title="Go to the components demo"
          />
          <Button
            title="Go to list demo"
            onPress={() => props.navigation.navigate('List')}
            />
        </View>
      );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default HomeScreen;
