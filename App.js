import React, { useState } from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { NavigationContainer } from "@react-navigation/native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createStackNavigator } from "@react-navigation/stack";
import AnimatedSplash from "react-native-animated-splash-screen";

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, TouchableOpacity, Text, Image, Linking } from 'react-native';
import { useTheme } from 'react-native-paper';



import HomeScreen from "./screens/home/index";
import Product from "./screens/product/index";
import ContactScreen from "./screens/ContactScreen";
import Detail from "./screens/detail/index";
import Registr from "./screens/Registr";
import ForgotPassword from "./screens/forgotPassword";
import PhotoAlbumScreen from "./screens/PhotoAlbumScreen";
import FullScreenImageScreen from "./screens/FullScreenImageScreen";


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Registr" component={Registr} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ContactScreen} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="PhotoAlbumScreen" component={PhotoAlbumScreen} />
      <Stack.Screen name="FullScreenImage" component={FullScreenImageScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="#6c873e"
      inactiveColor="#12355a"
      barStyle={{ backgroundColor: '#fcfcfc'}}
    >
      <Tab.Screen
      
        name="الصفحة الرئيسية"
        component={StackNavigator}
        options={{
          tabBarLabel: "الصفحة الرئيسية",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={'#12355a'} size={24}  />
            
          ),
        }}
      />
      {/* <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="newspaper" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="تواصل معنا"
        component={ContactScreen}
        options={{
          tabBarLabel: "تواصل معنا",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="share-alt" color={'#12355a'} size={22} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

function CustomDrawerContent(props) {
  const [activeRoute, setActiveRoute] = useState('الصفحة الرئيسية');
  const [subpagesOpen, setSubpagesOpen] = useState({});

  const handleRouteChange = (route) => {
    setActiveRoute(route.name);
    props.navigation.navigate(route.name);
  };

  const handleSubpagesToggle = (routeName) => {
    setSubpagesOpen({...subpagesOpen, [routeName]: !subpagesOpen[routeName]});
  }

  const routes = [
    { 
      name: 'الصفحة الرئيسية', 
      icon: 'ios-home-outline',
      subpages: []
    },
    { 
      name: 'المركز الأعلامي', 
      icon: 'ios-newspaper-outline',
      subpages: [
        { name: 'الاخبار' },
        { name: ' التعاميم' },
        { name: 'الفعاليات' },
        { name: 'الأعلانات' },
      ]
    },
    { 
      name: 'الخدمات الإلكترونية', 
      icon: 'ios-laptop-outline',
      subpages: [
        { name: 'التصديق الإلكتروني', url: 'https://example.com' },
        { name: 'طباعة الشهادة', url: 'https://example.com' },
        { name: 'تجديد الأشتراك', url: 'https://example.com' },
        { name: 'مركز دعم الأعمال ' },
        { name: 'التحقق من شهادة مركز التدريب' },
        { name: 'التحقق من الوثائق' },
      
      ]
        },
    { 
      name: 'تطبيقات أخرى', 
      icon: 'ios-apps-outline',
      subpages: [
        { name: 'بوابة الغرف' },
        { name: 'معتمد' },
      ]
    },
  ];

  const renderSubpages = (subpages, isOpen) => {
    if (!isOpen) {
      return null;
    }
    return (
      <View>
        {subpages.map((subpage, index) => (
          <TouchableOpacity
            key={index}
            style={{ padding: 10 }}
            onPress={() => {
              if (subpage.url) {
                Linking.openURL(subpage.url);
              } else {
                handleRouteChange(subpage);
              }
            }}
          >
            <Text style={{ fontSize: 16, color: '#12355a', textAlign:'right' }}>{subpage.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 150, backgroundColor: '#12355a', justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>القائمة</Text> */}
        <Image 
          source={require('./assets/Mccilogo2.png')}
          style={{ width: 120, height: 40, marginTop:23}}
        />
      </View>
      <DrawerContentScrollView {...props}>
        {routes.map((route, index) => (
          <View key={index}>    
            <TouchableOpacity
              style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: route.name === activeRoute ? '#eee' : '#fff'}}
              onPress={() => handleRouteChange(route)}
              >
          {route.subpages.length > 0 && (
  <TouchableOpacity onPress={() => handleSubpagesToggle(route.name)}>
    <Ionicons name={subpagesOpen[route.name] ? 'ios-chevron-down-outline' : 'ios-chevron-back-outline'} size={25} color="#ccc" />
  </TouchableOpacity>
)}
{route.subpages.length === 0 && (
  <Text style={{ fontSize: 20, textAlign: 'center' }}></Text>
)}
              <Text style={{ fontSize: 16, color: route.name === activeRoute ? '#12355a' : '#ccc' }}>{route.name}</Text>
              <Ionicons name={route.icon} size={25} color={route.name === activeRoute ? '#12355a' : '#ccc'} />
            </TouchableOpacity>
            {renderSubpages(route.subpages, subpagesOpen[route.name])}
          </View>
        ))}
      </DrawerContentScrollView>
    </View>
  );
}
function App() {

  const theme = useTheme();
  theme.colors.secondaryContainer = '#6c873e'

  return (
    <NavigationContainer>
      <Drawer.Navigator 
      screenOptions={{
        drawerPosition:'right', 
        headerShown:'false', 
        backgroundColor:'#c6cbef',
        DrawerContentContainerStyle:{
          textAlign:'right'
        }
      }} 
      drawerContent={(props) => <CustomDrawerContent {...props} />} drawerType="slide">
        <Drawer.Screen name="الصفحة الرئيسية" component={TabNavigator} options={{ headerShown: false }}/>
        <Drawer.Screen name="الاخبار" component={Product} options={{ headerShown: false }}/>
        <Drawer.Screen name="تطبيقات أخرى" component={Product} options={{ headerShown: false }}/>
        <Drawer.Screen name="التعاميم" component={PhotoAlbumScreen} options={{ headerShown: false }}/>
        <Drawer.Screen name="الفعاليات" component={PhotoAlbumScreen} options={{ headerShown: false }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;