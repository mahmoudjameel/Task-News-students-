import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert, Image } from "react-native";
import { Ionicons , Octicons} from "@expo/vector-icons";

export default function Header({ navigation }) {
  function handlePress() {
    Alert.alert(
      'الأشعارات',
      'لا يوجد اشعارات!',
      [{ text: 'حسناً', onPress: () => console.log('OK Pressed') }],
      { cancelable: true }
    );
  }
  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity onPress={handlePress} >
        
          <Ionicons name="ios-notifications-outline" size={30} color="#12355a" />

        </TouchableOpacity>
        <View
            style={{
              backgroundColor: "#12355a",
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
              <Text style={{ fontSize: 7, textAlign: "center", color:"white" }}>12</Text>
            </View>
          </View>
      </View>
      <View style={{ flex: 1, paddingLeft:90 }}>
        <Image 
          source={require('../../assets/McciLogo.png')}
          style={{ width: 120, height: 40, marginRight: 35}}
        />
      </View>
    

      <View style={{ width: 20 , marginLeft:20}}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="ios-menu" size={30} color="#12355a" />
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
