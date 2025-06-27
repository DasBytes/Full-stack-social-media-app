import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchPostDetails } from "../../services/postService";
import { hp, wp } from "../../helpers/common";
import { theme } from "../../constants/theme";
import { ScrollView } from "react-native-web";
import { useAuth } from "../../context/AuthContext";

const PostDetails = () => {
  const { postId } = useLocalSearchParams();
  console.log("got post Id: ", postId);

  const [post, setPost] = useState[null];
  const {user} = useAuth();
  const router = useRouter();

  useState(()=> {
    getPostDetails();
  },[

  ]);

  const getPostDetails = async() => {
    // fetch post details heres
    let res = await fetchPostDetails(postId);
    if(res.success) setPost(res.data);

    
  }

  return (
    <View style= {styles.container}>
      <ScrollView showsVerticalScrollIndicator= {false} contentContainerStyle={styles.list}>
      <postcard
      item = {post}
      currentUser = {user}
      router= {router}
      hasShadow = {false}
      />

      </ScrollView>
      
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({

  sendIcon: {
       alignItems:'center',
   justifyContent: 'center',
   borderWidth: 0.8,
    borderColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    borderCurve: 'continuous',
    height: hp(5.8),
    width: hp(5.8),

  },

  center : {
   flex: 1,
   alignItems:'center',
   justifyContent: 'center',
  },
  notFound : {
    fontSize: hp(2.5),
    color: theme.colors.text,
    fontWeight: theme.fonts.medium,

  },

  loading : {
    height: hp(5.8),
    width: hp(5.8),
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{scale: 1.3}]
  },
  container : {
       flex: 1,
       backgroundColor: 'white',
       paddingVertical: wp(7),
  },
  inputContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  list : {
    paddingHorizontal: wp(4)
  }
});
