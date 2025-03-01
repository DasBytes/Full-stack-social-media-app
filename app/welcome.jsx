import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import { wp } from '../helpers/common';
import { StatusBar } from 'expo-status-bar';

const welcome = () => {
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Welcome image */}
        <Image style={styles.welcomeImage} source={require('../assets/images/welcome.png')} />
      </View>
    </ScreenWrapper>
  );
};

export default welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingHorizontal: wp(4),
  },
});
