import { GiphyMediaView } from "@giphy/react-native-sdk";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RootStackParamList } from "../Navigation/NavigationStack";
import {
  useCurrentMediaContext,
  useFavoritesListContextUpdater,
} from "../State_Management/CurrentMediaState";
import { FAVORITE_GIFS_SCREEN } from "../VariableConstants/VARIABLE_CONSTANTS";

type Props = NativeStackScreenProps<RootStackParamList, "IndividualGifScreen">;

export const IndividualGifScreen: React.FC<Props> = ({ navigation }) => {
  const currentMediaContext = useCurrentMediaContext();
  const favoritesListContextUpdater = useFavoritesListContextUpdater();
  return (
    <SafeAreaView style={style.container}>
      <View style={style.buttonContainer}>
        <Button
          title="Add to Favorites"
          onPress={() => favoritesListContextUpdater(currentMediaContext, true)}
        />
        <Button
          title="Go to Favorites"
          onPress={() => navigation.navigate(FAVORITE_GIFS_SCREEN)}
        />
      </View>
      {currentMediaContext ? (
        <View>
          <GiphyMediaView
            media={currentMediaContext}
            style={{
              aspectRatio: currentMediaContext.aspectRatio,
            }}
            autoPlay={true}
          />
        </View>
      ) : (
        <View>
          <Text style={style.messageText}>No Gifs Selected</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
  },
  buttonContainer: {
    marginTop: 50,
    marginBottom: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    height: 100,
  },
  messageText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
