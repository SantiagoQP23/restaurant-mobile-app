import React from "react";
import { ThemedText, ThemedView } from "@/components";
import { Pressable } from "react-native";

interface TableCardProps {
  selected?: boolean;
  onClick?: () => void;
}

export function TableCard({ selected, onClick }: TableCardProps) {
  return (
    <Pressable onPress={onClick}>
      <ThemedView
        style={{
          borderWidth: selected ? 2 : 1,
          padding: 8,
          borderRadius: 5,
          borderColor: selected ? "green" : "grey",
        }}
      >
        <ThemedText>Table 1</ThemedText>
        <ThemedView style={{ height: 10 }} />
        <ThemedText>Available</ThemedText>
      </ThemedView>
    </Pressable>
  );
}
