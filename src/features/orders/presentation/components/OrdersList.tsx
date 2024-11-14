import React from "react";
import { Pressable, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { OrderCard } from "./OrderCard";
import { ThemedView } from "@/components/ThemedView";

export function OrdersList() {
  return (
    <ThemedView>
      <ThemedText className="">Orders list</ThemedText>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <ThemedView className="gap-5">
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}
