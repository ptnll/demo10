import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PhoneNumberScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Back */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      >
        <Ionicons name="chevron-back" size={24} />
      </TouchableOpacity>

      <Text style={styles.title}>Enter your mobile number</Text>

      <Text style={styles.label}>Mobile Number</Text>

      <View style={styles.inputRow}>
        <Text style={styles.flag}>🇧🇩</Text>
        <Text style={styles.code}>+880</Text>

        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder=""
        />
      </View>

      {/* Button tròn */}
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.navigate("Verification")}
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
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    marginTop: 10,
    paddingBottom: 10,
  },
  flag: {
    fontSize: 18,
    marginRight: 8,
  },
  code: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
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