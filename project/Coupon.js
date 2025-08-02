import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  SafeAreaView,
} from "react-native";

const coupons = [
  {
    code: "WELCOME200",
    unlock: "Add items worth $2 more to unlock",
    desc: "Get 50% OFF",
  },
  {
    code: "CASHBACK12",
    unlock: "Add items worth $2 more to unlock",
    desc: "Up to $12.00 cashback",
  },
  {
    code: "FEST2COST",
    unlock: "Add items worth $28 more to unlock",
    desc: "Get 50% OFF for Combo",
  },
  {
    code: "WELCOME200",
    unlock: "Add items worth $2 more to unlock",
    desc: "Get 50% OFF",
  },
];

export default function Coupon({navigation}) {
  const handleCopy = (code) => {
    // Clipboard removed — just showing Toast
    ToastAndroid.show(`Coupon: ${code}`, ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={styles.backText} onPress={()=>navigation.goBack()}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Coupon</Text>
      </View>

      <Text style={styles.sectionTitle}>Best offers for you</Text>

      <ScrollView contentContainerStyle={styles.couponList}>
        {coupons.map((c, i) => (
          <View key={i} style={styles.card}>
            <View style={styles.cardContent}>
              <Text style={styles.code}>{c.code}</Text>
              <Text style={styles.unlock}>{c.unlock}</Text>
              <View style={styles.descRow}>
                <Text style={styles.icon}>🏷️</Text>
                <Text style={styles.desc}>{c.desc}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.copyBtn}
              onPress={() => handleCopy(c.code)}
            >
              <Text style={styles.copyText}>COPY CODE</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 12,
  },
  backBtn: {
    paddingRight: 10,
  },
  backText: {
    fontSize: 24,
    color: "#222",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginLeft: 4,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginTop: 8,
    marginLeft: 18,
    marginBottom: 16,
  },
  couponList: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fafafa",
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#eee",
    marginHorizontal: 14,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 1,
  },
  cardContent: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 8,
  },
  code: {
    fontSize: 17,
    fontWeight: "700",
    color: "#222",
    marginBottom: 2,
  },
  unlock: {
    fontSize: 15,
    color: "#888",
    marginBottom: 6,
  },
  descRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  icon: {
    fontSize: 16,
  },
  desc: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
  },
  copyBtn: {
    backgroundColor: "#f3f3f3",
    borderTopWidth: 1.5,
    borderTopColor: "#eee",
    paddingVertical: 14,
    alignItems: "center",
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },
  copyText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#888",
    letterSpacing: 1,
  },
});
