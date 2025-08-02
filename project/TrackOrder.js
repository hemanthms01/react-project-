import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function TrackOrder({navigation}) {
  const steps = [
    { label: "Order Placed", date: "10 Sep 2023, 04:25 PM", done: true },
    { label: "In Progress", date: "10 Sep 2023, 03:54 PM", done: true },
    { label: "Shipped", date: "Expected 12 Sep 2023", done: true },
    { label: "Delivered", date: "12 Sep 2023", done: true },
  ];

  const products = [
    { id: 1, badge: "35% OFF", name: "Fresh Strawberry", qty: "3 Kg", price: 30, oldPrice: 36 },
    { id: 2, badge: "35% OFF", name: "Fresh Papaya", qty: "3 Kg", price: 30, oldPrice: 36 },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.backIcon} onPress={()=>navigation.goBack()}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Track Order</Text>
        </View>

        <Text style={styles.orderNumber}>
          Order <Text style={{ fontWeight: "bold" }}>#GR45HGJF</Text>
        </Text>

        {steps.map((step, index) => (
          <View key={index} style={styles.stepRow}>
            <View style={styles.stepIndicator}>
              <View style={[styles.stepCircle, step.done && styles.stepDone]}>
                {step.done && <Text style={styles.check}>✓</Text>}
              </View>
              {index < steps.length - 1 && <View style={styles.stepLine} />}
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepLabel}>{step.label}</Text>
              <Text style={styles.stepDate}>{step.date}</Text>
            </View>
          </View>
        ))}

        <View style={styles.divider} />
        <Text style={styles.productsTitle}>Products</Text>

        {products.map((item) => (
          <View key={item.id} style={styles.productCard}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.badge}</Text>
            </View>
            <View style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productQty}>{item.qty}</Text>
              <View style={styles.priceRow}>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.oldPrice}>${item.oldPrice}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.trackButton}>
          <Text style={styles.trackText} onPress={()=>navigation.navigate('TrackLiveLocation')}>Track Live Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width:'100%',
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 16,
    gap: 12,
  },
  backIcon: {
    fontSize: 26,
    color: "#222",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },
  orderNumber: {
    fontSize: 16,
    color: "#222",
    fontWeight: "500",
    marginLeft: 18,
    marginBottom: 8,
  },
  stepRow: {
    flexDirection: "row",
    paddingHorizontal: 18,
    gap: 10,
  },
  stepIndicator: {
    alignItems: "center",
    width: 32,
  },
  stepCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  stepDone: {
    borderColor: "#888",
  },
  check: {
    color: "#888",
    fontWeight: "bold",
  },
  stepLine: {
    width: 2,
    flex: 1,
    backgroundColor: "#bbb",
  },
  stepContent: {
    flex: 1,
    paddingVertical: 4,
  },
  stepLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  stepDate: {
    fontSize: 14,
    color: "#888",
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 16,
    marginHorizontal: 18,
  },
  productsTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    marginLeft: 18,
    marginBottom: 8,
  },
  productCard: {
    backgroundColor: "#fafafa",
    borderRadius: 14,
    padding: 12,
    marginHorizontal: 14,
    marginBottom: 12,
    flexDirection: "row",
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#888",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    zIndex: 1,
  },
  badgeText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
  productImage: {
    width: 56,
    height: 56,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
    justifyContent: "center",
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  productQty: {
    color: "#888",
    fontSize: 14,
  },
  priceRow: {
    flexDirection: "row",
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
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 18,
    backgroundColor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 6,
    alignItems: "center",
  },
  trackButton: {
    width: "100%",
    backgroundColor: "#888",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  trackText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
