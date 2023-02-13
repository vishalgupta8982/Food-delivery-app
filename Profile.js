import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Icons from "@expo/vector-icons/AntDesign";
import OnBoard from "./OnBoard";
export default function Profile({ navigation, route }) {
  const item = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: "#354249" }}>
      <View style={{ flex: 1, marginTop: 10 }}>
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
            My Profile
          </Text>
        </View>
        <View style={{ flex: 1, marginTop: 50, alignItems: "center" }}>
          <Image
            source={require("./profile.jpeg")}
            style={{
              height: 200,
              width: 200,
              borderRadius: 100,
              borderWidth: 5,
              borderColor: "#c72931",
            }}
          />
        </View>
        <View style={{ flex: 3 / 2 }}>
          <View
            style={{
              height: 70,
              flexDirection: "row",
              alignItems: "center",
              borderBottomWidth: 3,
              borderTopWidth: 3,
              borderColor: "#283035",
            }}
          >
            <Image
              source={require("./profile.jpeg")}
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                marginLeft: 20,
              }}
            />
            <Text style={{ fontSize: 20, color: "#fff", marginLeft: 20 }}>
              My Profile
            </Text>
          </View>
          <View
            style={{
              height: 70,
              flexDirection: "row",
              alignItems: "center",
              borderBottomWidth: 3,
              borderColor: "#283035",
            }}
          >
            <Icon
              name="clock-time-five-outline"
              size={30}
              color={"#fff"}
              style={{ marginLeft: 20 }}
            />
            <Text style={{ fontSize: 20, color: "#fff", marginLeft: 20 }}>
              History
            </Text>
          </View>
          <View
            style={{
              height: 70,
              flexDirection: "row",
              alignItems: "center",
              borderBottomWidth: 3,
              borderColor: "#283035",
            }}
          >
            <Icons
              name="gift"
              size={30}
              color={"#fff"}
              style={{ marginLeft: 20 }}
            />
            <Text style={{ fontSize: 20, color: "#fff", marginLeft: 20 }}>
              Rewards
            </Text>
          </View>
          <View
            style={{
              height: 70,
              flexDirection: "row",
              alignItems: "center",
              borderBottomWidth: 3,
              borderColor: "#283035",
            }}
          >
            <Icons
              name="setting"
              size={30}
              color={"#fff"}
              style={{ marginLeft: 20 }}
            />
            <Text style={{ fontSize: 20, color: "#fff", marginLeft: 20 }}>
              Setting
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              backgroundColor: "#c72931",
              height: 50,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Text
                style={{ fontSize: 20, fontWeight: "500", color: "#283035" }}
              >
                Log Out <Icon name="logout" size={26} color={"#283035"} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
