import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import React from "react";
import { colors } from "../../utils";

const Button = ({
  title,
  backgroundColor = colors.yellow,
  style,
  onPress,
}: {
  title: string;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}) => {
  return (
    <Pressable
      style={[styles.container, { backgroundColor: backgroundColor }, style]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});
