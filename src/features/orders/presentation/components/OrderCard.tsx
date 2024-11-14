import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

export function OrderCard() {
  const onPressFunction = () => {
    console.log("OrderCard pressed!");
  };
  return (
    <Link
      href={{
        pathname: "/order/[id]",
        // pathname: "/auth",
        params: { id: "bacon" },
      }}
      asChild
    >
      <Pressable
        className="border-2 border-gray-200 rounded-lg"
        onPress={onPressFunction}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
        ]}
      >
        <ThemedView className="p-2">
          <ThemedView className="flex-row justify-between">
            <ThemedView className="flex-row gap-2 ">
              <ThemedText type="defaultSemiBold">Para llevar</ThemedText>
              <ThemedText>Entregado</ThemedText>
            </ThemedView>
            <ThemedText>Order #11</ThemedText>
          </ThemedView>
          <ThemedView className="my-3" />
          <ThemedView className="flex-row justify-between">
            <ThemedText>10 items</ThemedText>
            <ThemedText>2021-09-08 10:00</ThemedText>
            <ThemedText>$ 18.00</ThemedText>
          </ThemedView>
        </ThemedView>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 16,
  },

  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f0f0f0",
    backgroundColor: "#f9f9f9",
  },
});
