import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useRouter } from "expo-router";
import ButtonLogin from "../app-componientASM/ButtonLogin";
import AxiosInstance from "../helpers/AxiosInstance";
import { Route } from "expo-router/build/Route";
import InputView from "../app-componientASM/InputView";
const Register = () => {
  // **Đổi tên component thành Register cho đúng chức năng**
  const [fullname, setFullname] = useState(""); // **Sửa lại setFullname cho đồng nhất**
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState(""); // **Thêm state để hiển thị lỗi**

  const router = useRouter();

  const CheckRegister = async () => {
    setError(""); // **Reset lỗi trước mỗi lần đăng ký**
    console.log("Fullname:", fullname);
    console.log("Email:", email);
    console.log("Password:", password);

    if (!fullname || !email || !password) {
      // **Kiểm tra các trường bắt buộc**
      setError("Vui lòng điền đầy đủ thông tin.");
      return; // Dừng việc đăng ký nếu thiếu thông tin
    }

    if (password !== rePassword) {
      setError("Mật khẩu nhập lại không đúng.");
      return; // Dừng việc đăng ký nếu mật khẩu nhập lại không đúng
    }

    try {
      const body = { fullname, email, password };
      console.log("Sending data:", body);
      const response = await AxiosInstance().post("/users/register", body);
      console.log(response.data);

      if (response.status === 201 || response.status === 200) {
        // **Sửa lỗi check status và kiểm tra mã 201 hoặc 200**
        console.log("Đăng ký thành công!");
        router.replace("/Login"); // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
      } else {
        // **Xử lý lỗi từ server (nếu có)**
        setError(
          `Đăng ký thất bại. ${response.data?.message || "Lỗi không xác định"}`
        );
        console.error("Đăng ký thất bại:", response.status, response.data);
      }
    } catch (error) {
      // **Xử lý lỗi kết nối hoặc lỗi khác**
      setError(`Lỗi đăng ký: ${error.message}`);
      console.error("Lỗi đăng ký:", error);
    }
  };
  return (
    <View>
      <ButtonLogin
        width="100%"
        imageW2="https://s3-alpha-sig.figma.com/img/14cd/dd08/5af9eec0b0637d9d2a1737b0f3f8e123?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BTVXAZu7KMZgB1zgPD9cE4fvaolLfftbeWtz4m0jm9U-9SamVr1dZAnNTuMxd4xJLSxX7iIr9NEZSaT6ND32TcqB7-0hLM8L1~MHNCJ1D8uTGttTiW20GChKUL5uDdQTODq78PZtsMoD1mWMpdZeV0RezRVusFEloxq7JZDScfE7akAOHBn7kNdcJF8Si1N294YsTgncxBYHCzOsA6qpHj59~kggCzVWywF6FPq1BeGDU97YxVHsRsXeh7V4QLQxq3HnMp4cY3rAfQCkrlXob5WnxkyAh5wVnkFJlZOR3xskQ5ODAybW-3Zpf1BKyJb1BG923Q380zcfEFCFtTuMPA__"
      ></ButtonLogin>
      <View style={{ alignItems: "center", width: "100%", flex: 1 }}>
        <ButtonLogin title1="Đăng ký"></ButtonLogin>
        <ButtonLogin marginTop={10} title2="Tạo tài khoản"></ButtonLogin>

        <InputView
          onChangeText={setFullname}
          value={fullname}
          marginT={20}
          placeholder={"Nhập Họ tên"}
        />

        <InputView
          onChangeText={setEmail}
          value={email}
          marginT={20}
          placeholder={"Nhập Email"}
        />

        <InputView
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          marginT={20}
          placeholder={"Nhập Mật khẩu"}
          isSecurity={true}
        />

        <InputView
          secureTextEntry={true}
          onChangeText={setRePassword}
          value={rePassword}
          marginT={20}
          placeholder={"Nhập Lại Mật khẩu"}
          isSecurity={true}
        />

        <ButtonLogin
          title3={
            <Text
              style={{ color: "black", textAlign: "center" }}
              numberOfLines={2}
            >
              Để đăng ký tài khoản, bạn đồng ý{" "}
              <Text style={{ color: "#009245" }}>Terms & Condition</Text> và{" "}
              <Text style={{ color: "#009245" }}>Privacy Policy</Text>
            </Text>
          }
          width={300}
          textAlign="center"
          justifyContent="space-between"
          marginTop={13}
        ></ButtonLogin>

        <ButtonLogin
          onPress={CheckRegister}
          justifyContent="center"
          marginTop={20}
          titleBT="Đăng ký"
          width={300}
          height={50}
          background="#4CAF50"
          radius={15}
        ></ButtonLogin>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "80%",
            marginVertical: 20,
          }}
        >
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

        <Link href="/Login">
          <ButtonLogin
            title3="Tôi đã có tài khoản"
            title4="Đăng nhập"
            width={200}
            flexDirection="row"
            justifyContent="space-between"
            marginTop={30}
          ></ButtonLogin>
        </Link>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
