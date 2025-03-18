import { StyleSheet, Text, View ,Button, Alert} from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { useAuth } from '../../context/AuthContext'
import { supabase } from '../../lib/superbase'


const Home = () => {
    const {user,setAuth} =useAuth();
    console.log('user: ', user);
    const onLogout = async () => {
        // setAuth(null);
       const {error} = await supabase.auth.signOut();
       if(error)
       {
        Alert.alert('Sign out', "Error signing out!");
       }
    }
  return (
    <ScreenWrapper>
      <Button title="Logout" onPress={onLogout} />
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({})