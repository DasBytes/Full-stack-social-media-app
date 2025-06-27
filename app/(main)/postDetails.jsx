import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const PostDetails = () => {
  const { postId } = useLocalSearchParams();
  console.log("got post Id: ", postId);

  return (
    <View>
      <Text>PostDetails</Text>
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({});
