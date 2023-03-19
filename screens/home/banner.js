import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from "react-native";

export default function Banner({ navigation }) {
  return (
    <ScrollView  
    style={{margin:20, borderRadius:30}}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}>


<Image
        
        source={require("../../assets/home-banner.png")}
        resizeMode="cover"
      >
   
      </Image>
      <Image
        
        source={require("../../assets/home-banner.png")}
        resizeMode="cover"
      >
    
      </Image>
      <Image
        
        source={require("../../assets/home-banner.png")}
        resizeMode="cover"
      >
    
      </Image>
  </ScrollView>
  );
}
