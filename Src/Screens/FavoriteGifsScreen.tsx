import { GiphyMediaView } from "@giphy/react-native-sdk";
import React from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  useFavoritesListContext,
  useFavoritesListContextUpdater,
} from "../State_Management/CurrentMediaState";

export const FavoriteGifsScreen = () => {
  const favoritesListContext = useFavoritesListContext();
  const favoritesListContextUpdater = useFavoritesListContextUpdater();
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        {favoritesListContext.length === 0 && (
          <View>
            <Text style={style.messageText}>No Favorites Added</Text>
          </View>
        )}
        {favoritesListContext.map((item) => (
          <View key={item.id} style={style.giphyContainer}>
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

const style = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  giphyContainer: {
    flex: 1,
  },
  messageText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
});
