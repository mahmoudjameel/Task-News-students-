import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

export default function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <View style={{ width: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={30} color="#12355a" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}></View>
 
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "row",
    borderBottomColor: "#ecf0f1",
    borderBottomWidth: 1
  }
});
