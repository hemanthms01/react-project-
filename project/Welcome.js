import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <ImageBackground
          source={{uri : 'https://example.com/avatar.jpg'}} // Use `.png` instead of `.svg` in React Native
          style={styles.pattern}
          imageStyle={{ opacity: 0.18 }}
        />
      </View>      

      <View style={styles.content}>
        <Text style={styles.title}>
          <Text style={styles.bold}>Let’s find the </Text>
          <Text style={styles.bold}>Best &amp;</Text>
          {"\n"}
          <Text style={styles.bold}>Healthy Grocery</Text>
        </Text>

        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Let’s Get Started</Text>
        </TouchableOpacity>

        <Text style={styles.signinText}>
          Already have an account?
          <Text style={styles.signinLink} onPress={()=>navigation.navigate('SignIn')}> Sign In</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "52%",
    width: "100%",
    backgroundColor: "#f7f7f7",
    zIndex: 0,
  },
  pattern: {
    flex: 1,
    resizeMode: "cover",
  },
  content: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    padding: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.03,
    shadowRadius: 16,
    elevation: 5,
    alignItems: "center",
    minHeight: "48%",
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
    color: "#222",
    marginBottom: 16,
    lineHeight: 32,
    textAlign: "center",
  },
  bold: {
    fontWeight: "700",
    color: "#222",
  },
  subtitle: {
    color: "#888",
    fontSize: 16,
    marginBottom: 28,
    textAlign: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "#888",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 18,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  signinText: {
    fontSize: 16,
    color: "#666",
  },
  signinLink: {
    color: "#222",
    textDecorationLine: "underline",
  },
});
