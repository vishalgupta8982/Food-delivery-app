import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/FontAwesome";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import foods from "./Foods";
import Category from "./Category";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "react-native-paper";
const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;
export default function HomeScreen({ navigation }) {
  const [selectCategory, setSelectCategory] = useState(0);
  const ListCategory = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 30,
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        {Category.map((Category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectCategory(index)}
          >
            <View
              style={{
                height: 50,
                width: 120,
                marginRight: 7,
                borderRadius: 30,
                alignItems: "center",
                paddingHorizontal: 5,
                flexDirection: "row",
                backgroundColor:
                  selectCategory == index ? "#c72931" : "#283035",
              }}
            >
              <View
                style={{
                  height: 35,
                  width: 35,
                  backgroundColor: "#fff",
                  borderRadius: 18,
                }}
              >
                <Image
                  source={Category.image}
                  style={{
                    height: 35,
                    width: 35,
                    resizeMode: "cover",
                    borderRadius: 18,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginLeft: 10,
                  color: "grey",
                  color: selectCategory == index ? "#fff" : "grey",
                }}
              >
                {Category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const Card = ({ food }) => {
    return (
      <TouchableHighlight
        underlayColor={"#283039"}
        activeOpacity={0.9}
        onPress={() => navigation.navigate("Detail", food)}
      >
        <View
          style={{
            height: 220,
            width: cardWidth,
            marginHorizontal: 5,
            marginTop: 5,
            elevation: 13,
            backgroundColor: "#283035",
          }}
        >
          <View style={{ alignItems: "center", top: 0 }}>
            <Image source={food.image} style={{ height: 120, width: 120 }} />
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              {food.name}
            </Text>
            <Text style={{ fontSize: 14, color: "grey", marginTop: 2 }}>
              {food.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              ${food.price}
            </Text>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 20,
                backgroundColor: "grey",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="heart" size={20} color={"#fff"} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#354249" }}>
      <View style={{ flex: 1, marginLeft: 10, marginRight: 10, marginTop: 10 }}>
        <StatusBar backgroundColor={"black"} />
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={{ fontSize: 25, color: "#fff" }}>
              Hello,
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  fontFamily: "serif",
                  color: "#c72931",
                }}
              >
                Vishal
              </Text>
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontSize: 19,
                color: "black",
                fontWeight: "500",
              }}
            >
              What do you want to eat today?
            </Text>
          </View>

          <View style={{ marginLeft: "auto" }}>
            <Image
              source={require("./profile.jpeg")}
              style={{
                height: 60,
                width: 60,
                borderWidth: 2,
                borderRadius: 30,

                borderColor: "#c72931",
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 35, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              height: 50,
              borderRadius: 10,
              flexDirection: "row",
              backgroundColor: "#fff",
              paddingHorizontal: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon color={"red"} name="search" size={26} />
            <TextInput
              selectionColor={"red"}
              style={{ flex: 1, fontSize: 18, marginLeft: 10 }}
              placeholder="search for food"
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 5,
              height: 50,
              width: 50,
              borderRadius: 10,
              backgroundColor: "#c72931",
            }}
          >
            <Icons name="tune" size={30} color={"#fff"} />
          </View>
        </View>
        <View>
          <ListCategory />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={foods}
          renderItem={({ item }) => <Card food={item} />}
        />
      </View>
    </View>
  );
}
