import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";

export default function SelectLocationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Nút Back */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
        activeOpacity={0.7}
      >
        <Ionicons name="chevron-back" size={28} color="#181725" />
      </TouchableOpacity>

      {/* Ảnh minh họa bản đồ */}
      <View style={styles.imageContainer}>
        <Image 
          // Bạn có thể thay link này bằng ảnh local, ví dụ: require('../assets/map_pin.png')
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/854/854878.png" }} 
          style={styles.illustration}
        />
      </View>

      {/* Tiêu đề & Mô tả */}
      <Text style={styles.title}>Select Your Location</Text>
      <Text style={styles.desc}>
        Switch on your location to stay in tune with{"\n"}what's happening in your area
      </Text>

      {/* Dropdown: Your Zone */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Your Zone</Text>
        <TouchableOpacity style={styles.dropdownRow} activeOpacity={0.7}>
          <Text style={styles.value}>Banasree</Text>
          <Ionicons name="chevron-down" size={20} color="#7C7C7C" />
        </TouchableOpacity>
      </View>

      {/* Dropdown: Your Area */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Your Area</Text>
        <TouchableOpacity style={styles.dropdownRow} activeOpacity={0.7}>
          {/* Dùng style riêng cho placeholder để chữ mờ hơn */}
          <Text style={styles.placeholder}>Types of your area</Text>
          <Ionicons name="chevron-down" size={20} color="#7C7C7C" />
        </TouchableOpacity>
      </View>

      {/* Nút Submit được đẩy xuống dưới */}
      <View style={styles.buttonContainer}>
        <CustomButton title="Submit" onPress={() => navigation.navigate("LogIn")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 60, // Phù hợp với tai thỏ/status bar
    backgroundColor: "#ffffff",
  },
  backBtn: {
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 1, // Đảm bảo nút back luôn nằm trên cùng để dễ bấm
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  illustration: {
    width: 200,
    height: 150,
    resizeMode: "contain",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#181725",
    textAlign: "center",
    marginBottom: 15,
  },
  desc: {
    fontSize: 16,
    color: "#7C7C7C",
    textAlign: "center",
    lineHeight: 24, // Tạo khoảng cách giữa 2 dòng mô tả
    marginBottom: 40,
  },
  inputBox: {
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    marginBottom: 30,
    paddingBottom: 10,
  },
  label: {
    color: "#7C7C7C",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  dropdownRow: {
    flexDirection: "row", // Dàn hàng ngang chữ và icon
    justifyContent: "space-between", // Đẩy icon sát mép phải
    alignItems: "center",
  },
  value: {
    fontSize: 18,
    color: "#181725",
    fontWeight: "500",
  },
  placeholder: {
    fontSize: 18,
    color: "#B1B1B1", // Màu nhạt hơn cho placeholder
  },
  buttonContainer: {
    marginTop: 50, // Đẩy nút xuống dưới cùng
    marginBottom: 30,
  },
});