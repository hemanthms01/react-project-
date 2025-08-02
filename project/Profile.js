import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  Modal,
  FlatList,
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";

export default function Profile({navigation}) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [phoneCode, setPhoneCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  const [showPhoneCodes, setShowPhoneCodes] = useState(false);
  const [showGenderOptions, setShowGenderOptions] = useState(false);

  const phoneCodes = ["+1", "+44", "+91"];
  const genders = ["Male", "Female", "Other"];

  const pickImage = async () => {
    try {
      const img = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
      });
      setImage(img.path);
    } catch (error) {
      console.log("Image pick cancelled or failed");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn}>
        <Text style={styles.backIcon} onPress={()=>navigation.goBack()}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Complete Your Profile</Text>
      <Text style={styles.subtitle}>
        Don’t worry, only you can see your personal data. No one else will be able to see it.
      </Text>

      <View style={styles.avatarSection}>
        <View style={styles.avatar}>
          {image ? (
            <Image source={{ uri: image }} style={styles.avatarImage} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarPlaceholderText}>👤</Text>
            </View>
          )}
          <TouchableOpacity style={styles.editBtn} onPress={pickImage}>
            <Text style={styles.editIcon}>✎</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="John Doe"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.phoneRow}>
          <TouchableOpacity
            onPress={() => setShowPhoneCodes(true)}
            style={[styles.input, styles.phoneCode]}
          >
            <Text>{phoneCode}</Text>
          </TouchableOpacity>
          <TextInput
            style={[styles.input, styles.phoneInput]}
            placeholder="Enter Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <Text style={styles.label}>Gender</Text>
        <TouchableOpacity
          onPress={() => setShowGenderOptions(true)}
          style={styles.input}
        >
          <Text>{gender ? gender : "Select Gender"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitText}>Complete Profile</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showPhoneCodes} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setShowPhoneCodes(false)}
        >
          <View style={styles.modalContent}>
            {phoneCodes.map((code) => (
              <TouchableOpacity
                key={code}
                onPress={() => {
                  setPhoneCode(code);
                  setShowPhoneCodes(false);
                }}
                style={styles.modalItem}
              >
                <Text style={styles.modalText}>{code}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal visible={showGenderOptions} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setShowGenderOptions(false)}
        >
          <View style={styles.modalContent}>
            {genders.map((g) => (
              <TouchableOpacity
                key={g}
                onPress={() => {
                  setGender(g);
                  setShowGenderOptions(false);
                }}
                style={styles.modalItem}
              >
                <Text style={styles.modalText}>{g}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: "#fff",
    alignItems: "center",
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
    fontSize: 20,
    fontWeight: "700",
    marginTop: 60,
    color: "#222",
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  avatarSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  avatar: {
    position: "relative",
    width: 96,
    height: 96,
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
  },
  avatarImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  avatarPlaceholder: {
    justifyContent: "center",
    alignItems: "center",
  },
  avatarPlaceholderText: {
    fontSize: 40,
    color: "#bbb",
  },
  editBtn: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#888",
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  editIcon: {
    color: "#fff",
    fontSize: 16,
  },
  form: {
    width: "100%",
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#fafafa",
    borderColor: "#e0e0e0",
    borderWidth: 1.5,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  phoneCode: {
    width: 100,
    justifyContent: "center",
  },
  phoneInput: {
    flex: 1,
    marginLeft: 8,
  },
  submitBtn: {
    backgroundColor: "#888",
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  submitText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContent: {
    margin: 40,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
  },
  modalItem: {
    paddingVertical: 10,
  },
  modalText: {
    fontSize: 18,
    color: "#222",
  },
});
