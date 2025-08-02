import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";

export default function Checkout({navigation}) {
  const [items, setItems] = useState([
    { id: 1, name: "Fresh Strawberry", qty: 1, price: 10, oldPrice: 12, badge: "35% OFF" },
    { id: 2, name: "Fresh Papaya", qty: 1, price: 10, oldPrice: 12, badge: "35% OFF" },
    { id: 3, name: "Fresh Watermelon", qty: 1, price: 10, oldPrice: 12, badge: "35% OFF" },
  ]);

  const updateQty = (id, delta) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.backBtn} onPress={()=>navigation.goBack()}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Checkout</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Delivery Address</Text>
          <View style={styles.addressRow}>
            <View style={styles.addressIcon}>
              <Text>📍</Text>
            </View>
            <View style={styles.addressInfo}>
              <Text style={styles.addressType}>Home</Text>
              <Text style={styles.addressDetail}>
                1901 Thornridge Cir. Shiloh, Hawaii 81063
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.changeBtn} onPress={()=>navigation.navigate('DeliveryAddress')}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.label}>Order List</Text>
          {items.map((item) => (
            <View key={item.id} style={styles.card}>
              {item.badge && <View style={styles.badge}><Text style={styles.badgeText}>{item.badge}</Text></View>}
              <View style={styles.imageBox} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemQtyLabel}>1 Kg</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.price}>${item.price}</Text>
                  <Text style={styles.oldPrice}>${item.oldPrice}</Text>
                </View>
              </View>
              <View style={styles.qtyActions}>
                <TouchableOpacity onPress={() => updateQty(item.id, -1)}>
                  <Text style={styles.qtyBtn}>-</Text>
                </TouchableOpacity>
                <Text style={styles.qtyText}>{item.qty} Kg</Text>
                <TouchableOpacity onPress={() => updateQty(item.id, 1)}>
                  <Text style={styles.qtyBtn}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.payBtn}>
          <Text style={styles.payText} onPress={()=>navigation.navigate('PaymentMethods')}>Continue to Payment</Text>
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
  content: {
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
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    marginLeft: 12,
  },
  section: {
    marginBottom: 18,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fafafa",
    borderRadius: 12,
    padding: 14,
  },
  addressIcon: {
    marginRight: 8,
    justifyContent: "center",
  },
  addressInfo: {
    flex: 1,
  },
  addressType: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  addressDetail: {
    fontSize: 14,
    color: "#888",
    marginTop: 2,
  },
  changeBtn: {
    backgroundColor: "#f3f3f3",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 14,
    color: "#888",
    fontSize: 14,
    fontWeight: "500",
    alignSelf: "center",
  },
  divider: {
    borderTopWidth: 1,
    borderColor: "#eee",
    marginVertical: 18,
  },
  card: {
    backgroundColor: "#fafafa",
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#888",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    zIndex: 1,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  imageBox: {
    width: 48,
    height: 48,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  itemQtyLabel: {
    color: "#888",
    fontSize: 14,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  price: {
    color: "#222",
    fontWeight: "600",
    fontSize: 16,
  },
  oldPrice: {
    color: "#bbb",
    fontSize: 16,
    textDecorationLine: "line-through",
    marginLeft: 8,
  },
  qtyActions: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  qtyBtn: {
    backgroundColor: "#f3f3f3",
    borderRadius: 6,
    width: 28,
    height: 28,
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    textAlignVertical: "center",
  },
  qtyText: {
    fontSize: 16,
    color: "#222",
    marginVertical: 4,
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
  payBtn: {
    backgroundColor: "#888",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  payText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});
