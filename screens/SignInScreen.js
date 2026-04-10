import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import SocialButton from "../components/SocialButton"; 
import { AntDesign} from "@expo/vector-icons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Ảnh bìa phía trên */}
      <Image
        source = {
          require("../assets/f806f0604e1b9f8b9d7440c6aff2ea6b09677ca1.jpg")
        }
        style={styles.headerImage}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Get your groceries{"\n"}with nectar</Text>

        <TouchableOpacity 
          style={styles.phoneInputWrapper} 
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Phone")}
        >
          <Image 
            source={{ uri: "https://flagcdn.com/w40/bd.png" }} 
            style={styles.flagIcon}
          />
          <Text style={styles.countryCode}>+880</Text>
          
          <TextInput
            placeholder=""
            style={styles.input}
            editable={false}
            pointerEvents="none"
          />
        </TouchableOpacity>

        <Text style={styles.or}>Or connect with social media</Text>

        <SocialButton 
          title="Continue with Google" 
          color="#5383EC" 
          icon={<AntDesign name="google" size={24} color="white" />} 
        />
        
        <View style={{ height: 15 }} /> 
        
        <SocialButton 
          title="Continue with Facebook" 
          color="#4A66AC" 
          icon={<FontAwesome5 name="facebook-f" size={24} color="white" />} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fcfcfc"
  },
  headerImage: {
    width: "100%",
    height: "50%",
    resizeMode: "cover",
    transform: [{ rotate: "-140deg" }],
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  title: { 
    fontSize: 26, 
    fontWeight: "bold",
    color: "#030303",
    lineHeight: 34,
    marginBottom: 30,
  },
  phoneInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2", // Đường kẻ mờ dưới cùng
    paddingBottom: 10,
    marginBottom: 35,
  },
  flagIcon: {
    width: 30,
    height: 20,
    marginRight: 12,
    borderRadius: 3,
  },
  countryCode: {
    fontSize: 18,
    color: "#030303",
    marginRight: 10,
  },
  input: {
    flex: 1, // Chiếm phần không gian còn lại
    fontSize: 18,
    color: "#030303",
  },
  or: {
    textAlign: "center",
    marginBottom: 20,
    color: "#828282",
    fontSize: 14,
  },
});