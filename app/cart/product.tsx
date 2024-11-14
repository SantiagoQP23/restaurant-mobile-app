import { AppBar, Bottom, ThemedText, ThemedView } from "@/components";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Button, StyleSheet, TextInput, ScrollView } from "react-native";

export default function ProductScreen() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");

  return (
    <>
      <ThemedView>
        <AppBar title="Product" backButton />
        <ThemedView style={{ height: "100%", padding: 8, gap: 8 }}>
          <ScrollView
            automaticallyAdjustKeyboardInsets
            contentContainerStyle={{
              padding: 8,
              gap: 8,
              flexGrow: 1,
            }}
          >
              <ThemedView style={{ height: 300, borderWidth: 1 }}></ThemedView>
              <ThemedView
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <Ionicons name="remove" size={24} color="black" />
                <TextInput
                  onChangeText={onChangeNumber}
                  value={number}
                  keyboardType="numeric"
                />
                <Ionicons name="add" size={24} color="black" />
              </ThemedView>
              <ThemedText style={{ fontSize: 24, fontWeight: "bold" }}>
                Product name
              </ThemedText>
              <ThemedText style={{ fontSize: 16 }}>
                Product description
              </ThemedText>

              <ThemedView style={{ height: 20 }} />
              <ThemedText style={{ fontWeight: "bold" }}>Notes</ThemedText>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                multiline
                numberOfLines={4}
              />
            <ThemedView style={{ height: 200 }} />
          </ScrollView>
        </ThemedView>
      </ThemedView>
      <Bottom>
        <ThemedView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ThemedText>$10.00</ThemedText>
          <Button title="Add to cart" onPress={() => {}} />
        </ThemedView>
      </Bottom>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
});
