import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import MenuItem from './MenuItem';
import { data } from './data';
export default function LogoCategory() {
  console.log(data);
  return (
    <View style={{}}>

      <View style={{
        alignItems: 'center',
        marginTop: 40,
        borderBottomWidth: 1,
        borderColor: '#eee',
        paddingVertical: 20
      }}>
        <Image
          style={{
            width: 100,
            height: 30,

          }} source={require('../../../images/logo.jpg')} />
      </View>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}

        style={{
          paddingVertical: 12,
          borderBottomWidth: 1,
          borderColor: '#eee'
        }}
      >
        {/* <Text style={styles.menuText}>스토어홈</Text>
        <Text style={styles.menuText}>신혼가구</Text>
        <Text style={styles.menuText}>베스트</Text>
        <Text style={styles.menuText}>오늘의딜</Text>
        <Text style={styles.menuText}>봄이불 추천</Text>
        <Text style={styles.menuText}>삼성 대축제</Text>
        <Text style={styles.menuText}>소파 초특가</Text>
        <Text style={styles.menuText}>요즘 트렌드</Text>
        <Text style={styles.menuText}>기획전</Text> */}

        {/* <MenuItem menu='스토어홈' />
        <MenuItem menu='신혼가구' />
        <MenuItem menu='베스트' />
        <MenuItem menu='오늘의딜' />
        <MenuItem menu='봄이불 추천' />
        <MenuItem menu='삼성 대축제' />
        <MenuItem menu='소파 초특가' />
        <MenuItem menu='요즘 트렌드' />
        <MenuItem menu='기획전' /> */}

        {data.map((element) => {

          return <MenuItem menu={element} />
        })}

      </ScrollView>

    </View>
  );
}
