import { Stack, Tabs } from "expo-router";
import { Text, Image } from "react-native";
export default function RootLayout() {
  return <Tabs
    screenOptions={({ route }) => {
      return {
        tabBarLabel: ({ focused }) => null,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0, // Ẩn đường viền trên
          height: 60,
          padding:10
        },
        tabBarIcon: ({ focused }) => {
          if (route.name.toString() == "1-Home") {
            return focused ? <Image source={require("../../assets/images/HomeCham.png")} style={{ width: 24, height: 35 }} />
              : <Image source={require("../../assets/images/HomeK.png")} style={{ width: 24, height: 24 }} />
          }
          else if (route.name.toString() == "2-Search") {
            return focused ? <Image source={require("../../assets/images/SearchCham.png")} style={{ width: 24, height: 35 }} />
              : <Image source={require("../../assets/images/SearchK.png")} style={{ width: 24, height: 24 }} />
          }
          else if (route.name.toString() == "3-Notice") {
            return focused ? <Image source={require("../../assets/images/NoticeCham.png")} style={{ width: 24, height: 35 }} />
              : <Image source={require("../../assets/images/NoticeK.png")} style={{ width: 24, height: 24 }} />
          }
          else if (route.name.toString() == "4-Account") {
            return focused ? <Image source={require("../../assets/images/AccountCham.png")} style={{ width: 24, height: 35 }} />
              : <Image source={require("../../assets/images/AccountK.png")} style={{ width: 24, height: 24 }} />
          }
        },
      };
    }} 
  />;
}
