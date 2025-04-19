import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const ComponientHome = (props) => {
    const { onPress, name, setName, email, setEmail, phone, setPhone, password, setPassword,
        padding, height, width, background, radius, placeholder0, placeholder0_5, placeholder1, placeholder2, borderColor, marginTop, borderWidth, color,
        alignItems, justifyContent, flexDirection, textAlign, numberOfLines, fontSize, fontWeight, marginRight, marginLeft, margin } = props
    const { title1, title2, title3, image1, imageHeight, imageWidth, bgimage, pdimage, product } = props
    const { cItemGia, wItemGia, fItemGia, cItemTen, wItemTen, fItemTen, cItemTL, wItemTL, fItemTL, } = props

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
        fontSize: fontSize,
        fontWeight: fontWeight,
        marginRight: marginRight,
        marginLeft: marginLeft,
        margin: margin,

    }
    return (
        <View>
            {
                title1 && <View style={style}>
                    <View style={{ position: "relative" }}>
                        <View style={{ position: "absolute", zIndex: 10, flexDirection: "row", justifyContent: "space-between", padding: 20 }}>
                            <View style={{ width: "60%", marginTop: 55, }}>
                                <Text style={{ fontSize: 24, fontWeight: "500", numberOfLines: 2 }}>{title1}</Text>
                                <Text style={{ fontSize: 16, color: "#007537", fontWeight: "500" }}>{title2}</Text>
                            </View>
                            <View>
                                <Image
                                    source={require("../assets/images/icShop.png")}
                                    style={{ width: 48, height: 48, marginTop: 40, }}
                                />
                            </View>
                        </View>

                        <View>
                            {image1 ? (
                                <Image
                                    source={{ uri: image1 }}
                                    style={{ width: "100%", height: 205, marginTop: 110, }}
                                />
                            ) : null}
                        </View>
                    </View>
                </View>
            }
            {
                title3 && <View style={style}>
                    <Text style={style}>{title3}</Text>
                </View>
            }
            <View style={{ alignItems: "center", }}>
                <FlatList
                    style={{ width: "90%" }}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    data={product}
                    numColumns={2}
                    keyExtractor={(item) => item._id.toString()}
                    ItemSeparatorComponent={() => <View style={{ height: 20 }} />}/*Khoảng cách dọc giữa các item*/
                    renderItem={({ item }) => (
                        <TouchableOpacity style={style} onPress={() => onPress(item)}> 
                                <View style={{ width: "100%", backgroundColor: "#F6F6F6", alignItems: "center" }}>
                                    <Image source={{ uri: item.imageUrl }}
                                        style={{
                                            width: imageWidth,
                                            height: imageHeight,
                                            backgroundColor: bgimage,
                                        }} />
                                </View>
                                <View>
                                    <Text style={{
                                        fontSize: fItemTen,
                                        color: cItemTen,
                                        fontWeight: wItemTen,
                                    }}>{item.name}</Text>
                                    <Text
                                        style={{
                                            fontSize: fItemTL,
                                            color: cItemTL,
                                            fontWeight: wItemTL,
                                        }}>{item.category.name}</Text>
                                    <Text
                                        style={{
                                            fontSize: fItemGia,
                                            color: cItemGia,
                                            fontWeight: wItemGia,
                                        }}>{item.price} VNĐ</Text>
                                </View>
                            
                        </TouchableOpacity>
                    )}
                >
                </FlatList>
            </View>
        </View>
    )
}

export default ComponientHome

const styles = StyleSheet.create({})