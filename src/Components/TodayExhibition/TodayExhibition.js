import React from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import { data } from './data';
import SlideImg from './MenuItem';



export default function TodayExhibition() {
  return (
    <View>
      <Text>이미지 가로슬라이드 연습 </Text>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}  //한 페이지씩 넘어가기
      >

        {data.map((element) => {
          return <SlideImg img={element.img} />

        })}

      </ScrollView>

    </View >
  );
}
