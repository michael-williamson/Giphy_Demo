import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "../Screens/WelcomeScreen";
import { IndividualGifScreen } from "../Screens/IndividualGifScreen";

import { TrendingGifScreen } from "../Screens/TrendingGifScreen";
import { FavoriteGifsScreen } from "../Screens/FavoriteGifsScreen";
import { Header } from "../Components/HeaderComponents/Header";
import { GiphyGridScreen } from "../Screens/GiphyGridScreen";
import { GiphyDialogScreen } from "../Screens/GiphyDialogScreen";
import {
  FAVORITE_GIFS_SCREEN,
  GIPHY_GRID_SCREEN,
  INDIVIDUAL_GIF_SCREEN,
  TRENDING_GIF_SCREEN,
} from "../VariableConstants/VARIABLE_CONSTANTS";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  WelcomeScreen: undefined;
  GiphyGridScreen: undefined;
  GiphyDialogScreen: undefined;
  TrendingGifScreen: undefined;
  FavoriteGifsScreen: undefined;
  IndividualGifScreen: undefined;
};

const componentOptions = {
  title: "Giphy Demo",
  headerStyle: { width: "100%", height: 100, backgroundColor: "black" },
  headerTitleStyle: { fontWeight: "bold", color: "white" },
};

export const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            title: "",
            headerStyle: { backgroundColor: "black" },
            headerTitleStyle: { fontWeight: "bold", color: "white" },
          }}
        />
        <Stack.Screen
          name={GIPHY_GRID_SCREEN}
          component={GiphyGridScreen}
          options={{
            title: "Giphy Demo",
            headerStyle: { backgroundColor: "black" },
            headerTitleStyle: { fontWeight: "bold", color: "white" },
          }}
        />
        <Stack.Screen
          name={TRENDING_GIF_SCREEN}
          component={TrendingGifScreen}
          options={{
            title: "Giphy Demo",
            headerStyle: { backgroundColor: "black" },
            headerTitleStyle: { fontWeight: "bold", color: "white" },
          }}
        />
        <Stack.Screen
          name={INDIVIDUAL_GIF_SCREEN}
          component={IndividualGifScreen}
          options={{
            title: "Giphy Demo",
            headerStyle: { backgroundColor: "black" },
            headerTitleStyle: { fontWeight: "bold", color: "white" },
          }}
        />
        <Stack.Screen
          name={FAVORITE_GIFS_SCREEN}
          component={FavoriteGifsScreen}
          options={{
            title: "Giphy Demo",
            headerStyle: { backgroundColor: "black" },
            headerTitleStyle: { fontWeight: "bold", color: "white" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
