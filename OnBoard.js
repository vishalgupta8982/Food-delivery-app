import { View, Text,Image,StyleSheet,Button,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "@expo/vector-icons/FontAwesome5"
import HomeScreen from './HomeScreen';
import BottomTab from './BottomTab';
export default function OnBoard({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: "#354249" }}>
      <View style={{ height: 700 }}>
        <View style={{ flex: 1, height: 400 }}>
          <Image
            style={{ width: "100%", resizeMode: "contain" }}
            source={require("./splash1.gif")}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
              textAlign: "center",
              color: "#ffff",
            }}
          >
            Delicious Food
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontFamily: "serif",
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "center",
              color: "#fff",
              marginBottom: 100,
            }}
          >
            We help you to find best and delicious food <Icon name="smile" size={24} color="yellow" />
          </Text>
        </View>
        <View
          style={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <View style={style.currentIndicator}></View>
          <View style={style.Indicator}></View>
          <View style={style.Indicator}></View>
        </View>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity 
            style={{
              backgroundColor: "#c72931",
              height: 50,
              width: 300,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
              marginTop: 40,
            }}
            onPress={()=>navigation.navigate("BottomTab")}
            
          >
            <Text 
              style={{ fontSize: 18, fontWeight: "bold", color: "#283035" }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );}
  const style=StyleSheet.create({
    currentIndicator:{
    height:12,
    width:30,
    borderRadius:10,
    backgroundColor:"#c72931",
    marginHorizontal:5,
    },
    Indicator:{
      height:12,
      width:12,
      borderRadius:6,
      backgroundColor:"grey",
      marginHorizontal:5,
    }
  })