// 해야할 것
// camera roll 설치, 권한 설정 코드 작성
// https://www.npmjs.com/package/@react-native-camera-roll/camera-roll
//
// 카메라롤 기능 살펴보기

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// screen
import {Home} from './src/screen';

const App = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
