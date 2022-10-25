import { StyleSheet } from "react-native";

export const theme = {
  layout: StyleSheet.create({
    flexCentered: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    flexSpaceAround: {
      flex: 1,
      justifyContent: "space-around",
    },
    flexSpaceBetween: {
      flex: 1,
      justifyContent: "space-between",
    },
  }),
  fontSizes: StyleSheet.create({
    small: { fontSize: 8 },
    med: { fontSize: 24 },
    large: { fontSize: 24 },
    xLarge: { fontSize: 48 },
  }),
  fontWeights: StyleSheet.create({
    bold: { fontWeight: "bold" },
  }),
  colors: StyleSheet.create({
    black: { color: "black" },
    blue: { color: "#0562a9s" },
  }),
  colorsObject: {
    black: "black",
    blue: "#2f89d8",
  },
};
