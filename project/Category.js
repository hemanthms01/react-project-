import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

const { width } = Dimensions.get('window');

const products = [
  { id: 1, name: "Fresh Apple", price: 12, oldPrice: 14, badge: "35% OFF", fav: false },
  { id: 2, name: "Fresh Strawberry", price: 12, oldPrice: 14, badge: "35% OFF", fav: true },
  { id: 3, name: "New Papaya", price: 12, oldPrice: 14, badge: "35% OFF", fav: false },
  { id: 4, name: "Fresh Watermelon", price: 12, oldPrice: 14, badge: "35% OFF", fav: true },
  { id: 5, name: "Fresh Orange", price: 12, oldPrice: 14, badge: "35% OFF", fav: false },
  { id: 6, name: "Fresh Pineapple", price: 12, oldPrice: 14, badge: "35% OFF", fav: false },
];

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

export default function Category({navigation}) {
  const [favs, setFavs] = useState(products.map(p => p.fav));

  const toggleFav = index => {
    const updatedFavs = [...favs];
    updatedFavs[index] = !updatedFavs[index];
    setFavs(updatedFavs);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={styles.backArrow} onPress={()=>navigation.goBack()}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Category</Text>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 24,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    position: 'relative',
  },
  backBtn: {
    position: 'absolute',
    left: 12,
  },
  backArrow: {
    fontSize: 22,
    color: '#222',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: (width - 36) / 2,
    padding: 10,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#888',
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 6,
    borderRadius: 6,
  },
  heartBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  heart: {
    fontSize: 18,
    color: '#bbb',
  },
  filledHeart: {
    color: '#e74c3c',
  },
  imgPlaceholder: {
    height: 60,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginTop: 28,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  qty: {
    color: '#888',
    fontSize: 14,
    marginBottom: 2,
  },
  priceRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  oldPrice: {
    fontSize: 14,
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  addBtn: {
    backgroundColor: '#888',
    borderRadius: 8,
    paddingVertical: 6,
    marginTop: 'auto',
  },
  addBtnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  categoryItem: {
    alignItems: 'center',
    width: '22%',
    marginVertical: 8,
  },
  categoryIconBg: {
    width: 56,
    height: 56,
    backgroundColor: '#f3f3f3',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  categoryIcon: {
    fontSize: 28,
    color: '#bbb',
  },
  categoryLabel: {
    fontSize: 12,
    color: '#222',
    textAlign: 'center',
  },
});
