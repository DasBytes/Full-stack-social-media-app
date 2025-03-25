import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import { hp,wp } from '../helpers/common';
import { StatusBar } from 'expo-status-bar';
import {theme} from '../constants/theme'
import Button from '../components/Button';
import { useRouter } from 'expo-router';

const welcome = () => {
  const router= useRouter();
  return (

    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* Welcome image */}
        <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/welcome.png')} />
      {/*title*/}
      <View style={{gap:20}}>
        <Text style={styles.title}>LinkUp!</Text>
        <Text style={styles.punchline}>
          Where every thought finds a home and every image tells a story.
        </Text>
        
      </View>
         {/* footer */}
         <View style={styles.footer}>
         <Button 
  title="Getting started"
  buttonStyle={{ marginHorizontal: wp(3) }}
  onPress={() => router.push('signUp')}
/>

         <View style={styles.bottomTextContainer}>
          <Text style={styles.loginText}>
  Already have an account!
          </Text>
            <Pressable onPress={()=> router.push('login')}>
              <Text style={[styles.loginText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.semiBold}]}>
             Login
              </Text>
            </Pressable>
         </View>
            
         </View>
         <Text></Text>

         {/* Bottom Texts - Design Credit & Copyright */}
         <View style={styles.bottomSection}>
          <Text style={styles.footerText}>
            Designed & Developed by{' '}
            <Text style={styles.highlightedText}>Pranta Das, Aniruddha Dev Nath, Abrar Jawad,</Text> and{' '}
            <Text style={styles.highlightedText}>Anitya Barua.</Text>
          </Text>
          <Text></Text>
          <Text style={styles.copyrightText}>© 2025 LinkUp. All rights reserved.</Text>
        </View>
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
  welcomeImage : {
    height: hp(30),
    width: wp(100),
    alignSelf: 'center',
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(4),
    textAlign:'center',
    fontWeight: theme.fonts.extraBold
  },
  punchline: {
    textAlign: 'center',
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.text
  },
  footer : {
    gap: 30,
    width: '100%'
  },
  bottomTextContainer : {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  loginText: {
    textAlign:'center',
    color: theme.colors.text,
    fontSize: hp(1.6)
  },
  footerText: {
    textAlign: 'center',
    fontSize: hp(1.5),
    color: '#555',
    marginTop: 20,
  },
  bottomSection: {
    position: 'absolute',
    bottom: hp(3), // Ensure it's at the very bottom
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  highlightedText: {
    fontWeight: 'bold',
    color: theme.colors.primaryDark,
  },
  copyrightText: {
    textAlign: 'center',
    fontSize: hp(1.4),
    color: '#777',
  },
});
