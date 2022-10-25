import { GiphyMediaView } from "@giphy/react-native-sdk";
import React from "react";
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native";
import {
  useFavoritesListContext,
  useFavoritesListContextUpdater,
} from "../State_Management/CurrentMediaState";

export const FavoriteGifsScreen = () => {
  const favoritesListContext = useFavoritesListContext();
  const favoritesListContextUpdater = useFavoritesListContextUpdater();
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <ScrollView>
        {favoritesListContext.map((item) => (
          <View key={item.id} style={{ flex: 1 }}>
            <GiphyMediaView
              media={item}
              style={{ aspectRatio: item.aspectRatio }}
              autoPlay={true}
            />
            <Button
              title="Remove from Favorites"
              onPress={() => favoritesListContextUpdater(item, false)}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
