import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemProductHome from "./ItemProductHome";

const ItemCateHome = ({index, item}) => {
  return (
    <View key={index}
    style={{
        
    }}>
      <Text
      style={{
        fontWeight: "lato",
        fontSize: 20,
        lineHeight: 34,
        marginLeft: 20,
      }}>{item?.categoryName}</Text>
      <FlatList
        data={item?.product}
        numColumns={2}

        renderItem={({ item, index }) => {
          return (
            <ItemProductHome index={index} item={item}/>
          );
        }}
      />
    </View>
  );
};

export default ItemCateHome;

const styles = StyleSheet.create({});
