import React from "react";
import { ThemedView, ThemedText } from "@/components";
import { Link } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";

import { GestureHandlerRootView } from "react-native-gesture-handler";

function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
  const styleAnimation = useAnimatedStyle(() => {
    // console.log("showRightProgress:", prog.value);
    // console.log("appliedTranslation:", drag.value);

    return {
      transform: [{ translateX: drag.value + 120 }],
    };
  });

  return (
    <Reanimated.View style={styleAnimation}>
      <ThemedView style={{ flexDirection: "row", height: "100%" }}>
        <ThemedView
          style={{ ...styles.rightAction, width: 60, backgroundColor: "red" }}
        >
          <ThemedText style={{}}>Del</ThemedText>
        </ThemedView>
        <ThemedView
          style={{ ...styles.rightAction, width: 60, backgroundColor: "#48e" }}
        >
          <ThemedText style={{}}>Edit</ThemedText>
        </ThemedView>
      </ThemedView>
    </Reanimated.View>
  );
}

export function CartProductCard() {
  const onPressFunction = () => {
    console.log("OrderCard pressed!");
  };
  return (
    // <Link
    //   href={{
    //     // pathname: "/order/[id]",
    //     pathname: "/auth",
    //     params: { id: "bacon" },
    //   }}
    //   asChild
    // >
    <GestureHandlerRootView>
      <ReanimatedSwipeable
        containerStyle={{}}
        friction={2}
        enableTrackpadTwoFingerGesture
        rightThreshold={80}
        renderRightActions={RightAction}
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
              <ThemedView className="  ">
                <ThemedText type="defaultSemiBold">Arroz marinero</ThemedText>
                <ThemedText>$9.00</ThemedText>
              </ThemedView>
            </ThemedView>
            <ThemedText>Sin ensalada</ThemedText>
            <ThemedView style={{ paddingVertical: 8 }} />
            <ThemedView className="flex-row justify-between">
              <ThemedText> + 10 -</ThemedText>
              <ThemedText>$ 18.00</ThemedText>
            </ThemedView>
          </ThemedView>
        </Pressable>
      </ReanimatedSwipeable>
    </GestureHandlerRootView>
  );
}
// </Link>

const styles = StyleSheet.create({
  rightAction: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    width: "100%",
    borderTopWidth: 1,
  },
  // swipeable: {
  //   height: 50,
  //   backgroundColor: "papayawhip",
  //   alignItems: "center",
  // },
});
