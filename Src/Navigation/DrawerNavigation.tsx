import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { DrawerNavigationComponent } from "../Components/DrawerNavigationComponents/DrawerNavigationComponent";
import { FavoriteGifsScreen } from "../Screens/FavoriteGifsScreen";
import { GiphyGridScreen } from "../Screens/GiphyGridScreen";
import { IndividualGifScreen } from "../Screens/IndividualGifScreen";
import { TrendingGifScreen } from "../Screens/TrendingGifScreen";
import { WelcomeScreen } from "../Screens/WelcomeScreen";

export type RootDrawerParamList = {
  WelcomeScreen: undefined;
  GiphyGridScreen: undefined;
  GiphyDialogScreen: undefined;
  TrendingGifScreen: undefined;
  FavoriteGifsScreen: undefined;
  IndividualGifScreen: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const drawerOptions = {};

export const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="WelcomeScreen"
        useLegacyImplementation
        drawerContent={(props) => <DrawerNavigationComponent {...props} />}
      >
        <Drawer.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            title: "",
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold", color: "white" },
          }}
        />
        <Drawer.Screen
          name="GiphyGridScreen"
          component={GiphyGridScreen}
          options={{
            title: "Giphy Demo",
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold", color: "white" },
          }}
        />
        <Drawer.Screen
          name="TrendingGifScreen"
          component={TrendingGifScreen}
          options={{
            title: "Giphy Demo",
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold", color: "white" },
          }}
        />
        <Drawer.Screen
          name="IndividualGifScreen"
          component={IndividualGifScreen}
          options={{
            title: "Giphy Demo",
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold", color: "white" },
          }}
        />
        <Drawer.Screen
          name="FavoriteGifsScreen"
          component={FavoriteGifsScreen}
          options={{
            title: "Giphy Demo",
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold", color: "white" },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
