import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import { COLORS } from "../constants/colors";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000); // 2 giây

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <FontAwesome5 name="carrot" size={48} color="white" />
      <Text style={styles.logo}>nectar</Text>
      <Text style={styles.sub}>online groceries</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  sub: {
    color: "#fff",
    opacity: 0.8,
    size: 16,
    marginTop: 8,
  },
});