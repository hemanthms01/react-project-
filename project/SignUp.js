import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";

export default function SignUp({navigation}) {
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Fill your information below or register{"\n"}with your social account.
      </Text>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} placeholder="John Doe" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              style={styles.input}
              placeholder="************"
              secureTextEntry={!showPassword}
            />
            <Pressable
              style={styles.eyeButton}
              onPress={() => setShowPassword((v) => !v)}
            >
              <Text>{showPassword ? "🙈" : "👁️"}</Text>
            </Pressable>
          </View>
        </View>

        <Pressable
          style={styles.checkboxContainer}
          onPress={() => setAgree((prev) => !prev)}
        >
          <View style={[styles.checkbox, agree && styles.checkboxChecked]}>
            {agree && <View style={styles.checkmark} />}
          </View>
          <Text style={styles.checkboxText}>
            Agree with
            <Text style={styles.termsLink}> Terms & Condition</Text>
          </Text>
        </Pressable>

        <TouchableOpacity
          style={[styles.submitButton, !agree && styles.disabledButton]}
          disabled={!agree}
        >
          <Text style={styles.submitButtonText} onPress={()=>{agree && navigation.navigate('VerifyCode')}}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider}>
        <Text>Or sign up with</Text>
      </View>

      <View style={styles.socials}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialIcon}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialIcon}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialIcon}>f</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        Already have an account?
        <Text style={styles.footerLink} onPress={()=>navigation.navigate('SignIn')}> Sign In</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 370,
    alignSelf: "center",
    padding: 18,
    paddingTop: 32,
    backgroundColor: "#fff",
    borderRadius: 18,
    minHeight: "100%",
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
    color: "#222",
    textAlign: "center",
  },
  subtitle: {
    color: "#888",
    fontSize: 16,
    marginBottom: 24,
    textAlign: "center",
    lineHeight: 22,
  },
  form: {
    width: "100%",
  },
  inputGroup: {
    marginBottom: 14,
  },
  label: {
    fontSize: 16,
    color: "#222",
    fontWeight: "500",
    marginBottom: 6,
  },
  input: {
    padding: 12,
    borderColor: "#e0e0e0",
    borderWidth: 1.5,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  passwordWrapper: {
    justifyContent: "center",
  },
  eyeButton: {
    position: "absolute",
    right: 12,
    top: 12,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 12,
    gap: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderColor: "#888",
    borderWidth: 2,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "#888",
  },
  checkmark: {
    width: 6,
    height: 12,
    borderColor: "#fff",
    borderWidth: 2.5,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    transform: [{ rotate: "45deg" }],
  },
  checkboxText: {
    color: "#222",
    fontSize: 16,
  },
  termsLink: {
    color: "#888",
    textDecorationLine: "underline",
  },
  submitButton: {
    width: "100%",
    backgroundColor: "#888",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  divider: {
    marginVertical: 22,
    alignItems: "center",
    position: "relative",
  },
  socials: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
    marginBottom: 18,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderColor: "#e0e0e0",
    borderWidth: 1.5,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
  },
  socialIcon: {
    fontSize: 24,
    color: "#222",
  },
  footer: {
    color: "#888",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 12,
  },
  footerLink: {
    color: "#222",
    textDecorationLine: "underline",
  },
});
