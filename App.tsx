/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./src/screens/Home";
import { StyleSheet } from "react-native";
import { colors } from "./src/utils";

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.transparent,
  },
});
