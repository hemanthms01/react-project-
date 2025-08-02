import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function VerifyCode({navigation}) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (idx, val) => {
    if (!/^[0-9]?$/.test(val)) return;
    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);
    if (val && idx < 3) {
      inputs[idx + 1].current.focus();
    }
  };

  const handleKeyPress = (idx, e) => {
    if (e.nativeEvent.key === "Backspace" && !otp[idx] && idx > 0) {
      inputs[idx - 1].current.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn}>
        <Text style={styles.backIcon} onPress={()=>navigation.goBack()}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Verify Code</Text>
      <Text style={styles.subtitle}>
        Please enter the code we just sent to email{"\n"}
        <Text style={styles.email}>example@email.com</Text>
      </Text>

      <View style={styles.otpRow}>
        {otp.map((v, i) => (
          <TextInput
            key={i}
            ref={inputs[i]}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={v}
            onChangeText={(val) => handleChange(i, val)}
            onKeyPress={(e) => handleKeyPress(i, e)}
          />
        ))}
      </View>

      <Text style={styles.resend}>
        Didn’t receive OTP?{" "}
        <Text style={styles.resendLink}>Resend code</Text>
      </Text>

      <TouchableOpacity
        style={[
          styles.verifyBtn,
          otp.some((digit) => !digit) && styles.disabledBtn,
        ]}
        disabled={otp.some((digit) => !digit)}
      >
        <Text style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backBtn: {
    position: "absolute",
    top: 30,
    left: 18,
  },
  backIcon: {
    fontSize: 24,
    color: "#222",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 12,
    color: "#222",
    textAlign: "center",
  },
  subtitle: {
    color: "#888",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 28,
  },
  email: {
    color: "#bbb",
    fontSize: 15,
  },
  otpRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 22,
  },
  otpInput: {
    width: 48,
    height: 48,
    borderColor: "#e0e0e0",
    borderWidth: 1.5,
    borderRadius: 10,
    fontSize: 22,
    textAlign: "center",
    backgroundColor: "#fafafa",
    marginHorizontal: 6,
  },
  resend: {
    color: "#888",
    fontSize: 16,
    marginBottom: 22,
    textAlign: "center",
  },
  resendLink: {
    color: "#222",
    textDecorationLine: "underline",
  },
  verifyBtn: {
    backgroundColor: "#888",
    paddingVertical: 14,
    borderRadius: 8,
    width: "100%",
  },
  verifyText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  disabledBtn: {
    backgroundColor: "#ccc",
  },
});
