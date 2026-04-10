import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";

export default function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Icon Carrot căn giữa */}
      <View style={styles.headerIcon}>
        <Image 
          source={{ uri: "https://img.icons8.com/color/96/carrot.png" }} 
          style={{ width: 50, height: 50 }} 
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Enter your credentials to continue</Text>
      </View>

      {/* Input: Username */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username</Text>
        <TextInput 
          style={styles.input} // Đã sửa lỗi không bấm được ở đây
          defaultValue="Afsar Hossen Shuvo" 
        />
      </View>

      {/* Input: Email */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputRow}>
          <TextInput 
            style={[styles.input, { flex: 1 }]} // Thêm flex: 1 để đẩy icon sang phải
            defaultValue="imshuvo97@gmail.com" 
            keyboardType="email-address"
          />
          {/* Icon check xanh */}
          <Feather name="check" size={20} color="#53B175" style={styles.checkIcon} />
        </View>
      </View>

      {/* Input: Password */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputRow}>
          <TextInput 
            style={[styles.inputPassword, { flex: 1 }]} // Thêm flex: 1 để đẩy icon sang phải
            defaultValue="12345678" 
            secureTextEntry 
          />
          {/* Icon ẩn hiện mật khẩu */}
          <Ionicons name="eye-off-outline" size={22} color="#7C7C7C" style={styles.iconRight} />
        </View>
      </View>

      <Text style={styles.terms}>
        By continuing you agree to our{" "}
        <Text style={styles.termsHighlight}>Terms of Service</Text>{"\n"}and{" "}
        <Text style={styles.termsHighlight}>Privacy Policy.</Text>
      </Text>

      <CustomButton title="Sing Up" onPress={() => {}} />

      <TouchableOpacity onPress={() => navigation.navigate("LogIn")} style={styles.linkContainer}>
        <Text style={styles.linkText}>
          Already have an account? <Text style={styles.linkTextHighlight}>Singup</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 80,
    backgroundColor: "#fcfcfc",
  },
  headerIcon: {
    alignItems: "center",
    marginBottom: 60,
  },
  titleContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#181725",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#7C7C7C",
  },
  inputGroup: {
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },
  label: {
    fontSize: 16,
    color: "#7C7C7C",
    marginBottom: 10,
  },
  input: {
    // Đã xóa flex: 1 ở đây để vùng gõ Username hiển thị bình thường
    fontSize: 18,
    color: "#181725",
    paddingBottom: 10,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputPassword: {
    // Đã xóa flex: 1 ở đây
    fontSize: 18,
    color: "#181725",
    paddingBottom: 10,
    letterSpacing: 2, 
  },
  iconRight: {
    paddingBottom: 10,
  },
  checkIcon: {
    paddingBottom: 10,
  },
  terms: {
    fontSize: 14,
    color: "#7C7C7C",
    marginBottom: 30,
    lineHeight: 22,
    letterSpacing: 0.5,
  },
  termsHighlight: {
    color: "#53B175",
  },
  linkContainer: {
    alignItems: "center",
    marginTop: 25,
  },
  linkText: {
    fontSize: 14,
    color: "#181725",
    fontWeight: "600",
  },
  linkTextHighlight: {
    color: "#53B175",
  },
});