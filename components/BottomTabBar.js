import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const tabs = [
  { key: "home", label: "Home" },
  { key: "explore", label: "Explore" },
  { key: "cart", label: "Cart" },
  { key: "favourite", label: "Favourite" },
];

const routeMap = {
  home: "Home",
  explore: "Explore",
  cart: "Cart",
  favourite: "Favourite",
};

export default function BottomTabBar({ activeTab, navigation }) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          onPress={() => navigation.navigate(routeMap[tab.key])}
          style={styles.tab}
        >
          <Text
            style={{
              color: activeTab === tab.key ? "green" : "gray",
              fontWeight: "600",
            }}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  tab: {
    alignItems: "center",
  },
});
