import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0c0f14",
          borderTopWidth: 0,
          height: 60,
        },
      }}
    />
  );
}
