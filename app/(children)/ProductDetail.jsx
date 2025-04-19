import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Detail from '../../app-componientASM/ComponientChitiet'
import { Link, useRouter } from "expo-router";
import { useProductContext } from '../ProductContext'; 

const ProductDetail = () => {
  const router = useRouter();
  const {selectedProduct}= useProductContext();

  return (
    <View style={{backgroundColor:"white",height:"100%",}}>
      <Detail
      title={true}
      flexDirection="row"
      width="100%"
      height={55}
      widthBack="15%"
      widthHeader="65%"
      widthIcon="20%"
      alignItems="center"
      background="#FFFFFF"
      selectedProduct={selectedProduct}
      onPress={()=>router.replace("/home/1-Home")}
      >
      </Detail>


      <Detail
      image={true}
      selectedProduct={selectedProduct}
      background="white"
      width="100%"
      alignItems="center"
     >
      </Detail>


      <Detail
      back={true}
      alignItems="center"
      position="relative"
      bottomBack={70}
      ></Detail>

      <Detail
      detail={true}
      width="100%"
      height="auto"
      alignItems="center"
      marginTop={16}
      selectedProduct={selectedProduct}
      ></Detail>

      <Detail
      buttonMua={true}
      width="90%"
      height={60}
      background="#007537"
      radius={13}
      marginTop={25}
      justifyContent="center"
      ></Detail>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})