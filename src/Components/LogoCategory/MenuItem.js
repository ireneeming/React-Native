import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const MenuItem = (props) => {
    return (
        <View >
            <Text style={styles.menuText}>{props.menu}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    menuText: {
        paddingTop: 4,
        paddingHorizontal: 2,
        paddingBottom: 3,
        marginHorizontal: 3,
        marginVertical: 2,
        fontWeight: 'bold'
    },

});
export default MenuItem;