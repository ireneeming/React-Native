import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

let Child = props => {

  return <Text>{props.name}</Text>
}
export default function CoverImage() {
  return (
    <View>
      <ImageBackground
        style={{
          width: '100%',
          height: 300,
          justifyContent: 'center',
          alignItems: 'flex-start'

        }}
        source={{ uri: 'https://images.unsplash.com/photo-1611596189148-a74728c484ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80' }}>

        <Text style={styles.mainText}>11년 된 판상형 아파트, 내추럴 우드 무드로 새롭게.</Text>
        <TouchableOpacity style={{
          borderWidth: 1,
          borderColor: '#555',
          borderRadius: 6,
          paddingHorizontal: 36,
          paddingVertical: 12,
          marginLeft: 30

        }}>
          <Child style={{
            color: '#555',

          }} name="보러가기"></Child>
        </TouchableOpacity>



      </ImageBackground>





    </View>
  );

}
const styles = StyleSheet.create({
  mainText: {
    fontSize: 27,
    color: '#fff',
    fontWeight: 'bold',
    padding: 30,
    letterSpacing: -0.5,
    textShadowColor: '#888',
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,


  },

});