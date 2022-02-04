import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';

const WIDTH = Dimensions.get("screen").width;
const IMGWIDTH = (WIDTH - 72) / 2;
console.log(IMGWIDTH);
const MenuItem = (props) => {

    return (
        <View style={styles.storyFrame}
        >
            <Image style={styles.storyBox}
                source={{ uri: props.img }}
            />
            <Text style={styles.storyText}>{props.name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    storyFrame: {
        alignItems: 'stretch',
        paddingTop: 24
    },
    storyBox: {
        width: IMGWIDTH,
        height: IMGWIDTH,
        backgroundColor: '#eee',
        borderRadius: 8,
        marginRight: 24,



    },

    storyText: {
        width: IMGWIDTH,

        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 5,

    },


});
export default MenuItem;