import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";
export default function SignIn({navigation}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Hi! Welcome back, you’ve been missed</Text>

      <View style={styles.form}>
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

        <View style={styles.forgot}>
          <Text style={styles.link}>Forgot Password?</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={()=>navigation.navigate('PageNav')}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider}>
        <Text>Or sign in with</Text>
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
        Don’t have an account?
        <Text style={styles.signupLink}onPress={()=>navigation.navigate('SignUp')}> Sign Up</Text>
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
  forgot: {
    alignItems: "flex-end",
    marginBottom: 8,
  },
  link: {
    color: "#888",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#888",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  divider: {
    marginVertical: 22,
    alignItems: "center",
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
  signupLink: {
    color: "#222",
    textDecorationLine: "underline",
  },
});
