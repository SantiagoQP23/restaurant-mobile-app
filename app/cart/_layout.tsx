import React from "react";
import { Stack } from "expo-router";

export default function CartLayout() {
  return (
    <Stack
      // screenOptions={{
      //   headerStyle: {
      //   },
      // }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="menu" options={{ headerShown: false }} />
      <Stack.Screen name="product" options={{ headerShown: false }} />
      <Stack.Screen name="tables" options={{ headerShown: false }} />
      {/* <Stack.Screen name="" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="+not-found" /> */}
    </Stack>
  );
}
