import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export const DrawerNavigationComponent = (props: {
  navigation: {
    closeDrawer: () => void;
    toggleDrawer: () => void;
    navigate: (item: string) => void;
  };
}) => {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Close drawer"
        labelStyle={{ fontSize: 30, fontWeight: "bold", color: "black" }}
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Search Gifs"
        labelStyle={{ fontSize: 25, fontWeight: "bold", color: "#2f89d8" }}
        onPress={() => props.navigation.navigate("GiphyGridScreen")}
      />
      <DrawerItem
        label="Trending Gifs"
        labelStyle={{ fontSize: 25, fontWeight: "bold", color: "#2f89d8" }}
        onPress={() => props.navigation.navigate("TrendingGifScreen")}
      />
      <DrawerItem
        label="Individual Gif View"
        labelStyle={{ fontSize: 25, fontWeight: "bold", color: "#2f89d8" }}
        onPress={() => props.navigation.navigate("IndividualGifScreen")}
      />
      <DrawerItem
        label="Favorite Gifs"
        labelStyle={{ fontSize: 25, fontWeight: "bold", color: "#2f89d8" }}
        onPress={() => props.navigation.navigate("FavoriteGifsScreen")}
      />
    </DrawerContentScrollView>
  );
};
