import { StatusBar, StyleSheet } from "react-native";

export const safeAreaView = StyleSheet.create({
  androidView: {
    paddingTop: StatusBar.currentHeight,
  },
});
