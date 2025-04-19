import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from "react";
import { Link, useRouter } from "expo-router";
import ButtonLogin from '../app-componientASM/ButtonLogin'
import AxiosInstance from "../helpers/AxiosInstance";
import { Route } from 'expo-router/build/Route';
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const CheckLogin = async () => {
    console.log("Username:", email);
    console.log("Password:", password);
    try {
      const body = { email, password }
      console.log("Sending data:", body);
      const response = await AxiosInstance().post('/users/login', body)
      console.log(response)
      if (response.status == 200) {
        router.replace("/home/1-Home")

        window.history.pushState(null, "", "/home/1-Home");
        window.onpopstate = () => {
        window.history.pushState(null, "", "/home/1-Home");
        };
      }

    } catch (error) {

    }
  }


  return (
    <View>
      <ButtonLogin
      width="100%"
      imageW="https://s3-alpha-sig.figma.com/img/14cd/dd08/5af9eec0b0637d9d2a1737b0f3f8e123?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BTVXAZu7KMZgB1zgPD9cE4fvaolLfftbeWtz4m0jm9U-9SamVr1dZAnNTuMxd4xJLSxX7iIr9NEZSaT6ND32TcqB7-0hLM8L1~MHNCJ1D8uTGttTiW20GChKUL5uDdQTODq78PZtsMoD1mWMpdZeV0RezRVusFEloxq7JZDScfE7akAOHBn7kNdcJF8Si1N294YsTgncxBYHCzOsA6qpHj59~kggCzVWywF6FPq1BeGDU97YxVHsRsXeh7V4QLQxq3HnMp4cY3rAfQCkrlXob5WnxkyAh5wVnkFJlZOR3xskQ5ODAybW-3Zpf1BKyJb1BG923Q380zcfEFCFtTuMPA__"
      >
      </ButtonLogin>
    <View style={{ alignItems: "center", width: "100%", }}>
      <ButtonLogin
        title1="Chào mừng bạn"
        marginTop={30}
      ></ButtonLogin>
      <ButtonLogin
        title2="Đăng nhập tài khoản"
      ></ButtonLogin>

      <ButtonLogin
        placeholder1="Nhập email hoặc số điện thoại"
        borderColor="#8B8B8B"
        color="#8B8B8B"
        borderWidth={1}
        padding={15}
        width={300}
        radius={10}
        marginTop={15}
        username={email}
        setUsername={setEmail}
      />

      <ButtonLogin
        placeholder2="Nhập mật khẩu"
        borderColor="#8B8B8B"
        color="#8B8B8B"
        borderWidth={1}
        padding={15}
        width={300}
        radius={10}
        marginTop={15}
        password={password}
        setPassword={setPassword}
      ></ButtonLogin>

      <ButtonLogin
        title3="Nhớ tài khoản"
        title4="Quên mật khẩu?"
        width={300}
        flexDirection="row"
        justifyContent="space-between"
        marginTop={13}
      >
      </ButtonLogin>


      <ButtonLogin
        onPress={CheckLogin}
        justifyContent="center"
        marginTop={20}
        titleBT="Đăng nhập"
        width={300}
        height={50}
        background="#4CAF50"
        radius={15}
      >
      </ButtonLogin>


      <View style={{
        flexDirection: "row",
        alignItems: "center",
        width: "80%",
        marginVertical: 20
      }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#8B8B8B" }} />
        <Text style={{ marginHorizontal: 10, fontSize: 16 }}>Hoặc</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: "#8B8B8B" }} />
      </View>

      <ButtonLogin
        width={90}
        flexDirection="row"
        justifyContent="space-between"
        image1="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
        image2="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png"
      ></ButtonLogin>

      <Link href="/Register">
        <ButtonLogin
          title3="Bạn không có tài khoản"
          title4="Tạo tài khoản"
          width={250}
          flexDirection="row"
          justifyContent="space-between"
          marginTop={30}
        >
        </ButtonLogin>
      </Link>
    </View>
    </View>
    
  )
}

export default Login

const styles = StyleSheet.create({})