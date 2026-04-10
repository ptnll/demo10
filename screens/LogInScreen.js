import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";

export default function LogInScreen({ navigation }) {
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
        {/* Giữ nguyên chữ Loging như trong thiết kế */}
        <Text style={styles.title}>Loging</Text>
        <Text style={styles.subtitle}>Enter your emails and password</Text>
      </View>

      {/* Input: Email */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input} 
          defaultValue="imshuvo97@gmail.com" // Đặt value cứng giống hình
          keyboardType="email-address"
        />
      </View>

      {/* Input: Password */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordRow}>
          <TextInput 
            style={styles.inputPassword} 
            defaultValue="12345678" // Value cứng để ra dấu chấm
            secureTextEntry 
          />
          {/* Icon ẩn hiện mật khẩu */}
          <Ionicons name="eye-off-outline" size={22} color="#7C7C7C" style={styles.eyeIcon} />
        </View>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <CustomButton title="Log In" onPress={() => {}} />

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style={styles.linkContainer}>
        <Text style={styles.linkText}>
          Don’t have an account? <Text style={styles.linkTextHighlight}>Singup</Text>
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
    fontSize: 18,
    color: "#181725",
    paddingBottom: 10,
  },
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputPassword: {
    flex: 1,
    fontSize: 18,
    color: "#181725",
    paddingBottom: 10,
    letterSpacing: 2, // Tạo khoảng cách giữa các dấu chấm mật khẩu
  },
  eyeIcon: {
    paddingBottom: 10,
  },
  forgot: {
    alignSelf: "flex-end",
    marginBottom: 30,
    color: "#181725",
    fontSize: 14,
    fontWeight: "500",
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