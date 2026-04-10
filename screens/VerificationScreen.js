import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function VerificationScreen({ navigation }) {
  const [code, setCode] = useState("");

  return (
    <View style={styles.container}>
      {/* Back */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      >
        <Ionicons name="chevron-back" size={24} />
      </TouchableOpacity>

      <Text style={styles.title}>Enter your 4-digit code</Text>

      <Text style={styles.label}>Code</Text>

      <TextInput
        keyboardType="numeric"
        maxLength={4}
        value={code}
        onChangeText={setCode}
        style={styles.input}
      />

      <TouchableOpacity>
        <Text style={styles.resend}>Resend Code</Text>
      </TouchableOpacity>

      {/* Button */}
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.navigate("Location")}
      >
        <Ionicons name="arrow-forward" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    paddingTop: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },
  label: {
    marginTop: 30,
    color: "#888",
  },
  input: {
    borderBottomWidth: 1,
    marginTop: 10,
    fontSize: 20,
    letterSpacing: 10,
    paddingBottom: 10,
  },
  resend: {
    marginTop: 20,
    color: "#53B175",
  },
  backBtn: {
    paddingBottom: 30,
  },
  nextBtn: {
    position: "absolute",
    right: 20,
    bottom: 40,
    backgroundColor: "#53B175",
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});