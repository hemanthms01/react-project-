import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";

const products = [
  { id: 1, name: "Fresh Apple", price: 12, oldPrice: 14, badge: "35% OFF", fav: false },
  { id: 2, name: "Fresh Strawberry", price: 12, oldPrice: 14, badge: "35% OFF", fav: true },
  { id: 3, name: "New Papaya", price: 12, oldPrice: 14, badge: "35% OFF", fav: false },
  { id: 4, name: "Fresh Watermelon", price: 12, oldPrice: 14, badge: "35% OFF", fav: true },
  { id: 5, name: "Fresh Orange", price: 12, oldPrice: 14, badge: "35% OFF", fav: false },
  { id: 6, name: "Fresh Pineapple", price: 12, oldPrice: 14, badge: "35% OFF", fav: false },
];

export default function BestDeal({navigation}) {
  const [favs, setFavs] = useState(products.map((p) => p.fav));

  const toggleFav = (idx) => {
    setFavs((prevFavs) => prevFavs.map((f, i) => (i === idx ? !f : f)));
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <Text style={styles.badge}>{item.badge}</Text>
      <TouchableOpacity style={styles.heartBtn} onPress={() => toggleFav(index)}>
        <Text style={[styles.heart, favs[index] && styles.heartFilled]}>&#10084;</Text>
      </TouchableOpacity>
      <View style={styles.imagePlaceholder} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.qty}>1 Kg</Text>
      <View style={styles.priceRow}>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.oldPrice}>${item.oldPrice}</Text>
      </View>
      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addBtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={{ fontSize: 24 }} onPress={()=>navigation.goBack()}>&#8592;</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Best Deal</Text>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    alignSelf: "center",
    backgroundColor: "#fff",
    minHeight: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    position: "relative",
  },
  backBtn: {
    position: "absolute",
    left: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 18,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
    padding: 12,
    flex: 1,
    marginHorizontal: 4,
    minHeight: 210,
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#888",
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    zIndex: 1,
  },
  heartBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 2,
  },
  heart: {
    fontSize: 18,
    color: "#bbb",
  },
  heartFilled: {
    color: "#e74c3c",
  },
  imagePlaceholder: {
    width: "100%",
    height: 60,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    marginVertical: 28,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    marginBottom: 2,
  },
  qty: {
    fontSize: 14,
    color: "#888",
    marginBottom: 2,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
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
  addBtn: {
    backgroundColor: "#888",
    borderRadius: 8,
    paddingVertical: 8,
    marginTop: "auto",
    alignItems: "center",
  },
  addBtnText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
