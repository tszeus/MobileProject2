import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "./navigation/home";
import SearchTab from "./navigation/search";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "ios-search" : "ios-search-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          labelPosition: "below-icon",
        })}
      >
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Search" component={SearchTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
