import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { GlobalStyles } from "../contans/styles";

const ProductItem = ({ title, img, priceOld, priceNew, discount }) => {
  var discount = () => {
    return Math.floor(100 - (priceNew / priceOld) * 100);
  };

  return (
    <View style={styles.cardScreen}>
      <View style={styles.discount}>
        <Text style={styles.discountText}>- {discount()} %</Text>
      </View>
      <View>
        <Image
          source={img}
          style={{
            width: 150,
            height: 150,
          }}
          resizeMode={"cover"}
        />
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.price}>
        <Text style={styles.priceNew}>{priceNew} €</Text>
        <Text style={styles.priceOld}>{priceOld} €</Text>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  cardScreen: {
    margin: 5,
    padding: 10,
    borderColor: GlobalStyles.colors.light400,
    borderWidth: 1,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: GlobalStyles.colors.white,
    zIndex: 1,
  },
  discount: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: GlobalStyles.colors.secondary600,
    zIndex: 9,

    //alignContent: "flex-end",
  },
  discountText: {
    color: GlobalStyles.colors.white,
  },
  title: {
    fontWeight: "bold",
    paddingVertical: 5,
    color: GlobalStyles.colors.primary800,
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceNew: {
    fontSize: 16,
    color: GlobalStyles.colors.accent,
    fontWeight: "bold",
  },
  priceOld: {
    textDecorationStyle: "solid",
    textDecorationLine: "line-through",
    textDecorationColor: GlobalStyles.colors.grey800,
  },
});
