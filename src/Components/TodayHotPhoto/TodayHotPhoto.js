import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

let Child = (props) => {

  return <Text style={{ fontSize: props.size }}>{props.name}</Text>
}
export default function TodayHotPhoto() {


  const [color, setColor] = useState('red');
  const [size, setSize] = useState(15);

  let handleName = () => {
    setColor('blue');


  }//함수 정의


  const changeSize = () => {
    console.log('잘연결ㄷ굄?');
    setSize(30);

  }

  return (
    <View>
      <Text>TodayHotPhoto</Text>



      <TouchableOpacity
        activeOpacity={0.5}
        onPress={handleName}
        style={{

          height: 20,
          borderWidth: 1,
          borderColor: color

        }}>
        <Child name="터쳐블오퍼씨티연습" />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={changeSize}
        style={{

          height: 20,
          borderWidth: 1,
          borderColor: color,
          fontSize: size
        }}>

        <Child name="호잉" size={size} />
      </TouchableOpacity>
    </View>
  );
}
