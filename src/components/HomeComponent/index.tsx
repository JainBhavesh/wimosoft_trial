import React, { useEffect } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Icons } from "../../assets/icons";
import { colors, rewards } from "../../utils";
import Button from "../Button";
import RewardComponent from "../RewardComponent";

const HomeComponent = () => {
  const DEFAULT_INDEX = 1;
  const [selectedIndex, setSelectedIndex] = React.useState(DEFAULT_INDEX);

  useEffect(() => {
    onSelect(DEFAULT_INDEX);
  }, []);

  const scales = React.useRef(
    rewards.map(
      (_: any, i: number) => new Animated.Value(i === DEFAULT_INDEX ? 1.08 : 1)
    )
  ).current;
  const onSelect = (index: number) => {
    setSelectedIndex(index);
    scales.forEach((scale: Animated.Value, i: number) => {
      Animated.spring(scale, {
        toValue: i === index ? 1.08 : 1,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <LinearGradient
      colors={[colors.light, colors.dark]}
      start={{ x: 0.0, y: 0.25 }}
      end={{ x: 0.5, y: 1.0 }}
      // locations={[0, 0.5, 0.6]}
      style={styles.card}
    >
      <View style={styles.subtitleContainer}>
        <Text style={styles.title}>22-day streak</Text>
        <Text style={styles.subtitle}>
          Keep a <Text style={styles.highlight}>60% or higher</Text> check-in
          rate to qualify for monthly ad-revenue rewards from the carousel
          above. View your estimated payout below.
        </Text>
        <View style={styles.statsRow}>
          <LinearGradient
            colors={[colors.light, colors.dark]}
            style={[styles.statBox]}
          >
            <View style={styles.statValueContainer}>
              <Text style={[styles.statValue, { color: colors.yellow }]}>
                0%
              </Text>
              <Text style={styles.statLabel}>Check-In rate</Text>
            </View>
          </LinearGradient>
          <View style={styles.dividerContainer}>
            <Text style={styles.dividerText}>STATS</Text>
            <View style={styles.divider} />
          </View>
          <LinearGradient
            colors={[colors.light, colors.dark]}
            style={styles.statBox}
          >
            <View style={styles.statValueContainer}>
              <Text style={styles.statValue}>33</Text>
              <Text style={styles.statLabel}>Longest streak</Text>
            </View>
          </LinearGradient>
        </View>
        {rewards.map((reward, index: number) => (
          <Animated.View
            key={index}
            style={[
              styles.crownContainer,
              { transform: [{ scale: scales[index] }] },
              {
                opacity: index === selectedIndex ? 1 : 0.5,
              },
            ]}
          >
            <RewardComponent
              key={index}
              reward={reward}
              onSelect={onSelect}
              index={index}
            />
          </Animated.View>
        ))}
        <View style={styles.timerContainer}>
          <Image
            source={Icons.stopwatch}
            tintColor={colors.lightPurple}
            style={styles.stopwatch}
          />
          <Text style={styles.timer}>
            Next Check-in<Text style={styles.timerText}> 00:00:00</Text>
          </Text>
        </View>
        <Button style={styles.button} title="Check-In Now" onPress={() => {}} />
      </View>
    </LinearGradient>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.white,
    textAlign: "center",
  },
  subtitle: {
    color: colors.lightPurple,
    fontSize: 13,
    textAlign: "center",
    marginVertical: 12,
    lineHeight: 20,
  },
  highlight: {
    color: colors.pink,
    fontWeight: "600",
  },
  subtitleContainer: {
    flex: 1,
    padding: 20,
    paddingVertical: 30,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    marginTop: 15,
    marginBottom: 30,
  },
  statBox: {
    borderWidth: 0.1,
    borderColor: "transparent",
    borderRadius: 15,

    // iOS shadow
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,

    // Android shadow
    elevation: 2,
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.lightBlue,
    textAlign: "center",
    paddingTop: 15,
  },

  statLabel: {
    fontSize: 12,
    color: colors.lightPurple,
    marginTop: 4,
    paddingBottom: 15,
  },
  divider: {
    width: 2,
    height: 30,
    backgroundColor: colors.lightGrey,
    marginTop: 8,
  },
  statValueContainer: {
    paddingHorizontal: 20,
  },
  dividerContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  dividerText: {
    fontSize: 14,
    color: colors.pink,
  },

  crownContainer: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 10,
  },
  timer: {
    color: colors.lightPurple,
    fontSize: 14,
    textAlign: "center",
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "center",
  },
  stopwatch: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: colors.lightPurple,
  },
  timerText: {
    color: colors.yellow,
    fontSize: 14,
    fontWeight: "600",
  },
  button: {
    marginTop: 30,
  },
});
