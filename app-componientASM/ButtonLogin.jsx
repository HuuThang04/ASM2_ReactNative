import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'


const ButtonLogin = (props) => {
    const { onPress,name,setName, username,setUsername,phone,setPhone,password, setPassword,imageW,imageW2,
        padding, height, width, background, radius, placeholder0,placeholder0_5, placeholder1, placeholder2, borderColor, marginTop, borderWidth, color,
        alignItems, justifyContent, flexDirection,textAlign,numberOfLines } = props
    const { titleBT, title1, title2, title3, title4, image, image1, image2 } = props
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
        textAlign:textAlign,
        numberOfLines:numberOfLines
    }
    return (
        <View>
            {
                imageW&&
                <View style={style}>
                    {imageW ? (
                    <Image
                        source={{ uri: imageW }}
                        style={{ width:"110%", height: 360,borderBottomRightRadius:2000}}
                    />
                ) : null}
                </View>
            }
             {
                imageW2&&
                <View style={style}>
                    {imageW2 ? (
                    <Image
                        source={{ uri: imageW2 }}
                        style={{ width:"110%", height: 220,borderBottomRightRadius:20000}}
                    />
                ) : null}
                </View>
            }
            {
                title1 &&
                <View style={{ marginTop }}>
                    <Text style={{ textAlign: "center", fontSize: 30, fontWeight: 700 }}>{title1}</Text>
                </View>
            }
            {
                title2 &&
                <View style={{ marginTop }}>
                    <Text style={{ textAlign: "center", fontSize: 18 }}>{title2}</Text>

                </View>
            }
            {
                placeholder0 &&
                <TextInput
                    style={style}
                    numberOfLines={1}
                    placeholder={placeholder0}
                    value={name}
                    onChangeText={setName}></TextInput>
            }
            {
                placeholder1 &&
                <TextInput
                    style={style}
                    numberOfLines={1}
                    placeholder={placeholder1}
                    value={username}
                    onChangeText={setUsername}></TextInput>
            }
            {
                placeholder0_5 &&
                <TextInput
                    style={style}
                    numberOfLines={1}
                    placeholder={placeholder0_5}
                    value={phone}
                    onChangeText={setPhone}></TextInput>
            }      
            {
                placeholder2 &&
                <TextInput
                    style={style}
                    numberOfLines={1}
                    placeholder={placeholder2}
                    value={password}
                    onChangeText={setPassword}></TextInput>
            }
            {
                title3 &&
                <View style={style}>
                    <View style={{ color: "#949090" }}><Text>{title3}</Text></View>
                    <View style={{ color: "#009245" }}><Text>{title4}</Text></View>
                </View>
            }
            {
                titleBT &&
                <TouchableOpacity onPress={onPress} style={style}>
                    <Text style={{ textAlign: "center", fontSize: 20, fontWeight: 700, color: "#FFFFFF" }}>{titleBT}</Text>
                </TouchableOpacity>
            }
            {
                image1 && <View style={style}>
                    {image1 ? (
                        <Image
                            source={{ uri: image1 }}
                            style={{ width: 30, height: 30, marginTop: 10 }}
                        
                        />
                    ) : null}
                    {image2 ? (
                        <Image
                            source={{ uri: image2 }}
                            style={{ width: 30, height: 30, marginTop: 10 }}
                            
                        />
                    ) : null}
                </View>
            }


        </View>

    )
}

export default ButtonLogin

const styles = StyleSheet.create({})