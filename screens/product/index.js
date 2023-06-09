import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Header from "./header";
import List from "./list";

export default function Product(props) {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <List {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "gray",
    marginTop: 24
    // marginHorizontal: 24
  }
});
