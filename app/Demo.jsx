import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AxiosInstance from "../helpers/AxiosInstance";

const Demo = () => {
  const [cateGroup, setCateGroup] = useState([]);

  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      try {
        const response = await AxiosInstance().get("/product/listProductsByCategory");
        console.log("Dữ liệu API:", JSON.stringify(response.data, null, 2)); // Debug API
        setCateGroup(response.data);
      } catch (error) {
        console.error("Lỗi kết nối API:", error);
      }
    };
    fetchCategoriesAndProducts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={cateGroup}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{item.categoryName}</Text>
            <FlatList
              data={item.product}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.productContainer}>
                  <Text style={styles.productName}>{item.productName}</Text>
                  {item.images?.length > 0 ? (
                    <Image
                      source={{ uri: item.images[0] }} // Lấy ảnh đầu tiên trong mảng
                      style={styles.productImage}
                      resizeMode="contain"
                      onError={() => console.log("Lỗi tải ảnh:", item.images[0])}
                    />
                  ) : (
                    <Text style={styles.noImageText}>Không có ảnh</Text>
                  )}
                </View>
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  productName: {
    fontSize: 16,
    flex: 1,
    color: "#000",
  },
  productImage: {
    width: 100, // Điều chỉnh kích thước ảnh
    height: 100,
    borderRadius: 10,
    marginLeft: 10,
  },
  noImageText: {
    fontSize: 12,
    color: "gray",
  },
});
