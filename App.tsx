import { GiphySDK } from "@giphy/react-native-sdk";
import React from "react";
import { StyleSheet } from "react-native";
import { keys } from "./keys";
import { DrawerNavigation } from "./Src/Navigation/DrawerNavigation";
import { CurrentMediaState } from "./Src/State_Management/CurrentMediaState";

export type Props = {
  children: JSX.Element[] | JSX.Element | string;
};

const API_KEY = keys.GIPHY_DEMO_SDK_KEY;
// Configure API keys
GiphySDK.configure({ apiKey: API_KEY });

const App: React.FC<Props> = () => {
  const backgroundStyle = {
    backgroundColor: "white",
  };

  return (
    <CurrentMediaState>
      <DrawerNavigation />
    </CurrentMediaState>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
