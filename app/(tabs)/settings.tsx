import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Button, Pressable, Text } from "react-native";
import Modal from "react-native-modal";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Link } from "expo-router";

export default function SettingsScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <ThemedView style={{ padding: 24 }}>
      <Text>settings</Text>
      <ThemedView
        style={
          {
            // borderWidth: 1,
            // borderRadius: 5,
            // padding: 10,
            // borderColor: "gray",
          }
        }
      >
        <ThemedView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ThemedView>
            <ThemedText style={{ fontWeight: "bold" }}>Sign out</ThemedText>
            {/* <ThemedText>Mesero</ThemedText> */}
          </ThemedView>

          <Pressable
            onPress={() => {
              NiceModal.show(SignOutModal);
            }}
          >
            <Ionicons name="exit-outline" size={24} color="black" />
          </Pressable>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const SignOutModal = NiceModal.create(() => {
  const { hide, visible } = useModal();
  return (
    <Modal isVisible={visible}>
      <ThemedView
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <ThemedText style={{ fontWeight: "bold", fontSize: 20 }}>
          Are you sure you want to sign out?
        </ThemedText>
        <ThemedView style={{ margin: 10 }} />
        <ThemedView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Link href="/auth/login" asChild>
            <Button
              title="Yes"
              onPress={() => {
                hide();
              }}
            />
          </Link>
          <Button
            title="No"
            onPress={() => {
              hide();
            }}
          />
        </ThemedView>
      </ThemedView>
    </Modal>
  );
});
