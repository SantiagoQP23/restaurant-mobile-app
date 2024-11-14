import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import React from "react";
import { Button, StyleSheet, TextInput } from "react-native";

export default function Login() {
  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <ThemedView
      style={{
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        gap: 8,
      }}
    >
      <ThemedText>login</ThemedText>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <ThemedView
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Link href="/auth" asChild>
          <ThemedText style={{}}>Forgot password?</ThemedText>
        </Link>
      </ThemedView>
      <Link href="/(tabs)" asChild>
        <Button title="login" onPress={() => {}} />
      </Link>
      <ThemedView
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <ThemedText> Don't have an account?</ThemedText>
        <Link href="/auth/login" asChild>
          <ThemedText>Go to login</ThemedText>
        </Link>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: "100%",
    padding: 10,
  },
});
