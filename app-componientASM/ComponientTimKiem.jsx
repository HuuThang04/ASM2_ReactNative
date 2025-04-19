import { StyleSheet, Text, View,TextInput,Image } from 'react-native'
import React from 'react'

const ComponientTimKiem = (props) => {
     
    const { onPress,timkiem=false,placeholder,value,onText,flex,lichsu=false,
        padding, height, width, background, radius, borderColor, marginTop, borderWidth, color,
        alignItems, justifyContent, flexDirection, textAlign, numberOfLines, alignContent,
        position, zIndex, } = props
    const style = {
        backgroundColor: background,
        height: height,
        width: width,
        color: color,
        padding: padding,
        borderRadius: radius,
        marginTop: marginTop,
        borderColor: borderColor,
        borderWidth: borderWidth,
        alignItems: alignItems,
        justifyContent: justifyContent,
        flexDirection: flexDirection,
        textAlign: textAlign,
        numberOfLines: numberOfLines,
        alignContent: alignContent,
        position: position,
        zIndex: zIndex,
        flex:flex
    }
  return (
    <View>
      {
        timkiem&&<View style={{width:"100%",alignItems:"center",marginTop:30}}> 
            <View style={{width:"80%"}}>
            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems: "center"}}>
            <TextInput
                    style={style}
                    numberOfLines={1}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onText}></TextInput>
            <Image
            source={require('../assets/images/search.png')}
            style={{width:25,height:25}}
            ></Image>
            </View>
            <View style={{ height: 1, backgroundColor: "black" ,marginTop: 5}} />
            </View>
        </View>
      }
      {
        lichsu&&<View style={style}>
          <View style={{width:"80%"}}>
          <Text style={{fontSize:19,fontWeight:"500"}}>Lịch sử tìm kiếm</Text>
          </View>
        </View>
      }
    </View>
  )
}

export default ComponientTimKiem

const styles = StyleSheet.create({})