import React, { useState } from "react";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { NavigationContainer } from "@react-navigation/native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createStackNavigator } from "@react-navigation/stack";
import AnimatedSplash from "react-native-animated-splash-screen";

import HomeScreen from "./screens/home/index";
import Product from "./screens/product/index";
import ProfileScreen from "./screens/ProfileScreen";
import Detail from "./screens/detail/index";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
          <Tab.Screen
        name="Product"
        component={Product}
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="newspaper" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "share",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="share-alt" color={color} size={26} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

function App() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 3000);

  return (
    <NavigationContainer>
      {/* <AnimatedSplash
        translucent={true}
        isLoaded={loading}
        logoImage={require("./assets/splash.png")}
        backgroundColor={"#FFFFFF"}
        logoHeight={650}
        logoWidth={550}
      > */}
      {/* </AnimatedSplash> */}

      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Profile" component={TabNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
