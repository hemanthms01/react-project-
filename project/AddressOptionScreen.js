import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";

const addressTypes = ["Home", "Work", "Friend", "Other"];

export default function AddressOptionScreen() {
  const [type, setType] = useState("Home");
  const [address, setAddress] = useState("");
  const [floor, setFloor] = useState("");
  const [landmark, setLandmark] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backBtn}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <View style={styles.mapContainer}>
        {/* Replace with Image or MapView if needed */}
        <View style={styles.placeholderMap}>
          <Text style={styles.mapText}>[Map Placeholder]</Text>
        </View>
      </View>

      <View style={styles.sheet}>
        <Text style={styles.title}>Add Address</Text>

        <Text style={styles.label}>Save address as *</Text>
        <View style={styles.typeRow}>
          {addressTypes.map((t) => (
            <TouchableOpacity
              key={t}
              onPress={() => setType(t)}
              style={[
                styles.typeBtn,
                type === t && styles.typeBtnSelected
              ]}
            >
              <Text
                style={[
                  styles.typeBtnText,
                  type === t && styles.typeBtnTextSelected
                ]}
              >
                {t}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Complete address</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter address *"
          value={address}
          onChangeText={setAddress}
          multiline
        />

        <Text style={styles.label}>Floor</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Floor"
          value={floor}
          onChangeText={setFloor}
        />

        <Text style={styles.label}>Landmark</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Landmark"
          value={landmark}
          onChangeText={setLandmark}
        />

        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveBtnText}>Save address</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingBottom: 40,
  },
  backBtn: {
    position: "absolute",
    left: 18,
    top: 24,
    zIndex: 2,
  },
  backArrow: {
    fontSize: 24,
    color: "#222",
  },
  mapContainer: {
    height: 140,
    backgroundColor: "#f7f7f7",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderMap: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  mapText: {
    color: "#555",
    fontSize: 16,
  },
  sheet: {
    marginTop: -24,
    backgroundColor: "#fff",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
    marginBottom: 12,
  },
  label: {
    color: "#888",
    fontSize: 16,
    marginTop: 12,
    marginBottom: 6,
  },
  typeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 10,
  },
  typeBtn: {
    backgroundColor: "#f3f3f3",
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderRadius: 18,
    marginRight: 8,
    marginTop: 6,
  },
  typeBtnSelected: {
    backgroundColor: "#888",
  },
  typeBtnText: {
    fontSize: 16,
    color: "#888",
    fontWeight: "500",
  },
  typeBtnTextSelected: {
    color: "#fff",
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  textArea: {
    minHeight: 60,
    textAlignVertical: "top",
  },
  saveBtn: {
    backgroundColor: "#888",
    borderRadius: 24,
    paddingVertical: 16,
    marginTop: 18,
    alignItems: "center",
  },
  saveBtnText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
