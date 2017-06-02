import React from 'react';
import { View } from 'react-native';

import { CircleSnail } from 'react-native-progress';

const small = 20;
const large = 36;

const ActivityIndicator = props => {
  const size = props.size === 'small'
    ? small
    : props.size === 'large' ? large : props.size || small;

  return (
    <View
      style={{
        alignSelf: 'center',
        backgroundColor: 'transparent',
        height: size,
        width: size
      }}>
      <CircleSnail
        animating={props.animating !== false}
        color={props.color || 'gray'}
        duration={props.duration || 500}
        hidesWhenStopped={props.hidesWhenStopped || true}
        size={size}
        spinDuration={0}
        thickness={props.thickness || 1}
      />
    </View>
  );
};

export default ActivityIndicator;
