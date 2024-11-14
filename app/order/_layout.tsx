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
      <Stack.Screen name="[id]" options={{ headerShown: false }} />
      {/* <Stack.Screen name="" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="+not-found" /> */}
    </Stack>
  );
}
