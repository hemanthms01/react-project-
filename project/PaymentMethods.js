import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

const paymentOptions = [
  {
    group: "Cash",
    options: [
      { id: "cash", label: "Cash", icon: "💵" },
    ],
  },
  {
    group: "Wallet",
    options: [
      { id: "wallet", label: "Wallet", icon: "👛" },
    ],
  },
  {
    group: "Credit & Debit Card",
    options: [
      { id: "addcard", label: "Add Card", icon: "💳", arrow: true },
    ],
  },
  {
    group: "More Payment Options",
    options: [
      { id: "paypal", label: "Paypal", icon: "🅿️" },
      { id: "applepay", label: "Apple Pay", icon: "🍎" },
      { id: "googlepay", label: "Google Pay", icon: "🅶" },
    ],
  },
];

export default function PaymentMethods() {
  const [selected, setSelected] = useState("cash");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.backBtn}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Payment Methods</Text>
        </View>

        <View style={styles.list}>
          {paymentOptions.map((group) => (
            <View key={group.group}>
              <Text style={styles.groupLabel}>{group.group}</Text>
              {group.options.map((opt) => (
                <TouchableOpacity
                  key={opt.id}
                  style={[
                    styles.option,
                    selected === opt.id && styles.optionSelected,
                  ]}
                  onPress={() => setSelected(opt.id)}
                >
                  <Text style={styles.icon}>{opt.icon}</Text>
                  <Text style={styles.label}>{opt.label}</Text>
                  {opt.arrow ? (
                    <Text style={styles.arrow}>›</Text>
                  ) : (
                    <View style={[
                      styles.radioOuter,
                      selected === opt.id && styles.radioSelected,
                    ]}>
                      {selected === opt.id && <View style={styles.radioInner} />}
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.confirmBtn}>
          <Text style={styles.confirmText}>Confirm Payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    paddingBottom: 100,
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
  },
  backBtn: {
    fontSize: 24,
    color: "#222",
    marginLeft: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    marginLeft: 12,
  },
  list: {
    marginTop: 8,
  },
  groupLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    marginVertical: 14,
    marginLeft: 8,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#fafafa",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 14,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  optionSelected: {
    borderColor: "#888",
    backgroundColor: "#fff",
  },
  icon: {
    fontSize: 20,
    width: 28,
    textAlign: "center",
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: "#222",
    fontWeight: "500",
  },
  arrow: {
    fontSize: 24,
    color: "#bbb",
    marginLeft: 8,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: "#bbb",
    borderRadius: 11,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  radioSelected: {
    borderColor: "#888",
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#888",
  },
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 5,
  },
  confirmBtn: {
    backgroundColor: "#888",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  confirmText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
