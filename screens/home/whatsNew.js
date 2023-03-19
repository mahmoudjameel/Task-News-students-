import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from "react-native";

export default function WhatsNew({ navigation }) {
  const [list, setList] = useState([
    { id: 1, title: "اقتصادية", source: require("../../assets/home-1.png") },
    { id: 2, title: "فنية", source: require("../../assets/home-2.png") },
    { id: 3, title: "سياحية", source: require("../../assets/home-3.png") },
    { id: 4, title: "سياسية", source: require("../../assets/home-1.png") },
    { id: 5, title: "دولية", source: require("../../assets/home-2.png") }
  ]);
  return (
    <View style={styles.container}>
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          marginVertical: 15,
          marginHorizontal: 20
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{fontWeight:'bold'}}> </Text>
        </View>
        <View >
          <Text > الفئات</Text>
        </View>
       
      </View>

      {/* scroll */}
      <View style={{ backgroundColor: "#fff", margin: 0 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
  {list.map(item => (
    <View style={styles.box} key={item.id}>
      <TouchableOpacity>
        <ImageBackground
          source={item.source}
          resizeMode="cover"
          style={styles.thumb}
        />
        <Text style={{textAlign:'center'}}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  ))}
</ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: "#fff"
  },
  box: {
    marginLeft: 15,
    alignItems: "center",
    alignContent: "center"
  },
  thumb: {
    width: 110,
    height: 120
  },
  text: {
    color: "#fff",
    marginTop: 80,
    textAlign: "center"
  }
});
