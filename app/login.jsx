import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import Input from '../components/input'
import Icon from '../assets/icons'

const Login = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
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
          <Input icon={<Icon name="mail" size={26} strokeWidth={1.6}/>}
            placeholder ='Enter your Email'
            onChangeText={value=>{}}
          />


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
