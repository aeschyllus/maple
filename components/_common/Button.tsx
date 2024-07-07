import { Pressable, PressableProps, StyleSheet } from "react-native";
import { Typography } from "./Typography";
import { colors } from "@/styles/colors";

type ButtonProps = PressableProps & {
  text: string;
};

export default function Button({
  text,
  onPress,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      style={[styles.btn, disabled ? styles.btnDisabled : undefined]}
      {...rest}
    >
      <Typography style={styles.text}>{text}</Typography>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.brown,
    borderColor: colors.black,
    borderRadius: 20,
    borderWidth: 1,
    borderRightWidth: 5,
    borderBottomWidth: 5,
    paddingVertical: 12,
  },
  btnDisabled: {
    opacity: 0.4,
  },

  text: {
    textAlign: "center",
  },
});
