import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons , Octicons} from "@expo/vector-icons";

export default function Header({ navigation }) {
  function handlePress() {
    Alert.alert(
      'Notification',
      'You have a new notification!',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: true }
    );
  }
  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity onPress={handlePress} >
        
          <Ionicons name="ios-notifications-outline" size={30} color="#2D2D2D" />

        </TouchableOpacity>
        <View
            style={{
              backgroundColor: "yellow",
              borderRadius: 90,
              width: 15,
              height: 15,
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: 0,
              left: 10,
              borderColor: "white",
              borderWidth: 1
            }}
          >
            <View>
              <Text style={{ fontSize: 7, textAlign: "center" }}>12</Text>
            </View>
          </View>
      </View>
      <View style={{ marginLeft: 20 }}>
        <TouchableOpacity>
          <Ionicons name="ios-search" size={30} color="#2D2D2D" />
        </TouchableOpacity>
      </View>
      <View style={{ marginLeft: 20 }}>
        <TouchableOpacity>
        <Octicons name="diff-added" size={28} color="#2D2D2D" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, paddingLeft:120 }}>
        <Text style={{ fontSize: 18 }}>Home</Text>
      </View>
    

      <View style={{ width: 20 , marginLeft:20}}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="ios-menu" size={30} color="#2D2D2D" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    padding: 15,
    flexDirection: "row",
    paddingTop:30
  }
});
