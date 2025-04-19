import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useProductContext } from "../ProductContext"; // Import Context

const ItemProductHome = ({ index, item }) => {
  const router = useRouter();
  const { setSelectedProduct } = useProductContext(); // Dùng hàm để cập nhật sản phẩm

  // Lấy danh mục đầu tiên (nếu có)
  const displayedCategory =
    item?.category?.length > 0 ? item.category[0].name : "Không có danh mục";

  // Xử lý khi nhấn vào sản phẩm
  const handlePress = () => {
    if (!item) {
      console.log("Lỗi: Không tìm thấy dữ liệu sản phẩm!");
      return;
    }
    
    setSelectedProduct(item); // Lưu sản phẩm vào context
    router.push("/ProductDetail"); // Chuyển hướng
  };
  

  return (
    <TouchableOpacity onPress={handlePress}>  
      <View
        style={{
          width: 165,
          height: 217,
          margin: 15,
        }}
        key={index}
      >
        {/* Hiển thị ảnh sản phẩm */}
        {item?.images?.length > 0 ? (
          <Image
            source={{ uri: item.images[0] }}
            style={{
              width: 165,
              height: 145,
              borderRadius: 8,
            }}
            resizeMode="contain"
            onError={() => console.log("Lỗi tải ảnh:", item.images[0])}
          />
        ) : (
          <Text style={{ fontSize: 12, color: "gray" }}>Không có ảnh</Text>
        )}

        {/* Hiển thị tên sản phẩm */}
        <Text
          style={{
            fontSize: 14,
            fontFamily: "lato",
            lineHeight: 20,
            paddingTop: 3,
          }}
        >
          {item?.productName} {/* Cập nhật tên sản phẩm đúng với API */}
        </Text>

        {/* Hiển thị danh mục đầu tiên */}
        <Text style={{ fontSize: 12, color: "#7D7B7B", paddingTop: 2 }}>
          {displayedCategory}
        </Text>

        {/* Hiển thị giá sản phẩm */}
        <Text
          style={{
            fontSize: 16,
            fontFamily: "lato",
            lineHeight: 20,
            color: "#007537",
            paddingTop: 3,
          }}
        >
          {item?.price}đ
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemProductHome;
