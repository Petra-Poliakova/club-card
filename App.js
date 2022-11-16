import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "./contans/styles";

import {
  Feather,
  AntDesign,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import Home from "./screens/Home";
import CurrentOffer from "./screens/CurrentOffer";
import MyBenefits from "./screens/MyBenefits";
import Offer from "./screens/Offer";
import ShoppingList from "./screens/ShoppingList";
import Profil from "./screens/Profil";

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary800 },
        headerTintColor: GlobalStyles.colors.white,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.light200 },
        tabBarLabelStyle: { fontSize: 14, fontWeight: "500" },
        tabBarInactiveTintColor: GlobalStyles.colors.primary800,
        tabBarActiveTintColor: GlobalStyles.colors.secondary600,
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Offer"
        component={Offer}
        options={{
          title: "Offer",
          tabBarLabel: "Offer",
          tabBarIcon: ({ color, size }) => (
            <Feather name="percent" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="List"
        component={ShoppingList}
        options={{
          title: "Shopping list",
          tabBarLabel: "List",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Profil"
        component={Profil}
        options={{
          title: "Profil",
          tabBarLabel: "Profil",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tab navigation"
            component={BottomTabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Current Offer" component={CurrentOffer} />
          <Stack.Screen name="My benefits" component={MyBenefits} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

/* "splash": {
  "image": "./assets/splashscreen_image.png",
  "resizeMode": "contain",
  "backgroundColor": "#09184d"
}, */
