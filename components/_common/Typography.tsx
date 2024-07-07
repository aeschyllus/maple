import { colors } from "@/styles/colors";
import { StyleSheet, Text, TextProps } from "react-native";

type TypographyProps = TextProps & {
  type?: "default" | "title" | "subtitle" | "bold" | "italic";
};

export function Typography({
  type = "default",
  style,
  ...rest
}: TypographyProps) {
  return (
    <Text
      style={[
        styles.main,
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "bold" ? styles.bold : undefined,
        type === "italic" ? styles.italic : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  main: {
    fontFamily: "SpaceMono",
    color: colors.black,
  },
  default: {
    fontSize: 16,
  },
  title: {
    fontSize: 32,
    fontFamily: "SpaceMonoBold",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "SpaceMonoBold",
  },
  bold: {
    fontFamily: "SpaceMonoBold",
  },
  italic: {
    fontFamily: "SpaceMonoItalic",
  },
});
