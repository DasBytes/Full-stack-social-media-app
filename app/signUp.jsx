import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native'
import React, { useState, useRef } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import  Button  from '../components/Button';
import Input from '../components/Input';
import Icon from '../assets/icons';
import { supabase } from '../lib/superbase'


const SignUp = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const nameRef= useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false)

  const onSubmit = async () => {
    if(!emailRef.current || !passwordRef.current)
    {
      Alert.alert('Sign Up',"Please fill all the fields");
      return;
    }
    let name = nameRef.current.trim();
    let email = emailRef.current.trim();
    let password = passwordRef.current.trim();

    setLoading(true);

    const { data: {session}, error} = await supabase.auth.signUp({
      email,
      password,
      options : {
        data : {
          name
        }
      }
    })
    setLoading(false);
    // console.log('session',session);
    // console.log('error',error);
   if(error)
   {
    Alert.alert('Sign Up', error.message);
   }
  }

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton />

        {/* Welcome */}
        <View>
          <Text style={styles.WelcomeText}>Let's</Text>
          <Text style={styles.WelcomeText}>Get Started </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
            Please fill the details to create an account
          </Text>

          <Input
            icon={<Icon name="user" size={26} strokeWidth={1.6} />}
            placeholder='Enter your name'
            onChangeText={value => nameRef.current = value}
          />
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


          {/* Button */}
          <Button title={'Sign up'} loading={loading} onPress={onSubmit} />

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Already have an account!
            </Text>
            <Pressable onPress={()=>  router.push('login')}>
              <Text style={[styles.footerText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semiBold }]}>Login</Text>
            </Pressable>
          </View>

        </View>
      </View>
    </ScreenWrapper>
  )
}

export default SignUp

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
