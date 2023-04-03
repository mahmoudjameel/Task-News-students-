import React, { useState } from "react";
import {
StyleSheet,
View,
Text,
Image,
ScrollView,
FlatList,
} from "react-native";

export default function Banner() {
const [currentPage, setCurrentPage] = useState(0);
const images = [
  { id: "1", image: require("../../assets/home-banner.png") },
  { id: "2", image: require("../../assets/home-banner2.png") },
  { id: "3", image: require("../../assets/home-banner3.png") },
  { id: "4", image: require("../../assets/home-banner4.png") },
];

const handlePageChange = (event) => {
// Calculate the current page index
const pageIndex = Math.round(
event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
);
// Update the current page
setCurrentPage(pageIndex);
};

return (
<View style={styles.container}>
<ScrollView
     style={styles.scrollView}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     pagingEnabled={true}
     onScroll={handlePageChange}
   >
{images.map((item) => (
<Image
         key={item.id}
         source={item.image}
         resizeMode='cover'
         style={styles.image}
       />
))}
</ScrollView>
<View style={{flex:1, alignSelf:'center'}}>


<FlatList
data={images}
horizontal={true}
showsHorizontalScrollIndicator={false}
keyExtractor={(item) => item.id}
renderItem={({ item, index }) => (
<View style={index === currentPage ? styles.dotActive : styles.dot}>
</View>
)}
/>
</View>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "white",
},
scrollView: {
  margin: 6,
  borderRadius: 10,
},
image: {
width: 400,
height: 250,
},
dot: {
backgroundColor: "#e1e7d8",
borderRadius: 50,
width: 10,
height: 10,
marginHorizontal: 5,
alignItems: "center",
justifyContent: "center",
},
dotActive: {
backgroundColor: "#6c873e",
borderRadius: 50,
width: 10,
height: 10,
marginHorizontal: 5,
alignItems: "center",
justifyContent: "center",
},
dotText: {
color: "white",
fontSize: 12,
},
});