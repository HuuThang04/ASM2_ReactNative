import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchCP from "../../app-componientASM/ComponientChitiet"
import SearchButton from "../../app-componientASM/ComponientTimKiem"
import { Link, useRouter } from "expo-router";
const Search = () => {
  const router = useRouter();
  return (
    <View style={{backgroundColor:"white",width:"100%",height:"100%"}}>
      <SearchCP
      title="Tìm kiếm"
      flexDirection="row"
      width="100%"
      height={55}
      widthBack="15%"
      widthHeader="65%"
      widthIcon="20%"
      alignItems="center"
      background="#FFFFFF"
      onPress={()=>router.replace("/home/1-Home")}
      ></SearchCP>
      <SearchButton
      timkiem={true}
      placeholder="Tìm kiếm"
      width="90%"
      height={30}
      flex={1}
      ></SearchButton>
      <SearchButton
      lichsu={true}
      marginTop={30}
      width="100%"
      alignItems="center"
      ></SearchButton>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})