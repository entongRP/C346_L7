import React from "react";
import {View, Text } from 'react-native';
import {StyleSheet} from 'react-native';


const Exercise3D = () => {
    return (
        <View style={styles.parent}>
            <Text style={[styles.child, {backgroundColor: 'powderblue', flex: 1}]}>Child One</Text>
            <Text style={[styles.child, {backgroundColor: 'skyblue', flex: 2}]}>Child Two</Text>
            <Text style={[styles.child, {backgroundColor: 'steelblue', flex: 3}]}>Child Three</Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    parent : {
        flexDirection:'row',
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

export default Exercise3D;

