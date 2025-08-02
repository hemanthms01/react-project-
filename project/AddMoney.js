import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

export default function AddMoney() {
  const walletBalance = 12000;
  const amounts = [100, 200, 500, 1000, 2000, 3000, 4000, 5000];
  const [amount, setAmount] = useState("");

  const handleAmountClick = (val) => {
    setAmount((prev) => (prev ? String(Number(prev) + val) : String(val)));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Add Money</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.balanceRow}>
          <View>
            <Text style={styles.balanceLabel}>Wallet Balance</Text>
            <Text style={styles.balanceValue}>
              ${walletBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </Text>
          </View>
          <TouchableOpacity style={styles.balanceIcon}>
            <View style={styles.iconRect}></View>
            <View style={styles.iconLine}></View>
          </TouchableOpacity>
        </View>

        <View style={styles.amountBtns}>
          {amounts.map((val) => (
            <TouchableOpacity
              key={val}
              style={styles.amountBtn}
              onPress={() => handleAmountClick(val)}
            >
              <Text style={styles.amountBtnText}>+${val}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.inputRow}>
          <Text style={styles.inputPrefix}>$</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Amount"
            keyboardType="numeric"
            value={amount}
            onChangeText={(text) => setAmount(text.replace(/^0+/, ""))}
          />
        </View>

        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitText}>Add Money</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 14,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    gap: 10,
  },
  backBtn: {
    paddingHorizontal: 8,
  },
  backText: {
    fontSize: 24,
    color: "#222",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },
  card: {
    backgroundColor: "#f7f7f7",
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
  },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  balanceLabel: {
    color: "#bbb",
    fontSize: 16,
    marginBottom: 2,
  },
  balanceValue: {
    color: "#222",
    fontSize: 20,
    fontWeight: "700",
  },
  balanceIcon: {
    backgroundColor: "#fff",
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  iconRect: {
    width: 16,
    height: 10,
    backgroundColor: "#bbb",
    borderRadius: 3,
  },
  iconLine: {
    position: "absolute",
    width: 8,
    height: 2,
    backgroundColor: "#fff",
  },
  amountBtns: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
  },
  amountBtn: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 4,
    flexBasis: "22%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.01,
    shadowRadius: 1,
    elevation: 1,
  },
  amountBtnText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#e0e0e0",
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  inputPrefix: {
    color: "#bbb",
    fontSize: 18,
    marginRight: 4,
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 12,
    color: "#000",
  },
  submitBtn: {
    backgroundColor: "#888",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
