import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function NewPassword({navigation}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn}>
        <Text style={styles.backArrow} onPress={()=>navigation.goBack()}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>New Password</Text>
      <Text style={styles.subtitle}>
        Your new password must be different{"\n"}from previously used passwords.
      </Text>

      <View style={styles.form}>
        {/* Password Field */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            secureTextEntry={!showPassword}
            placeholder="************"
            placeholderTextColor="#bbb"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.eyeBtn}
            onPress={() => setShowPassword(prev => !prev)}
          >
            <Text style={styles.eyeIcon}>{showPassword ? "🙈" : "👁️"}</Text>
          </TouchableOpacity>
        </View>

        {/* Confirm Password Field */}
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            secureTextEntry={!showConfirm}
            placeholder="************"
            placeholderTextColor="#bbb"
            value={confirm}
            onChangeText={setConfirm}
          />
          <TouchableOpacity
            style={styles.eyeBtn}
            onPress={() => setShowConfirm(prev => !prev)}
          >
            <Text style={styles.eyeIcon}>{showConfirm ? "🙈" : "👁️"}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitBtnText}>Create New Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    marginHorizontal: "auto",
    paddingHorizontal: 18,
    paddingTop: 32,
    backgroundColor: "#fff",
    flex: 1,
  },
  backBtn: {
    position: "absolute",
    left: 18,
    top: 32,
  },
  backArrow: {
    fontSize: 24,
    color: "#222",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 24,
    marginBottom: 6,
    color: "#222",
    textAlign: "center",
  },
  subtitle: {
    color: "#888",
    fontSize: 16,
    marginBottom: 22,
    textAlign: "center",
    lineHeight: 22,
  },
  form: {
    width: "100%",
  },
  label: {
    fontSize: 16,
    color: "#222",
    fontWeight: "500",
    marginBottom: 6,
    marginTop: 14,
  },
  inputWrapper: {
    position: "relative",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    padding: 12,
    paddingRight: 44,
    borderWidth: 1.5,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "#fafafa",
    color: "#222",
  },
  eyeBtn: {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  eyeIcon: {
    fontSize: 18,
    color: "#888",
  },
  submitBtn: {
    marginTop: 22,
    backgroundColor: "#888",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  submitBtnText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
