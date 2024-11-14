import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedView } from "./ThemedView";

interface ScaffoldProps {
  children?: React.ReactNode;
}
export function Scaffold({ children }: ScaffoldProps) {
  const insets = useSafeAreaInsets();
  return (
    <ThemedView
      style={{
        ...styles.container,
        paddingBottom: insets.bottom,
        paddingTop: insets.top,
      }}
    >
      <StatusBar  />
      {children}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
