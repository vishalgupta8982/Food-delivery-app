import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import foods from "./Foods";
import Category from "./Category";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Icons from "@expo/vector-icons/Ionicons";
const AddToCart = ({ navigation }) => {
  const CartCard = ({ item }) => {
    return (
      <View
        style={{
          height: 100,
          elevation: 15,
          borderRadius: 10,
          backgroundColor: "#fff",
          marginVertical: 10,
          marginHorizontal: 20,
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image source={item.image} style={{ height: 80, width: 80 }} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
          <Text style={{ fontSize: 13, color: "grey" }}>
            {item.ingredients}
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            ${item.price}
          </Text>
        </View>
        <View style={{ marginRight: 20, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>3</Text>
          <View
            style={{
              width: 80,
              height: 30,
              backgroundColor: "#c72931",
              borderRadius: 30,
              paddingHorizontal: 5,
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Icons name="remove" size={25} color={"#fff"} />
            <Icons name="add" size={25} color={"#fff"} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#354249" }}>
      <View
        style={{
          paddingVertical: 20,
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <Icon
          name="arrow-left"
          size={28}
          color={"white"}
          onPress={navigation.goBack}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginLeft: 10,
          }}
        >
          Cart
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={foods}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                Total Price
              </Text>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                $50
              </Text>
            </View>
            <View style={{ marginHorizontal: 30 }}>
              <TouchableOpacity activeOpacity={0.8}>
                <View
                  style={{
                    backgroundColor: "red",
                    height: 60,
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}
                  >
                    Checkout
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default AddToCart;
