import { GiphyContent, GiphyGridView } from "@giphy/react-native-sdk";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { theme } from "../../theme";
import { RootStackParamList } from "../Navigation/NavigationStack";
import { useCurrentMediaContextUpdater } from "../State_Management/CurrentMediaState";
import { INDIVIDUAL_GIF_SCREEN } from "../VariableConstants/VARIABLE_CONSTANTS";

const columnsNumberArray = [1, 2, 3, 4];

type Props = NativeStackScreenProps<RootStackParamList, "TrendingGifScreen">;

export const TrendingGifScreen: React.FC<Props> = ({ navigation }) => {
  const [columns, setColumns] = useState(1);
  const currentMediaContextUpdater = useCurrentMediaContextUpdater();
  return (
    <View>
      <Text>Trending Gifs</Text>
      <View>
        <Text
          style={{
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          No. of Columns
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <FlatList
          data={columnsNumberArray}
          keyExtractor={(item) => `${item}`}
          renderItem={({ item }) => (
            <Pressable onPress={() => setColumns(item)} style={{}}>
              <Text
                style={{
                  fontSize: 30,
                  color: columns === item ? "white" : "black",
                  paddingHorizontal: 10,
                  backgroundColor:
                    columns === item ? theme.colorsObject.blue : "transparent",
                  marginHorizontal: 10,
                  marginBottom: 10,
                }}
              >
                {item}
              </Text>
            </Pressable>
          )}
          horizontal={true}
        />
      </View>

      <GiphyGridView
        content={GiphyContent.trendingGifs()}
        cellPadding={3}
        spanCount={columns}
        style={{ height: 500, marginTop: 24 }}
        onMediaSelect={(e) => {
          currentMediaContextUpdater(e.nativeEvent.media);
          navigation.navigate(INDIVIDUAL_GIF_SCREEN);
        }}
      />
    </View>
  );
};
