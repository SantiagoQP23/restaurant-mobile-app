import { ThemedText, ThemedView } from "@/components";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";

export function ProductCard() {
  return (
    <ThemedView
      style={{ borderWidth: 1, borderRadius: 5, padding: 10, width: 200 }}
    >
      <ThemedView style={{ height: 125 }}></ThemedView>
      <ThemedText style={{ fontWeight: "bold" }}>Arroz marinero</ThemedText>
      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 8,
        }}
      >
        <ThemedText>$ 10.00</ThemedText>

        <Link href="/cart/product">
          <Ionicons name="cart-outline" size={24} color="black" />{" "}
        </Link>
      </ThemedView>
    </ThemedView>
  );
}
