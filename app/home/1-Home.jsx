import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HomeCP from "@/app-componientASM/ComponientHome";
import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import AxiosInstance from "../../helpers/AxiosInstance";
import { useProductContext } from "../ProductContext";
import { useRouter } from "expo-router";
import ListCateHome from "../components/ListCateHome";

const Home = () => {
  const [cateGroup, setCateGroup] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setSelectedProduct } = useProductContext(); // Lấy setSelectedProduct từ context
  const router = useRouter(); // Dùng để chuyển trang

  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await AxiosInstance().get("/product/listProductsByCategory");
        if (response.status === 200) {
          setCateGroup(response.data);
        } else {
          setError(`Lỗi khi tải danh mục và sản phẩm. Mã trạng thái: ${response.status}`);
          console.error("Lỗi khi tải danh mục và sản phẩm:", response.status, response.data);
        }
      } catch (error) {
        setError(`Lỗi kết nối API: ${error.message}`);
        console.error("Lỗi kết nối API:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoriesAndProducts();
  }, []);

  // Hàm xử lý khi bấm vào sản phẩm
  const handleProductPress = (product) => {
    setSelectedProduct(product); // Lưu sản phẩm vào context
    router.push("/(children)/ProductDetail"); // Chuyển sang trang chi tiết
  };

  return (
    <ScrollView>
      <View style={{ backgroundColor: "#FFFFFF", width: "100%", height: "100%" }}>
        <View>
          <View style={{ backgroundColor: "#F6F6F6" }}>
            <HomeCP
              title1="Planta-Tỏa sáng không gian nhà bạn"
              title2="Xem hàng mới về"
              image1="https://s3-alpha-sig.figma.com/img/3084/d533/3c5e831f02921d6fe59087cc1e9b8e20?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ofRQs-6oQE12fbymBtx~wvZqd-Sv9zgVA272~Sn00NMm9Un4SnnNLarbK3FgAC7sv1g6Imwri9Wp6gwuzBMzGYvy3BafOmZ20vfAuDMqDAlBqG2OxMOFGTJkq4fE2aqteCPpUp0KlO1nYQvYozVfU5REffmki5ZmSLKYV3pye46ZaQYir647XhVtoEwCWWr4N0hcRbZ0U4LyO1i7JkAIiQ45DjpaDWrYoOKu7hv2EfXmRyG9~gdgtnB4dJUHUUwdCpwU6~5KyDmsMzivhaVkxxyb-h7wA6WtRDPn8Z17pRekrSM~s6drApbxNKwQdbrxKqjHfkgUyvPFpVwi55pJrA__"
            />
          </View>

          {/* Hiển thị danh sách sản phẩm */}
          <FlatList
  data={cateGroup}
  keyExtractor={(item, index) => (item?.id ? item.id.toString() : index.toString())} // Kiểm tra item.id
  renderItem={({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item)}>
      <ListCateHome
        data={[item]}
        styles={{ marginTop: 20, marginHorizontal: 24 }}
      />
    </TouchableOpacity>
  )}
/>

        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
