import React from "react";
import {View, Text } from 'react-native';
import {StyleSheet} from 'react-native';


const Exercise3E = () => {
    return (
        <View style={styles.parent}>
            <Text style={[styles.child, {backgroundColor: 'powderblue' }]}>Child One</Text>
            <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>Child Two</Text>
            <Text style={[styles.child, {backgroundColor: 'steelblue'}]}>Child Three</Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    parent : {
        flexDirection:'column',
        flex: 1,
        // justifyContent:'flex-start',
        // justifyContent:'space-between',
        // justifyContent:'flex-end',
        justifyContent:'space-evenly',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5
    },
    child: {
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    },
});

export default Exercise3E;

