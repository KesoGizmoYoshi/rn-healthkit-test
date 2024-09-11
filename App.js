import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import HealthKit, {
  HKQuantityTypeIdentifier,
} from "@kingstinct/react-native-healthkit";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    async function setup() {
      await HealthKit.requestAuthorization([
        HKQuantityTypeIdentifier.stepCount,
      ]);

      const unsubscribe = HealthKit.subscribeToChanges(
        HKQuantityTypeIdentifier.stepCount,
        () => {
          console.log("New sample available!");
        }
      );
    }

    setup();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
