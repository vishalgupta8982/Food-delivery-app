import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Detail({ navigation, route }) {
  const item = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: "#354249" }}>
      <View style={{ flex: 1, marginLeft: 10, marginRight: 10, marginTop: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="arrow-left"
            color={"#fff"}
            size={26}
            onPress={navigation.goBack}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 10,
              color: "#fff",
            }}
          >
            Details
          </Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 90, color: "#283035", fontWeight: "bold" }}>
            H i l l s
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 280,
            }}
          >
            <Image source={item.image} style={{ height: 250, width: 250 }} />
          </View>
          <View>
            <View
              style={{
                paddingHorizontal: 20,
                paddingTop: 40,
                paddingBottom: 60,
                backgroundColor: "#283035",
                borderTopRightRadius: 40,
                borderTopLeftRadius: 40,
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginHorizontal: 20,
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{ fontSize: 25, fontWeight: "bold", color: "#FFF" }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{ fontSize: 25, fontWeight: "bold", color: "#c72931" }}
                >
                  ${item.price}
                </Text>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 30,
                  }}
                >
                  <Icon name={"heart"} color="#fff" size={26} />
                </View>
              </View>
              <Text
                style={{
                  marginTop: 10,
                  lineHeight: 20,
                  fontSize: 16,
                  fontWeight: "500",
                  color: "grey",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
              <View style={{ marginTop: 40, marginBottom: 40 }}>
                <TouchableOpacity activeOpacity={0.8}>
                  <View
                    style={{
                      backgroundColor: "#c72931",
                      height: 60,
                      borderRadius: 30,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#283035",
                        fontWeight: "bold",
                        fontSize: 18,
                      }}
                    >
                      Add To Cart
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
