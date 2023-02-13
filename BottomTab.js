import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HomeScreen from "./HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import AddToCart from "./AddToCart";
import Detail from "./Detail";
import Profile from "./Profile";
const Tab = createBottomTabNavigator();
export default function BottomTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#c72931",
          tabBarInactiveTintColor: "#fff",
          headerShown: false,
          tabBarBackground: () => (
            <View style={{ backgroundColor: "#283039", height: 50 }} />
          ),
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Detail"
          component={Detail}
          options={{
            tabBarLabel: "Detail",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="shopping-bag" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={HomeScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <View
                style={{
                  marginBottom: 20,
                  height: 60,
                  width: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 30,
                  backgroundColor: "#283039",
                  borderWidth: 3,
                  borderColor: "#c72931",
                }}
              >
                <FontAwesome name="search" color={color} size={28} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={AddToCart}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ color, size }) => (
              <Icon name="cart" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("./profile.jpeg")}
                style={{ height: 30, width: 30, borderRadius: 15 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
