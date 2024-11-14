import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, Text, Button } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { OrdersList } from "@/src/features/orders/presentation/components";
import { AppBar } from "@/components/AppBar";
import { Link, useNavigation } from "expo-router";

import { Pressable, ScrollView } from "react-native";
import { useCallback, useRef } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Bottom } from "@/components/Bottom";
import { OrderCard } from "@/src/features/orders/presentation/components/OrderCard";
import { CartProductCard } from "@/src/features/cart/presentation/components/CartProductCard";

export default function Index() {
  const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpenSheet = () => {
    bottomSheetRef.current?.expand();
  };

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <>
      <ThemedView>
        <AppBar title="Cart" backButton />

        <ThemedView style={{ flexGrow: 1 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            // contentContainerStyle={{ padding: 24, gap: 16 }}
          >
            <ThemedView style={{ padding: 24, gap: 16, marginBottom: 250 }}>
              <ThemedView
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ThemedView>
                  <ThemedText>Table</ThemedText>
                  <ThemedText style={{ fontWeight: "bold" }}>Mesa 4</ThemedText>
                </ThemedView>

                <Link href="/cart/tables" asChild>
                  <Pressable
                    onPress={() => {
                      // NiceModal.show(SignOutModal);
                    }}
                  >
                    <Ionicons name="pencil-sharp" size={24} color="black" />
                  </Pressable>
                </Link>
              </ThemedView>
              <ThemedView
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ThemedView>
                  <ThemedText>Items</ThemedText>
                  <ThemedText style={{ fontWeight: "bold" }}>
                    3 products
                  </ThemedText>
                </ThemedView>

                <Link href="/cart/menu" asChild>
                  <Pressable
                    onPress={() => {
                      // NiceModal.show(SignOutModal);
                    }}
                  >
                    <Ionicons name="cart" size={24} color="black" />
                  </Pressable>
                </Link>
              </ThemedView>

              <CartProductCard />
              <CartProductCard />
              <CartProductCard />
              <CartProductCard />
              <CartProductCard />
              <CartProductCard />
              <CartProductCard />
              <CartProductCard />
              <CartProductCard />
              <CartProductCard />
              <CartProductCard />
            </ThemedView>
          </ScrollView>
        </ThemedView>
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
    </>
  );
}

// <GestureHandlerRootView style={styles.container}>
//   <BottomSheet
//     ref={bottomSheetRef}
//     onChange={handleSheetChanges}
//     index={-1}
//   >
//     <BottomSheetView style={styles.contentContainer}>
//       <ThemedView
//         style={{ flexDirection: "row", justifyContent: "space-between" }}
//       >
//         <ThemedText style={{ fontSize: 20, fontWeight: "bold" }}>
//           Your Orders
//         </ThemedText>
//         <ThemedText style={{ fontSize: 20, fontWeight: "bold" }}>
//           Your Orders
//         </ThemedText>
//       </ThemedView>
//       <Button
//         title="Close"
//         onPress={() => bottomSheetRef.current?.close()}
//       />
//     </BottomSheetView>
//   </BottomSheet>
// </GestureHandlerRootView>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    gap: 10,
    padding: 24,
  },
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  content: {
    marginVertical: 10,
    marginHorizontal: 24,
    flexGrow: 1,
  },
});
