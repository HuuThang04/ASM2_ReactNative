import { Stack } from "expo-router";
import { ProductProvider } from "./ProductContext";  // Import đúng đường dẫn

export default function RootLayout() {
  return (
    <ProductProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </ProductProvider>
  );
}
