import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native'
import React, { useState, useRef } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import Button from '../components/Button';
import Input from '../components/Input';
import Icon from '../assets/icons';
import { supabase } from '../lib/superbase'


const Login = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false)

  const onSubmit = async () => {
    if(!emailRef.current || !passwordRef.current)
    {
      Alert.alert('Login',"Please fill all the fields");
      return;
    }
    let email = emailRef.current.trim();
    let password = passwordRef.current.trim();
    setLoading(true);
    const {error} = await supabase.auth.signInWithPassword({
      email,
      password
    });
    setLoading(false);
    console.log('error: ', error);
    if(error){
      Alert.alert('Login',error.message);
    }

  }

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton />

        {/* Welcome */}
        <View>
          <Text style={styles.WelcomeText}>Hey,</Text>
          <Text style={styles.WelcomeText}>Welcome Back</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Please login to continue
          </Text>

          <Input
            icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
            placeholder='Enter your Email'
            onChangeText={value => emailRef.current = value}
          />

          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            placeholder='Enter your Password'
            secureTextEntry
            onChangeText={value => passwordRef.current = value} // ✅ FIXED: should be passwordRef
          />

          <Text style={styles.forgotPassword}>
            Forgot password?
          </Text>

          {/* Button */}
          <Button title={'Login'} loading={loading} onPress={onSubmit} />

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Don't have an account?
            </Text>
            <Pressable onPress={()=>  router.push('signUp')}>
              <Text style={[styles.footerText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semiBold }]}>Sign up</Text>
            </Pressable>
          </View>

        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5)
  },
  WelcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text
  },
  form: {
    gap: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.text,
    borderRadius: theme.radius.sm,
    padding: hp(1.5),
    fontSize: hp(1.8),
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: theme.fonts.medium,
    color: theme.colors.text
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6)
  }
})
