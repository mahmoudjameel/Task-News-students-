import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import Header from "./header";

export default function Detail({ route, navigation, props }) {
  const { title, image } = route.params;
  
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      

      {/* style */}
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
              source={image}
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
                <Text style={{ fontSize: 18 }}>{title}</Text>
              </View>
            </View>
          </View>

          {/* Fit details */}
          <View style={{ padding: 5, justifyContent:'center' , alignContent:'center', alignItems:'center'}}>
            <View>
              {/* <Text style={{ fontSize: 18, color: "gray" }}>تفاصيل الخبر</Text> */}
            </View>
            <View style={{paddingTop:10}}>
              <Text style={{textAlign: 'right', padding:2}}>شاركت غرفة المدينة المنورة يوم الأحد الموافق 2023/03/19م في ملتقى المدينة المنورة لريادة الأعمال الذي تنظمه الهيئة العامة للمنشآت الصغيرة والمتوسطة

                  " منشآت" بالتعاون مع برنامج خدمة ضيوف الرحمن وهيئة تطوير المدينة المنورة في مقر " مركز دعم المنشآت".

                  ويهدف الملتقى إلى إطلاع الفئة المستهدفة على الخطط والاستراتيجيات للمنطقة والتعريف بالفرص الاستثمارية بمنطقة المدينة المنورة، وفتح باب التواصل مابين المشاركين والجهات الداعمة، إلى جانب التعريف ببرامج الدعم الحكومية من خلال تقديم الجهات لخدماتهم وطرق الاستفادة منهم وتمكين المشاركين من موائمة خططهم مع خطط الجهات الحكومية. 

                  كما يستهدف الملتقى مشغلي المواقع التاريخية وملاك المواقع الإثرائية، حملات الحج والعمرة للداخل والخارج، شركات التطوير العقاري للفنادق، الفنادق،أنشطة مشغلي الجولات السياحية،الإرشاد السياحي، قطاع إعاشة الحجاج والمعتمرين. 

                  ومن منطلق حرص غرفة المدينة المنورة على دعم رواد الأعمال وأصحاب المنشآت في جميع القطاعات والأنشطة التجارية بالمنطقة؛ شاركت بمعرض مصاحب للتعريف عن الخدمات التي تقدمها لقطاع الأعمال و بورقة عمل لمناقشة و حصر التحديات التي تواجه قطاع خدمات الحج والعمره. </Text>
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