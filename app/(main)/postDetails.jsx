import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { fetchPostDetails } from "../../services/postService";
import { hp } from "../../helpers/common";
import { theme } from "../../constants/theme";

const PostDetails = () => {
  const { postId } = useLocalSearchParams();
  console.log("got post Id: ", postId);

  const [post, setPost] = useState[null];

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
    <View>
      <Text>PostDetails</Text>
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({

  sendIcon: {
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
  
});
