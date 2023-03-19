import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";

export default function List({ navigation }) {
  const [list, setList] = useState([
    {
      id: 1,
      title: "Test",
          image: require("../../assets/wish-1.png")
    },
    {
      id: 2,
      title: "Test",
          image: require("../../assets/wish-2.png")
    },
    {
      id: 3,
      title: "Test",
          image: require("../../assets/wish-3.png")
    },
    {
      id: 4,
      title: "Test",
          image: require("../../assets/wish-4.png")
    },
    {
      id: 5,
      title: "Test",
      
      image: require("../../assets/wish-5.png")
    },
    {
      id: 6,
      title: "Test",
      
      image: require("../../assets/wish-6.png")
    },
    {
      id: 7,
      title: "Test",
      
      image: require("../../assets/wish-1.png")
    }
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={list}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: 3, marginBottom: 20 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail", item)}
            >
              <Image source={item.image} />
            </TouchableOpacity>
           
            <Text style={{textAlign:'center'}}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "pink"
    paddingHorizontal: 24
  }
});
