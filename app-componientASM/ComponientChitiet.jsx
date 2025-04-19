import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ComponientChitiet = (props) => {
    
    const { onPress, title = false, image = false, selectedProduct,
        padding, height, width, background, radius, borderColor, marginTop, borderWidth, color,
        alignItems, justifyContent, flexDirection, textAlign, numberOfLines, alignContent,
        position, zIndex, } = props
    const { widthBack, widthHeader, widthIcon, bottomBack,
         back = false, detail = false, buttonMua = false,
    } = props

    // Kiểm tra dữ liệu đầu vào
    console.log("Dữ liệu selectedProduct:", selectedProduct);

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
        bottom: bottomBack
    }

    // Kiểm tra nếu `selectedProduct` là `undefined`
   

    return (
        <View>
            {
                title && <View style={style}>
                    <View style={{ alignItems: "center", width: widthBack }}>
                        <TouchableOpacity onPress={onPress}>
                            <Image
                                source={require("../assets/images/Back.png")}
                                style={{ width: 30, height: 30 }}
                            />
                        </TouchableOpacity>
                    </View >
                    <View style={{ width: widthHeader }}>
                        <Text style={{ textAlign: "center", fontSize: 20 }}>
                            {selectedProduct?.name ?? title}
                        </Text>
                    </View>
                    <View style={{ width: widthIcon, alignItems: "center" }}>
                        <Image
                            source={require("../assets/images/icShop.png")}
                            style={{ width: 48, height: 48 }}
                        />
                    </View>
                </View>
            }
            {
                image && <View style={style}>
                    {selectedProduct?.imageUrl ? (
                        <Image
                            source={{ uri: selectedProduct.imageUrl }}
                            style={{ width: "70%", height: 305 }}
                        />
                    ) : null}
                </View>
            }
            {
                detail && <View style={style}>
                    <View style={{ width: "80%" }}>
                        <View style={{ flexDirection: "row", width: 190, justifyContent: "space-between" }}>
                            <View style={{ width: 90, height: 40, backgroundColor: "#009245", borderRadius: 10, justifyContent: "center" }}>
                                <Text style={{ fontSize: 16, textAlign: "center", color: "white" }}>
                                    {selectedProduct?.categoryAll?.name ?? "Không xác định"}
                                </Text>
                            </View>
                            <View style={{ width: 90, height: 40, backgroundColor: "#009245", borderRadius: 10, justifyContent: "center" }}>
                                <Text style={{ fontSize: 16, textAlign: "center", color: "white" }}>
                                    {selectedProduct?.category?.name ?? "Không xác định"}
                                </Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{ color: "#007537", fontSize: 26, fontWeight: "500", marginTop: 30 }}>
                                {selectedProduct?.price ?? 0}đ
                            </Text>
                        </View>

                        <Text style={{ fontSize: 20, fontWeight: "400", marginTop: 20 }}>Chi tiết sản phẩm</Text>
                        <View style={{ width: "100%", height: 1, backgroundColor: "#221F1F", marginTop: 4 }}></View>

                        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", marginTop: 17 }}>
                            <Text style={{ fontSize: 19 }}>Kích cỡ</Text>
                            <Text style={{ fontSize: 19 }}>Nhỏ</Text>
                        </View>

                        <View style={{ width: "100%", height: 1, backgroundColor: "#221F1F", marginTop: 4 }}></View>

                        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", marginTop: 17 }}>
                            <Text style={{ fontSize: 19 }}>Xuất xứ</Text>
                            <Text style={{ fontSize: 19 }}>Châu phi</Text>
                        </View>

                        <View style={{ width: "100%", height: 1, backgroundColor: "#221F1F", marginTop: 4 }}></View>

                        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", marginTop: 17 }}>
                            <Text style={{ fontSize: 19 }}>Tình trạng</Text>
                            <Text style={{ fontSize: 19, color: "#007537" }}>Còn 156 sp</Text>
                        </View>
                        <View style={{ width: "100%", height: 1, backgroundColor: "#221F1F", marginTop: 4 }}></View>
                    </View>
                </View>
            }
            {
                buttonMua && (
                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity onPress={onPress} style={style}>
                            <Text style={{ textAlign: "center", fontSize: 23, color: "white" }}>CHỌN MUA</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    )
}

export default ComponientChitiet

const styles = StyleSheet.create({})
