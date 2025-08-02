import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Switch,
} from "react-native";

export default function AddCardScreen() {
  const [holder, setHolder] = useState("Esther Howard");
  const [number, setNumber] = useState("4716 9627 1635 8047");
  const [expiry, setExpiry] = useState("02/30");
  const [cvv, setCvv] = useState("000");
  const [save, setSave] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Add Card</Text>
      </View>

      {/* Card Preview */}
      <View style={styles.cardPreview}>
        <View style={styles.cardBg}>
          <Text style={styles.cardVisa}>VISA</Text>
          <Text style={styles.cardNumber}>{number}</Text>
          <View style={styles.cardRow}>
            <View>
              <Text style={styles.cardLabel}>Card holder name</Text>
              <Text style={styles.cardValue}>{holder}</Text>
            </View>
            <View>
              <Text style={styles.cardLabel}>Expiry date</Text>
              <Text style={styles.cardValue}>{expiry}</Text>
            </View>
          </View>
          <View style={styles.cardChip} />
        </View>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Card Holder Name</Text>
        <TextInput
          style={styles.input}
          value={holder}
          onChangeText={setHolder}
          placeholder="Card Holder Name"
        />

        <Text style={styles.label}>Card Number</Text>
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={setNumber}
          placeholder="Card Number"
          maxLength={19}
          keyboardType="numeric"
        />

        <View style={styles.row}>
          <View style={styles.half}>
            <Text style={styles.label}>Expiry Date</Text>
            <TextInput
              style={styles.input}
              value={expiry}
              onChangeText={setExpiry}
              placeholder="MM/YY"
              maxLength={5}
            />
          </View>
          <View style={styles.half}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={styles.input}
              value={cvv}
              onChangeText={setCvv}
              placeholder="CVV"
              maxLength={4}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.saveRow}>
          <Switch value={save} onValueChange={setSave} />
          <Text style={styles.saveLabel}>Save Card</Text>
        </View>
      </View>

      {/* Bottom Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingBottom: 100,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 18,
    gap: 12,
  },
  backArrow: {
    fontSize: 24,
    color: "#222",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },
  cardPreview: {
    alignItems: "center",
    marginVertical: 18,
  },
  cardBg: {
    width: 320,
    height: 140,
    borderRadius: 14,
    backgroundColor: "#bbb",
    padding: 22,
    position: "relative",
    justifyContent: "space-between",
  },
  cardVisa: {
    position: "absolute",
    top: 18,
    right: 22,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 2,
    color: "#fff",
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 2,
    color: "#fff",
    marginTop: 18,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cardLabel: {
    fontSize: 12,
    color: "#e0e0e0",
    marginBottom: 2,
  },
  cardValue: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
  },
  cardChip: {
    position: "absolute",
    bottom: 18,
    right: 22,
    width: 32,
    height: 22,
    borderRadius: 6,
    backgroundColor: "rgba(255,255,255,0.18)",
  },
  form: {
    paddingHorizontal: 18,
    gap: 14,
  },
  label: {
    fontSize: 16,
    color: "#222",
    fontWeight: "500",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#fafafa",
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#e0e0e0",
    fontSize: 16,
    padding: 12,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  half: {
    flex: 1,
  },
  saveRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 8,
  },
  saveLabel: {
    fontSize: 16,
    color: "#222",
  },
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 6,
    elevation: 8,
  },
  button: {
    backgroundColor: "#888",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "600",
  },
});
