import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemCateHome from "./ItemCateHome";

const ListCateHome = ({ data, styles, ...props }) => {
  if (data.length === 0) {
    return null; // Skip empty categories and products if no data is provided. This can be customized as needed.
  }
  return (
    <View style={styles}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          if (item?.product?.length == 0) {
            return null; // Skip empty categories and products
          }
          return <ItemCateHome index={index} item={item} />;
        }}
      />
    </View>
  );
};

export default ListCateHome;

const styles = StyleSheet.create({});
