import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';

// styles
import styles from './Home.style';

// package
import {launchImageLibrary} from 'react-native-image-picker';

const imagePickerOption = {
  mediaType: 'photo',
  maxWidth: 768,
  maxHeight: 768,
  includeBase64: Platform.OS === 'android',
};

const Home = () => {
  // 선택 사진 또는 촬영된 사진 정보
  const onPickImage = (res: any) => {
    if (res.didCancel || !res) {
      return;
    }
    console.log('PickImage', res);
  };

  const onLaunchImageLibrary = () => {
    launchImageLibrary(imagePickerOption as any, onPickImage);
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.top]}>
        <Text>Top</Text>
      </View>
      <View style={[styles.bottom]}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={onLaunchImageLibrary}>
          <Text style={[styles.buttonText]}>사진 선택</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
