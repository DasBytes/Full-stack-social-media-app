import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'
import { hp } from '../helpers/common'

const Button = ({
    buttonStyle,
    textStyle,
    title='',
    onPress=()=>{},
    loading= false,
    hasShadow= true,
}) => {
    const shadowStyle = {

    }
  return (
    <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
     backgroundColor: theme.colors.primary,
     height: hp(6.6),
     justifyContent: 'center',
     alignItems: 'center',
     borderCurve: 'continuous',
     borderRadius: theme.radius.xl,
    }
})