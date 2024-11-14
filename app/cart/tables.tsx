import { AppBar, ThemedText, ThemedView } from "@/components";
import { TableCard } from "@/src/features/cart/presentation/components/TableCard";
import React from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";

// Gap stuff
const { width } = Dimensions.get("window");
const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width;
// const childWidth = (windowWidth - totalGapSize) / itemPerRow;
const childWidth = "48%"

export default function TablesScreen() {
  const [activeTable, setActiveTable] = React.useState<number | null>(null);
  const items = [
    {
      id: 1,
      title: "Item 1",
      backgroundColor: "red",
    },
    {
      id: 2,
      title: "Item 2",
      backgroundColor: "green",
    },
    {
      id: 3,
      title: "Item 3",
      backgroundColor: "blue",
    },
    {
      id: 4,
      title: "Item 4",
      backgroundColor: "yellow",
    },
    {
      id: 5,
      title: "Item 5",
      backgroundColor: "orange",
    },
  ];
  return (
    <ThemedView>
      <AppBar title="Tables" backButton />
      <ThemedView style={{ height: "100%", padding: 8 }}>
        <ScrollView contentContainerStyle={styles.itemsWrap}>
          {items.map((item) => (
            <ThemedView style={styles.singleItem} key={item.id}>
              <TableCard selected={item.id === activeTable}  onClick={()=> setActiveTable(item.id)}/>
            </ThemedView>
          ))}
        </ScrollView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  itemsWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: gap,
    flexWrap: "wrap",
    // marginVertical: -(gap / 2),
    // marginHorizontal: -(gap / 2),
  },
  singleItem: {
    // marginHorizontal: gap / 2,
    minWidth: childWidth,
    maxWidth: childWidth,
  },
});
