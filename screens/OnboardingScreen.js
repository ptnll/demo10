import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function OnboardingScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/65e91e964e8f13cbdb37604e351d37d72a1eb837.jpg")}
      style={styles.background}
      imageStyle={styles.bgImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <FontAwesome5
            name="carrot"
            size={38}
            color="white"
            style={{ marginBottom: 20 }}
          />

          <Text style={styles.title}>Welcome{"\n"}to our store</Text>

          <Text style={styles.desc}>
            Ger your groceries in as fast as one hour
          </Text>

          <CustomButton
            title="Get Started"
            onPress={() => navigation.navigate("SignIn")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingBottom: 60,
  },
  icon: {
    width: 45,
    height: 45,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 10,
    lineHeight: 46,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  bgImage: {
    resizeMode: "cover",
  },
  desc: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    textAlign: "center",
    marginBottom: 40,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});