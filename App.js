import { View, Text } from "react-native";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import OnBoard from "./OnBoard";
import HomeScreen from "./HomeScreen";
import BottomTab from "./BottomTab";
import Detail from "./Detail";

const nav = createStackNavigator({
  home: {
    screen: OnBoard,
    navigationOptions: { headerShown: false },
  },
  BottomTab: {
    screen: BottomTab,
    navigationOptions: { headerShown: false },
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: { headerShown: false },
  },
  Detail: {
    screen: Detail,
    navigationOptions: { headerShown: false },
  },
  OnBoard:{
    screen:OnBoard,navigationOptions:{headerShown:false}
  }
});
export default createAppContainer(nav);
