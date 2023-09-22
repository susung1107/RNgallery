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
