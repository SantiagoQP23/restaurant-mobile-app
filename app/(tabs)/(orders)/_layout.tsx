import React from "react";
import { Stack } from "expo-router";
import { AppBar } from "@/components";

export default function OrdersLayout() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* <Stack.Screen name="order/[id]" options={{ title: "Order", headerShown: false }} /> */}
        <Stack.Screen name="bill" />
        {/* <Stack.Screen name="+not-found" /> */}
      </Stack>
  );
}
