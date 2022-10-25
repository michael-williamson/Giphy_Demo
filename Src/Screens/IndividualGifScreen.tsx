import { GiphyMediaView } from "@giphy/react-native-sdk";
import React from "react";
import { Button, SafeAreaView, ScrollView, View } from "react-native";
import {
  useCurrentMediaContext,
  useFavoritesListContextUpdater,
} from "../State_Management/CurrentMediaState";

export const IndividualGifScreen = () => {
  const currentMediaContext = useCurrentMediaContext();
  const favoritesListContextUpdater = useFavoritesListContextUpdater();
  return (
    <SafeAreaView style={{ backgroundColor: "black", height: "100%" }}>
      <View
        style={{
          marginTop: 50,
          marginBottom: 50,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Button
          title="Add to Favorites"
          onPress={() => favoritesListContextUpdater(currentMediaContext, true)}
        />
      </View>
      {currentMediaContext && (
        <View>
          <GiphyMediaView
            media={currentMediaContext}
            style={{
              aspectRatio: currentMediaContext.aspectRatio,
            }}
            autoPlay={true}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
