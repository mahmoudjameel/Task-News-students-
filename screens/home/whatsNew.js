import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Linking
} from "react-native";

export default function WhatsNew({ navigation }) {
  const [list, setList] = useState([
    { id: 1, title: "", source: require("../../assets/Inwh.png"), url: "https://investmadinah.sa/" },
    { id: 2, title: "", source: require("../../assets/ershadwh.png"), url: "https://ershad.mcci.org.sa/" },
    { id: 3, title: "", source: require("../../assets/wxpertswh.png"), url: "https://experts.mcci.org.sa/Ar/Default" },
    { id: 4, title: "", source: require("../../assets/sapportwh.png"), url: "https://mcci.org.sa/home/RequestBCS" },
    { id: 5, title: "", source: require("../../assets/medmaewh.png"), url: "https://medmarket.sa/Home/store" },
    { id: 6, title: "", source: require("../../assets/localwh.png"), url: "https://madinahtawteen.org/" }
  ]);

  const handleImagePress = (url) => {
    Linking.openURL(url);
  };

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
          <Text> </Text>
        </View>
        <View >
          <Text  style={{fontWeight:'bold', color:'#12355a', fontSize:15}}>خدمات الغرفة</Text>
        </View>
       
      </View>

      {/* scroll */}
      <View style={{ backgroundColor: "#fff", margin: 0 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {list.map(item => (
            <View style={styles.box} key={item.id}>
              <TouchableOpacity onPress={() => handleImagePress(item.url)}>
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
    backgroundColor: "#fff",
    alignItems:'flex-start'
  },
  box: {
    marginLeft: 15,
    alignItems: "center",
    alignContent: "center"
  },
  thumb: {
    width: 110,
    height: 120,
    borderRadius:5,
    overflow: "hidden",
  },
  text: {
    color: "#fff",
    marginTop: 80,
    textAlign: "center"
  }
});