import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";

const categories = [
  { label: "Vegetable", icon: "🥦" },
  { label: "Fruits", icon: "🍎" },
  { label: "Milk & Eggs", icon: "🥚" },
  { label: "Drinks", icon: "🥤" },
  { label: "Cakes", icon: "🧁" },
  { label: "Ice-Cream", icon: "🍦" },
  { label: "Bakery", icon: "🍞" },
  { label: "Snacks", icon: "🍟" },
  { label: "Grain", icon: "🌾" },
  { label: "Cheese", icon: "🧀" },
  { label: "Oil", icon: "🛢️" },
  { label: "Biscuit", icon: "🍪" },
  { label: "Household", icon: "🧴" },
  { label: "Pet Food", icon: "🐾" },
  { label: "Skin Care", icon: "🧴" },
  { label: "Soap", icon: "🧼" },
  { label: "Coffee", icon: "☕" },
  { label: "Dry Fruits", icon: "🥜" },
  { label: "Sugar", icon: "🍬" },
  { label: "Garden su..", icon: "🪴" },
];

export default function Location({navigation}) {
  return (
    <ScrollView style={styles.page}>
      <View style={styles.locationContainer}>
        <View style={styles.locationIconWrap}>
          <View style={styles.locationIconCircle}>
            <Text style={styles.locationIconText}>📍</Text>
          </View>
        </View>
        <Text style={styles.locationTitle}>What is Your Location?</Text>
        <Text style={styles.locationSubtitle}>
          We need to know your location in order to suggest nearby services.
        </Text>
        <TouchableOpacity style={styles.locationBtn}>
          <Text style={styles.locationBtnText}>Allow Location Access</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.locationManualBtn} onPress={()=>navigation.navigate('EnterLocation')}>Enter Location Manually</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        <View style={styles.categoryHeader}>
          <TouchableOpacity style={styles.categoryBackBtn}>
            <Text style={{ fontSize: 24 }}>←</Text>
          </TouchableOpacity>
          <Text style={styles.categoryTitle}>Category</Text>
        </View>
        <View style={styles.categoryGrid}>
          {categories.map((cat, i) => (
            <View style={styles.categoryItem} key={i}>
              <View style={styles.categoryIconBg}>
                <Text style={styles.categoryIcon}>{cat.icon}</Text>
              </View>
              <Text style={styles.categoryLabel}>{cat.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    flex: 1,
  },
  locationContainer: {
    minHeight: Dimensions.get("window").height * 0.9,
    padding: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  locationIconWrap: {
    marginVertical: 32,
  },
  locationIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#f3f3f3",
    justifyContent: "center",
    alignItems: "center",
  },
  locationIconText: {
    fontSize: 32,
  },
  locationTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
    marginBottom: 10,
  },
  locationSubtitle: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 22,
  },
  locationBtn: {
    width: "100%",
    backgroundColor: "#888",
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 18,
  },
  locationBtnText: {
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
  locationManualBtn: {
    color: "#888",
    textAlign: "center",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  categoryContainer: {
    padding: 16,
    maxWidth: 430,
    alignSelf: "center",
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 18,
    position: "relative",
  },
  categoryBackBtn: {
    position: "absolute",
    left: 0,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 8,
  },
  categoryItem: {
    width: "23%", // fits 4 per row with spacing
    alignItems: "center",
    marginBottom: 18,
  },
  categoryIconBg: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#f3f3f3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  categoryIcon: {
    fontSize: 24,
  },
  categoryLabel: {
    fontSize: 14,
    color: "#222",
    textAlign: "center",
  },
});
