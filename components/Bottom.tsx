import React from "react";
import { Text, StyleSheet, Dimensions, type ViewProps } from "react-native";
import { ThemedView } from "./ThemedView";

interface BottomInfoComponentProps {
  backgroundColor?: string;
  children?: React.ReactNode;
  style?: ViewProps;
}

export function Bottom({
  children,
  backgroundColor = "#fff",
  style,
}: BottomInfoComponentProps) {
  return (
    <ThemedView style={[styles.container, { backgroundColor }, style]}>
      {children}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
