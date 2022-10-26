import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";

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
        labelStyle={style.drawerClose}
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Search Gifs"
        labelStyle={style.drawerItem}
        onPress={() => props.navigation.navigate("GiphyGridScreen")}
      />
      <DrawerItem
        label="Trending Gifs"
        labelStyle={style.drawerItem}
        onPress={() => props.navigation.navigate("TrendingGifScreen")}
      />
      <DrawerItem
        label="Individual Gif View"
        labelStyle={style.drawerItem}
        onPress={() => props.navigation.navigate("IndividualGifScreen")}
      />
      <DrawerItem
        label="Favorite Gifs"
        labelStyle={style.drawerItem}
        onPress={() => props.navigation.navigate("FavoriteGifsScreen")}
      />
    </DrawerContentScrollView>
  );
};

const style = StyleSheet.create({
  drawerClose: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  drawerItem: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2f89d8",
  },
});
