import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import { GlobalStyles } from "../contans/styles";
import Images from "../contans/image";
import Ionicons from "@expo/vector-icons/Ionicons";
import Products from "../store/products";
import ProductItem from "../components/ProductItem";

const Home = () => {
  const navigation = useNavigation();

  const renderItem = ({ title }) => {
    <Text>{title}</Text>;
  };

  return (
    <ScrollView>
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

        <View style={styles.offerContainer}>
          <View style={styles.offerTitle}>
            <View>
              <Text style={styles.title}>Current Offer</Text>
            </View>
            <Pressable onPress={() => navigation.navigate("Current Offer")}>
              <View style={{ flexDirection: "row" }}>
                <Text>Show all </Text>
                <Ionicons
                  name="arrow-forward-circle-outline"
                  size={24}
                  color="black"
                />
              </View>
            </Pressable>
          </View>

          <View style={styles.flatList}>
            <FlatList
              data={Products.slice(0, 5)}
              renderItem={(items) => (
                <ProductItem
                  title={items.item.title}
                  img={items.item.img}
                  priceNew={items.item.priceNew}
                  priceOld={items.item.priceOld}
                  discount={items.item.discount}
                />
              )}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>

        <View style={styles.benefitsContainer}>
          <View style={styles.benefitsCard}>
            <View>
              <Image
                source={Images.profile.myBenefit}
                style={{
                  width: "100%",
                  height: 100,
                  borderTopLeftRadius: 9,
                  borderTopRightRadius: 9,
                }}
                resizeMode={"cover"}
              />
            </View>
            <Pressable onPress={() => navigation.navigate("My benefits")}>
              <View style={styles.benefitsTextBox}>
                <View style={styles.benefitTitle}>
                  <Text style={styles.title}>My Benefints</Text>
                  <Text style={styles.benefitText}>
                    Redeem coupons and save
                  </Text>
                </View>
                <View style={styles.icon}>
                  <Ionicons
                    name="arrow-forward-circle-outline"
                    size={24}
                    color="black"
                  />
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 15,
  },
  flatList: {
    flexDirection: "row",
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginTop: 15,
    marginBottom: 25,
  },
  offerContainer: {
    paddingBottom: 25,
  },
  offerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 15,
  },
  benefitsContainer: {
    paddingBottom: 25,
  },
  benefitsCard: {
    width: "100%",
    height: 200,
    borderWidth: 1,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: GlobalStyles.colors.white,
  },
  benefitsTextBox: {
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  benefitTitle: {
    paddingTop: 10,
  },
  benefitText: {
    paddingVertical: 10,
  },
  icon: {
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary800,
  },
});
