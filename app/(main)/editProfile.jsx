import { ScrollView, StyleSheet, Text, View ,Image, Pressable} from 'react-native'
import React, { useEffect } from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { hp, wp } from '../../helpers/common'
import { theme } from '../../constants/theme'
import Header from '../../components/Header'
import { useAuth } from '../../context/AuthContext'
import { getUserImageSrc } from '../../services/imageService'
import Icon from '../../assets/icons'
import { useState } from 'react'
import Input from '../../components/input'


const EditProfile = () => {
    const {user: currentUser} = useAuth();

   const [user, setUser] = useState ({
    name : '',
    phoneNumber : '',
    image : null,
    bio: '',
    address: ''

   });
   useEffect (()=> {
    if(currentUser){
        setUser({
            name : currentUser.name || '',
            phoneNumber : currentUser.phoneNumber || '',
            image: currentUser.image || null,
            address: currentUser.address || '',
            bio : currentUser.bio || '',
        });

    }
   },[currentUser])
    const onPickImage = async() => {

    }
    
    let imageSource = getUserImageSrc(user.image);
  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
            <Header title="Edit Profile" />
            {/* form */}
            <View style={styles.form}>
                <View style={styles.avatarContainer}>
                   <Image source={imageSource} style={styles.avatar} /> 
                   <Pressable style={styles.cameraIcon}  onPress={onPickImage}>
                    <Icon name="camera" size= {20} strokewidth={2.5} />
                   </Pressable>
                </View>
                <Text style={{fontSize: hp(1.5), color: theme.colors.text}}>
                    please fill your profile details
                </Text>

                <Input 
                icon = {<Icon name="user" /> }
                placeholder = 'Enter your name'
                value ={user.name}
                onChangeText = {value=> setUser({...user, name: value})}
                />
            </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp(4),
    },
    avatarContainer : {
        height: hp(14),
        width: hp(14),
        alignSelf: 'center'
      },
      avatar : {
        width: '100%',
        height: '100%',
        borderRadius: theme.radius.xxl*1.8,
        borderCurve: 'continuous',
        borderWidth: 1,
        borderColor: theme.colors.darkLight,



      },
      cameraIcon : {
        position: 'absolute',
        bottom: 0,
        right: -10,
        padding: 8,
      },
      form : {
        gap: 18,
        marginTop: 20,
      },
      input: {
        flexDirection: 'row',
        borderWidth: 0.4,
        borderColor: theme.colors.text,
        borderRadius: theme.radius.xxl,
        borderCurve: 'continuous',
        padding: 17,
        paddingHorizontal: 20,
        gap: 15
      },
      bio : {
        flexDirection: 'row',
        height: hp(15),
        alignItems: 'flex-start',
        paddingVertical: 15
      }

})