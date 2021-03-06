import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: '20'},
        {name: 'Friend #2', age: '24'},
        {name: 'Friend #3', age: '16'},
        {name: 'Friend #4', age: '20'},
        {name: 'Friend #5', age: '29'},
        {name: 'Friend #6', age: '24'},
        {name: 'Friend #7', age: '27'},
        {name: 'Friend #8', age: '15'},
        {name: 'Friend #9', age: '23'}
    ]

    return (
        <FlatList
            style={styles.border}
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
    },
    border: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginLeft: 5,
        marginRight: 5
    }
});

export default ListScreen;