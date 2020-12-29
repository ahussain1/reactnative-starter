import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from './ColorCounter';

const COLOR_INCREMENT = 20;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }

  switch( action.colorToChange) {
    case 'red':
      // never going to change state directly
      return {...state, red: state.red + action.amount}
    case 'green':
      return {...state, green: state.green + action.amount}
    case 'blue':
      return {...state, blue: state.blue + action.amount}
    default:
      return state;
  }
};

const SquaresScreen = () => {

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  console.log(state)

  return (
    <View>
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Red"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Green"
      />

      <View
        style={{
          height: 150,
        width: 150,
        backgroundColor: `rgb(${red},${green},${blue})`
        }}
        />
      </View>
  );
};

const styles = StyleSheet.create({});

export default SquaresScreen;