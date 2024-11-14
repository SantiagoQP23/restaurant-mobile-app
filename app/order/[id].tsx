import React, { useCallback, useEffect, useRef } from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Button, Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, useNavigation } from "expo-router";
import { AppBar, Bottom } from "@/components";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import {
  CheckoutBottomSheet,
  OrderDetailCard,
} from "@/src/features/orders/presentation/components";

export default function OrderScreen() {
  const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpenSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // Then in your method
  useEffect(() => {
    navigation.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
  }, []);

  return (
    <>
      <AppBar title="Order" backButton />
      <ThemedView style={{ flexGrow: 1 }}>
        <ScrollView contentContainerStyle={{}}>
          <ThemedView style={{ padding: 8 }}>
            <ThemedView style={styles.textCenter}>
              <ThemedText>Delivered</ThemedText>
              <ThemedText style={{ fontWeight: "bold", fontSize: 24 }}>
                Order 2
              </ThemedText>
              <ThemedText>04-11-2024 10:00</ThemedText>
            </ThemedView>

            <ThemedView className="my-3" />
            <ThemedView
              style={{
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                borderColor: "gray",
              }}
            >
              <ThemedView
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ThemedView>
                  <ThemedText>Mesero</ThemedText>
                  <ThemedText style={{ fontWeight: "bold" }}>
                    Santiago Quirumbay
                  </ThemedText>
                </ThemedView>

                <Link href="/bill" asChild>
                  <Pressable>
                    <Ionicons name="person-add" size={24} color="black" />
                  </Pressable>
                </Link>
              </ThemedView>
            </ThemedView>
            <ThemedView
              style={{
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                borderColor: "gray",
              }}
            >
              <ThemedView
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ThemedView>
                  <ThemedText>Table</ThemedText>
                  <ThemedText style={{ fontWeight: "bold" }}>
                    Table 1
                  </ThemedText>
                </ThemedView>

                <Link href="/bill" asChild>
                  <Pressable>
                    <Ionicons name="cart-outline" size={24} color="black" />
                  </Pressable>
                </Link>
              </ThemedView>
            </ThemedView>

            <OrderDetailCard />
            <OrderDetailCard />
            <OrderDetailCard />
            <OrderDetailCard />
            <OrderDetailCard />
            <OrderDetailCard />
          </ThemedView>
        </ScrollView>
      </ThemedView>
      <Bottom>
        <ThemedView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <ThemedText style={{}}>Total</ThemedText>
          <ThemedText style={{}}>$ 10.00</ThemedText>
        </ThemedView>
        <ThemedView style={{ marginVertical: 8 }} />
        <Button title="Checkout" onPress={handleOpenSheet} />
      </Bottom>
      <CheckoutBottomSheet
        bottomSheetRef={bottomSheetRef}
        handleSheetChanges={handleSheetChanges}
      />
    </>
  );
}

const styles = StyleSheet.create({
  textCenter: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
