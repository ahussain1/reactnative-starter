import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
        <View>
          <Text style={styles.textStyle}>Arif Hussain</Text>
          <Button
              onPress={() => navigation.navigate('Components')}
              title="Go to the components demo"
          />
          <Button
            title="Go to list demo"
            onPress={() => navigation.navigate('List')}
            />
          <Button
            title="Image Screen"
            onPress={() => navigation.navigate('Image')}
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
