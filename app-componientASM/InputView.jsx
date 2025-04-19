import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";

const InputView = ({
  placeholder,
  isSecurity = false,
  onChangeText = () => {},
  value,
  styles,
  keyboardType,
  maxLength = 255,
  placeholderTextColor = "#8B8B8B",
  marginT,
  marginB,
  marginL,
  marginR,

  ...props
}) => {
  return (
    <View style={{}}>
      <TextInput
        style={{
          ...styles,
          padding: 16,
          borderColor: "black",
          borderRadius: 8,
          borderWidth: 1,
          width: 300,
          marginTop: marginT,
          marginBottom: marginB,
          marginLeft: marginL,
          marginRight: marginR,
          justifyContent: "center",
        }}
        secureTextEntry={isSecurity}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        maxLength={maxLength}
        {...props}
      />
      {/* <TouchableOpacity>
        <Image source={require('')} />
      </TouchableOpacity> */}
    </View>
  );
};

export default InputView;
