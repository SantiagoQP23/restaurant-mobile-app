import React from "react";
import { ThemedText, ThemedView } from "@/components";
import { ScrollView } from "react-native";
import { ProductCard } from "./ProductCard";

export function SectionView() {
  return (
    <ScrollView>
      <ThemedView style={{ flexGrow: 1, padding: 8, gap: 8 }}>
        <ThemedView>
          <ThemedText style={{ fontWeight: "bold", fontSize: 20, marginBottom: 8 }}>
            Rice
          </ThemedText>
          <ScrollView horizontal>
            <ThemedView style={{ flexDirection: "row", gap: 8 }}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </ThemedView>
          </ScrollView>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}
