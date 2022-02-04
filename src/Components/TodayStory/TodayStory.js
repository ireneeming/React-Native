import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import MenuItem from './MenuItem';
import { productData } from './data';
export default function TodayStory() {
  return (
    <View style={styles.outFrame}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>오늘의 스토리</Text>
      <ScrollView
        contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
      >

        {productData.map((element) => {
          return <MenuItem img={element.img} name={element.name} />
        })}



      </ScrollView>

    </View >
  );
}
const styles = StyleSheet.create({

  outFrame: {
    borderTopWidth: 8,
    borderBottomWidth: 8,
    borderColor: '#eee',
    paddingLeft: 24,
    paddingVertical: 24

  },

});