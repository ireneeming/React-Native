import React from 'react';
import { Image, Dimensions } from 'react-native';

const WIDTH = Dimensions.get("screen").width;
const SlideImg = (props) => {
    return <Image
        style={{
            width: WIDTH,
            height: WIDTH
        }}
        source={{ uri: props.img }}
    />
}


export default SlideImg;