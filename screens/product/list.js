import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from "react-native";

export default function List({ navigation }) {
  const [list, setList] = useState([
    {
      id: 1,
      title: "ملتقى المدينة المنورة لريادة الأعمال",
      image: require("../../assets/News.jpg")
    },
    {
      id: 2,
      title: "ملتقى المدينة المنورة لريادة الأعمال",
      image: require("../../assets/News.jpg")
    },
    {
      id: 3,
      title: "ملتقى المدينة المنورة لريادة الأعمال",
      image: require("../../assets/News.jpg")
    },
    {
      id: 4,
      title: "ملتقى المدينة المنورة لريادة الأعمال",
      image: require("../../assets/News.jpg")
    },
    {
      id: 4,
      title: "ملتقى المدينة المنورة لريادة الأعمال",
      image: require("../../assets/News.jpg")
    },
    {
      id: 4,
      title: "ملتقى المدينة المنورة لريادة الأعمال",
      image: require("../../assets/News.jpg")
    },
    {
      id: 4,
      title: "ملتقى المدينة المنورة لريادة الأعمال",
      image: require("../../assets/News.jpg")
    }
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        data={list}
        numColumns={1}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate("Detail", {title: item.title, image: item.image})}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff"
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center"
  }
});