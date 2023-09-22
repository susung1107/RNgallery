import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Platform, Image} from 'react-native';

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
  const [selectedImage, setSelectedImage] = useState(null);

  // 선택 사진 또는 촬영된 사진 정보
  const onPickImage = (res: any) => {
    if (res.didCancel || !res) {
      return;
    }
    let imageUri = res.uri || res.assets?.[0]?.uri;
    setSelectedImage(imageUri);
  };

  const onLaunchImageLibrary = () => {
    launchImageLibrary(imagePickerOption as any, onPickImage);
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.top]}>
        {selectedImage && (
          <Image style={[styles.image]} source={{uri: selectedImage}} />
        )}
      </View>
      <View style={[styles.bottom]}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={onLaunchImageLibrary}>
          <Text style={[styles.buttonText]}>사진 선택</Text>
        </TouchableOpacity>
        {selectedImage && (
          <>
            <View style={[styles.ninja]} />
            <TouchableOpacity style={[styles.button]}>
              <Text style={[styles.buttonText]}>다운로드</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default Home;
