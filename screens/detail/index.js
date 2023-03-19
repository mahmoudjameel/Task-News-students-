import React, { Dimensions } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

import Header from "./header";

export default function Detail(props) {
  return (
    <View style={styles.container}>
      <Header {...props} />

      {/* Add Wishlit - Cart */}
      <View
        style={{
          zIndex: 1,
          position: "absolute",
          // backgroundColor: (0, 0, 0, 10),
          width: "100%",
          marginTop: 500,
          flexDirection: "row",
          justifyContent: "center"
          // paddingTop: 10,
          // paddingBottom: 70
        }}
      >

      </View>

      <View style={{ zIndex: 0 }}>
        <ScrollView>
          {/* cut */}
          <View>
            <Image
              style={{ width: "100%", height: 300 }}
              source={require("../../assets/Detail/01.png")}
              alt="product cut"
              resizeMode="cover"
            />
          </View>

          {/* title + fit + $ */}
          <View
            style={{
              flexDirection: "row",
              justifyContent:'center',
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#ecf0f1"
            }}
          >
            {/* left */}
            <View >
              <View  >
                <Text style={{ fontSize: 18 }}>عنوان الخبر</Text>
              </View>
             
            </View>

           
          </View>

       
            

          {/* Fit details */}
          <View style={{ padding: 5, justifyContent:'center' , alignContent:'center', alignItems:'center'}}>
            <View>
              <Text style={{ fontSize: 18, color: "gray" }}>تفاصيل الخبر</Text>
            </View>
            <View style={{paddingTop:10}}>
              <Text>sfdsfdaljf;afljaldjalgjaklgjaffffffffffffdjfshdfhbsdbfdsbbfdshhsfdhfdshjfsdlfja lfjasdj</Text>
              <Text>sfdsfdaljf;afljaldjalgjaklgja lfjadsjfjsdjfjsdjfdsjsdlfjasdj</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    marginBottom: 50
    // backgroundColor: "yellow"
  },
  sizeBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 5,
    margin: 5
  }
});
