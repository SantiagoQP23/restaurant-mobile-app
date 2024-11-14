import React from "react";
import { Text, useWindowDimensions } from "react-native";
import { AppBar, TabBarIcon, ThemedView } from "@/components";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { SectionView } from "@/src/features/cart/presentation/components/SectionView";

// const routes = [
//   { key: "first", title: "First" },
//   { key: "second", title: "Second" },
// ];

const sections = [
  { name: "Drinks" },
  { name: "Appetizers" },
  { name: "Main Course" },
  { name: "Desserts" },
  { name: "Extras" },
];

export default function Menu() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const routes = sections.map((section) => ({
    key: section.name,
    title: section.name,
  }));
  const renderScene = SceneMap(
    Object.fromEntries(sections.map((section) => [section.name, SectionView]))
  );
  return (
    <ThemedView>
      <AppBar title="Menu" backButton />
      <ThemedView style={{ height: "100%" }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              style={{}}
              scrollEnabled
              labelStyle={{ textDecorationColor: "red" }}
              tabStyle={{}}
              // activeColor=""
            />
          )}
        />
      </ThemedView>
      <Text>menu</Text>
    </ThemedView>
  );
}
