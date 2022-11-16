import { StyleSheet, Text, View, Button, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import GlobalStyles from "../contans/styles";
import Images from "../contans/image";
import Ionicons from "@expo/vector-icons/Ionicons";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          source={Images.profile.clubCard}
          style={{
            borderRadius: 15,
            width: "100%",
            height: 200,
          }}
          resizeMode={"contain"}
        />
      </View>

      <Pressable onPress={() => navigation.navigate("Current Offer")}>
        <View style={styles.offerContainer}>
          <View>
            <Text style={styles.title}>Current Offer</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Show all </Text>
            <Ionicons
              name="arrow-forward-circle-outline"
              size={24}
              color="black"
            />
          </View>
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("My benefits")}>
        <View style={styles.benefitsContainer}>
          <Text style={styles.title}>My Benefints</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 15,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginVertical: 25,
  },
  offerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 25,
  },
  benefitsContainer: {
    paddingBottom: 25,
  },
  title: {
    fontSize: 18,
  },
});
