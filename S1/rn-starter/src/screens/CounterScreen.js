import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const reducer = (state, action) => {
    // state === { count: number }
    // action === { type: 'increment' || 'decrement', payload: 1 }
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload };
            // count = number, count: -||- we have only count in state but we might add more to our state object
            // future proofing our code	
        case 'decrement':
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
}


const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0});

    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({ type: 'increment', payload: 1 });
            }} />
            <Button title="Decrease" onPress={() => {
                dispatch({ type: 'decrement', payload: 1 });
            }} />
            <Text>Current Count: {state.count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    textStyle2: {
        fontSize: 20
    }
});

export default CounterScreen;
