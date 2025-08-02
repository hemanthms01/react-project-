import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";

const initialRecent = ["Orange Juice", "Chocolate Buscuit", "Tomato"];
const recentView = [
  { id: 1, name: "Fresh Strawberry", badge: "35% OFF", price: 10, oldPrice: 12 },
  { id: 2, name: "Fresh Papaya", badge: "35% OFF", price: 10, oldPrice: 12 },
  { id: 3, name: "Fresh Watermelon", badge: "35% OFF", price: 10, oldPrice: 12 },
];

export default function Search() {
  const [search, setSearch] = useState("");
  const [recent, setRecent] = useState(initialRecent);

  const removeRecent = (idx) => {
    setRecent((r) => r.filter((_, i) => i !== idx));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={{ fontSize: 24 }}>←</Text>
        </TouchableOpacity>

        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            value={search}
            onChangeText={setSearch}
          />
          <TouchableOpacity>
            <Text style={styles.clearBtn}>✖</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Recent Search</Text>
      <View style={styles.recentList}>
        {recent.map((item, idx) => (
          <View key={item} style={styles.chip}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => removeRecent(idx)}>
              <Text style={styles.clearBtn}>✖</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Recent View</Text>
      {recentView.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.badgeWrap}>
            <Text style={styles.badge}>{item.badge}</Text>
          </View>
          <View style={styles.imagePlaceholder} />
          <View style={styles.cardInfo}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.qty}>1 Kg</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>${item.price}</Text>
              <Text style={styles.oldPrice}>${item.oldPrice}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 430,
    padding: 18,
    backgroundColor: "#fff",
    minHeight: Dimensions.get("screen").height,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
  },
  backBtn: {
    marginRight: 6,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fafafa",
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#eee",
    paddingHorizontal: 8,
    height: 44,
    gap: 4,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  clearBtn: {
    fontSize: 16,
    color: "#bbb",
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginTop: 10,
    marginBottom: 8,
  },
  recentList: {
    flexDirection: "column",
    gap: 4,
    marginBottom: 12,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 2,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fafafa",
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
    position: "relative",
  },
  badgeWrap: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  badge: {
    backgroundColor: "#888",
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  imagePlaceholder: {
    width: 56,
    height: 56,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    marginRight: 8,
  },
  cardInfo: {
    flex: 1,
    gap: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  qty: {
    fontSize: 15,
    color: "#888",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  oldPrice: {
    fontSize: 16,
    color: "#bbb",
    textDecorationLine: "line-through",
  },
});
