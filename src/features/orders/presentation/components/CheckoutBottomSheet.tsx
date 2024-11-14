import { ThemedView, ThemedText } from "@/components";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import { Button, Pressable, StyleSheet } from "react-native";

interface BottomSheetProps {
  bottomSheetRef: React.RefObject<BottomSheet>;
  handleSheetChanges: (index: number) => void;
}

export function CheckoutBottomSheet({
  bottomSheetRef,
  handleSheetChanges,
}: BottomSheetProps) {
  return (
    <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges} index={-1}>
      <BottomSheetView style={styles.contentContainer}>
        <ThemedView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <ThemedText style={{ fontSize: 20, fontWeight: "bold" }}>
            Total
          </ThemedText>
          <ThemedText style={{ fontSize: 20, fontWeight: "bold" }}>
            $100.00
          </ThemedText>
        </ThemedView>
        <ThemedView style={{ gap: 10 }}>
          <Payment />
          <Payment />
          <Payment />
          <Payment />
        </ThemedView>
        <Link href="/order/bill" asChild>
          <Button title="Cobrar" />
        </Link>
        <Button
          title="Close"
          color="grey"
          onPress={() => bottomSheetRef.current?.close()}
        />
      </BottomSheetView>
    </BottomSheet>
  );
}

function Payment() {
  return (
    <Pressable>
      <ThemedView
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <ThemedView>
          <ThemedText style={{ fontWeight: "bold" }}>Payment</ThemedText>
          <ThemedText style={{}}>13-11-2024 16:00</ThemedText>
        </ThemedView>
        <ThemedText style={{}}>$30</ThemedText>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "grey",
  },
  contentContainer: {
    gap: 10,
    padding: 24,
  },
});
