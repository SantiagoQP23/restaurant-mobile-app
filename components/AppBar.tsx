import React from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

interface AppBarProps {
  title: string;
  trailing?: React.ReactNode;
  backButton?: boolean;
  heading?: React.ReactNode;
}

export function AppBar({ title, trailing, backButton }: AppBarProps) {
  return (
    <ThemedView style={styles.container}>
      {backButton && (
        <ThemedView
          style={{
            flexDirection: "row",
            paddingLeft: 24,
            alignItems: "center",
          }}
        >
          <ThemedText type="defaultSemiBold" style={{}}>
            <Link href="..">
              <Ionicons name="arrow-back" size={24} color="black" />
            </Link>
          </ThemedText>
        </ThemedView>
      )}

      <ThemedView style={styles.content}>
        <ThemedText type="defaultSemiBold" style={styles.title}>
          {title}
        </ThemedText>
      </ThemedView>
      {trailing && <ThemedView style={styles.trailing}>{trailing}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    paddingVertical: 24,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
  },
  content: {
    flexGrow: 1,
    paddingLeft: 24,
  },
  title: {
    fontSize: 24,
  },
  trailing: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingRight: 24,
  },
});
