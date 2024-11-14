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

export default function OrdersScreen() {
  const navigation = useNavigation();
  return (
    <ThemedView>
      <AppBar
        title="Orders"
        trailing={
          <Link href="/cart">
            <Ionicons name="cart-outline" size={24} color="black" />{" "}
          </Link>
        }
      />
      <ThemedView style={styles.content}>
        <OrdersList />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
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
