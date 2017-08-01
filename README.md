# react-native-activity-indicator
<img src="https://raw.githubusercontent.com/sonaye/react-native-activity-indicator/master/demo.gif" width="400">

Based on [react-native-progress](https://github.com/oblador/react-native-progress#progresscirclesnail).

# Installation
`yarn add react-native-progress react-native-activity-indicator`

# Definition
Same API as [ActivityIndicator](https://facebook.github.io/react-native/docs/activityindicator.html) with two extra customization props `duration` and `thickness`.

```javascript
type activityIndicator = {
  animating?: boolean,               // default = true
  color?: string | Array<string>,    // default = 'gray'
  duration?: number,                 // default = 500
  hidesWhenStopped? boolean,         // default = true
  size?: 'small' | 'large' | number, // default = 'small'
  thickness?: number                 // default = 1
};
```

## Examples
```javascript
import React from 'react';
import { View } from 'react-native';

import ActivityIndicator from 'react-native-activity-indicator';

const Example = () => (
  <View
    style={{
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around'
    }}>
    <ActivityIndicator />
    <ActivityIndicator animating={false} />
    <ActivityIndicator color="#4285f4" />
    <ActivityIndicator color={['#db4437', '#0f9d58', '#4285f4']} />
    <ActivityIndicator duration={1000} />
    <ActivityIndicator size="large" />
    <ActivityIndicator size={24} />
    <ActivityIndicator thickness={3} />
  </View>
);

export default Example;
```
