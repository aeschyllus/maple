import Button from "@/components/_common/Button";
import { Typography } from "@/components/_common/Typography";
import { colors } from "@/styles/colors";
import { safeAreaView } from "@/styles/safeAreaView";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={[safeAreaView.androidView, styles.container]}>
      <View>
        <Typography type="title" style={styles.title}>
          Typography
        </Typography>
        <Typography type="title">title</Typography>
        <Typography type="subtitle">subtitle</Typography>
        <Typography>default</Typography>
        <Typography type="bold">bold</Typography>
        <Typography type="italic">italic</Typography>
      </View>
      <View>
        <Typography type="title" style={styles.title}>
          Buttons
        </Typography>
        <Button text="click me!" />
        <Button text="disabled" disabled />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brown,
    padding: 24,
  },
  title: {
    fontFamily: "SpaceMonoItalic",
    borderBottomColor: colors.black,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 12,
  },
  button: {
    marginBottom: 3,
  },
});
