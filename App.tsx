import { GiphySDK } from "@giphy/react-native-sdk";
import React from "react";
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

export default App;
