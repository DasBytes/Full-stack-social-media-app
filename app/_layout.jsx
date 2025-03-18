import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, useRouter } from 'expo-router'
import { AuthProvider, useAuth } from '../context/AuthContext'
import { supabase } from '../lib/superbase'


const _layout = () => {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  )
}

const MainLayout = () => {
  const {setAuth} =useAuth();
  const router = useRouter();

   useEffect(()=> {
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log('session user: ', session?.user?.id);

      if(session){
       setAuth(session?.user);
       updateUserData(session?.user);
       router.replace('/home');
      }
      else{
        setAuth(null);
        router.replace('/welcome');
      }
    })
   },[]);

   const updateUserData = async (user)=> {
    
   }
  return (
       <Stack
       screenOptions={{
        headerShown:false
       }}
       />
  )
}

export default _layout