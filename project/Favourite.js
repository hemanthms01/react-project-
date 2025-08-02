import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";

const favourites = [
  { id: 1, name: "Strawberry", price: 10, oldPrice: 12, rating: 4.9 },
  { id: 2, name: "Papaya", price: 10, oldPrice: 12, rating: 4.9 },
  { id: 3, name: "Watermelon", price: 10, oldPrice: 12, rating: 4.9 },
  { id: 4, name: "Apple", price: 10, oldPrice: 12, rating: 4.9 },
  { id: 5, name: "Orange", price: 10, oldPrice: 12, rating: 4.9 },
  { id: 6, name: "Pineapple", price: 10, oldPrice: 12, rating: 4.9 },
];

export default function Favourite() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Favourite</Text>
      </View>

      <ScrollView contentContainerStyle={styles.grid}>
        {favourites.map((item) => (
          <View style={styles.card} key={item.id}>
            <View style={styles.imagePlaceholder}>
              <TouchableOpacity style={styles.heartBtn}>
                <Text style={styles.heartIcon}>❤</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.rating}>
                <Text style={styles.star}>★ </Text>
                {item.rating}
              </Text>
            </View>

            <View style={styles.priceRow}>
              <Text style={styles.price}>${item.price}</Text>
              <Text style={styles.oldPrice}>${item.oldPrice}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 18,
    position: "relative",
  },
  backBtn: {
    position: "absolute",
    left: 8,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
  backIcon: {
    fontSize: 24,
    color: "#222",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  card: {
    width: width / 2 - 20,
    marginBottom: 18,
  },
  imagePlaceholder: {
    backgroundColor: "#f3f3f3",
    borderRadius: 14,
    aspectRatio: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: 10,
  },
  heartBtn: {},
  heartIcon: {
    fontSize: 20,
    color: "#bbb",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    paddingHorizontal: 5,
  },
  name: {
    fontSize: 16,
    color: "#222",
    fontWeight: "500",
  },
  rating: {
    fontSize: 15,
    color: "#888",
  },
  star: {
    color: "#f5b942",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 5,
  },
  price: {
    color: "#222",
    fontSize: 16,
    fontWeight: "600",
  },
  oldPrice: {
    color: "#bbb",
    fontSize: 16,
    textDecorationLine: "line-through",
    marginLeft: 8,
  },
  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 64,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  navIcon: {
    fontSize: 20,
    color: "#888",
  },
  navLabel: {
    fontSize: 12,
    color: "#888",
  },
  activeNav: {
    color: "#222",
  },
});
