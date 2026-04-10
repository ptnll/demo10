import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

// 1. Thêm prop `icon` để nhận truyền icon từ ngoài vào
// 2. Thêm prop `onPress` để sau này bạn có thể gắn hành động click
export default function SocialButton({ title, color, icon, onPress }) {
  return (
    <TouchableOpacity 
      style={[styles.btn, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Container cho Icon, ép nó sang bên trái */}
      <View style={styles.iconContainer}>
        {icon}
      </View>
      
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 18, 
    borderRadius: 15, 
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center",
    position: "relative", 
  },
  iconContainer: {
    position: "absolute", 
    left: 40, 
  },
  text: {
    color: "#ffffff",
    fontWeight: "600", // Giảm độ đậm xuống 600 để giống thiết kế hơn thay vì "bold" (700)
    fontSize: 16,
  },
});