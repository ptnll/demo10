import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#53B175", // Mã màu xanh lá cây tương tự trong ảnh
    paddingVertical: 18,
    width: "100%", // Nút trải dài toàn bộ chiều ngang (đã trừ đi padding của container)
    borderRadius: 15, // Bo góc mềm mại hơn
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
});