import React from "react";
import { Text, View, Button } from "react-native";
import { theme } from "../../theme";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/NavigationStack";

type Props = NativeStackScreenProps<RootStackParamList, "WelcomeScreen">;

export const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View
      style={{
        ...theme.layout.flexCentered,
        backgroundColor: theme.colorsObject.black,
      }}
    >
      <View>
        <Text
          style={{
            ...theme.fontSizes.xLarge,
            ...theme.fontWeights.bold,
            color: "white",
            paddingBottom: 50,
          }}
        >
          Giphy Demo
        </Text>
      </View>
      <View style={{ ...theme.layout.flexSpaceAround, ...{ maxHeight: 200 } }}>
        <Button
          title="Search for a Gif"
          onPress={() => navigation.navigate("GiphyGridScreen")}
        />
        <Button
          title="Trending Gifs"
          onPress={() => navigation.navigate("TrendingGifScreen")}
        />
      </View>
    </View>
  );
};
