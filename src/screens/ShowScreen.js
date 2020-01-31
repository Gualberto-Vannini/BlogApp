import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  );

  return (
    <View style={styles.mainView}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  mainView: {
    borderWidth: 1,
    borderColor: "black",
    marginTop: 50,
    marginHorizontal: 15,
    height: 300
  },
  title: {
    marginVertical: 20,
    marginLeft: 10,
    fontSize: 20,
    textDecorationLine: "underline",
    fontWeight: "bold"
  },
  content: {
    marginVertical: 20,
    marginLeft: 10,
    fontSize: 16
  }
});

export default ShowScreen;
