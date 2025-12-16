import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "react-native-linear-gradient";
import { Icons } from "../../assets/icons";
import { colors } from "../../utils";

const RewardComponent = ({
  reward,
  onSelect,
  index,
}: {
  reward: any;
  onSelect: (index: number) => void;
  index: number;
}) => {
  return (
    <LinearGradient
      colors={[colors.light, colors.dark]}
      style={styles.container}
    >
      <Pressable style={styles.imageWrapper} onPress={() => onSelect(index)}>
        <ImageBackground
          source={Icons.crown}
          style={styles.crown}
          tintColor={reward.color}
        />
        <View style={styles.textContainer}>
          <Text style={styles.rewardTitle}>{reward.title}</Text>
          <Text style={styles.rewardSubtitle}>{reward.subtitle}</Text>
        </View>
        <Text style={[styles.rewardValue, { color: reward.color }]}>
          {reward.value}
        </Text>
      </Pressable>
    </LinearGradient>
  );
};

export default RewardComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
  },
  imageWrapper: {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,

    // Android shadow
    elevation: 2,
    padding: 14,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  rewardTitle: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "600",
  },
  rewardSubtitle: {
    color: colors.lightPurple,
    fontSize: 12,
    marginTop: 4,
  },
  rewardValue: {
    fontSize: 18,
    fontWeight: "700",
  },
  crown: {
    width: 35,
    height: 35,
    backgroundColor: "transparent",
    marginLeft: 10,
  },
});
