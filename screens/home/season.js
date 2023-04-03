import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function Season({ navigation }) {
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
        <TouchableOpacity onPress={() => navigation.navigate("Product")}>

        <Text style={{fontWeight:'bold', textDecorationLine: 'underline',}} >جميع الاخبار</Text>
          </TouchableOpacity>

        </View>
        <View>
        <Text style={{fontWeight:'bold', color:'#12355a', fontSize:15}}> الاخبار</Text>
        </View>
      </View>

      {/* content */}
      <View style={{ marginHorizontal: 15 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Product")}>
          <Image
            style={{ width: "100%", borderRadius:5, overflow:"hidden", marginBottom:15 ,}}
            source={require("../../assets/newsHome.png")}
            resizeMode="cover"
          />
          <View style={styles.overlay} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 15,
    backgroundColor: 'rgba(18,53,90,0.4)',
  }
});
