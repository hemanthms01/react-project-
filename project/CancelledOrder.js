import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const orders = [
  {
    id: 1,
    status: "Cancelled",
    transaction: "#GR45HGJF",
    date: "10, Sep",
    total: "$25.00",
  },
  {
    id: 2,
    status: "Delivered",
    transaction: "#GR45HGJF",
    date: "10, Sep",
    total: "$25.00",
  },
  {
    id: 3,
    status: "Delivered",
    transaction: "#GR45HGJF",
    date: "10, Sep",
    total: "$25.00",
  },
];

export default function CancelledOrder() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} accessibilityLabel="Back">
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>My Order</Text>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Active</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Completed</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.tab, styles.tabActive]}><Text style={styles.tabTextActive}>Cancelled</Text></TouchableOpacity>
      </View>
      <ScrollView style={styles.list}>
        {orders.map(order => (
          <View style={styles.card} key={order.id}>
            <Text style={[styles.status, order.status === "Cancelled" ? styles.cancelled : styles.delivered]}>
              {order.status}
            </Text>
            <View style={styles.row}>
              <Text style={styles.label}>Transaction ID</Text>
              <Text style={styles.value}>{order.transaction}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Order Date</Text>
              <Text style={styles.value}>{order.date}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Total Payment</Text>
              <Text style={styles.value}>{order.total}</Text>
            </View>
            <TouchableOpacity style={styles.reorderBtn}>
              <Text style={styles.reorderText}>Re-Order</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>⌂</Text>
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🛒</Text>
          <Text style={styles.navLabel}>My Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>❤</Text>
          <Text style={styles.navLabel}>Favourite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navActive]}>
          <Text style={styles.navIcon}>💳</Text>
          <Text style={styles.navLabel}>My Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 80,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 18,
    paddingBottom: 10,
  },
  backBtn: {
    marginLeft: 8,
  },
  backIcon: {
    fontSize: 24,
    color: "#222",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    marginLeft: 12,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1.5,
    borderBottomColor: "#eee",
    marginBottom: 8,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
  },
  tabText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#bbb",
  },
  tabTextActive: {
    color: "#222",
    borderBottomWidth: 2.5,
    borderBottomColor: "#888",
    paddingBottom: 10,
  },
  tabActive: {
    borderBottomWidth: 2.5,
    borderBottomColor: "#888",
  },
  list: {
    paddingHorizontal: 14,
  },
  card: {
    backgroundColor: "#fafafa",
    borderRadius: 14,
    marginBottom: 18,
    padding: 18,
    borderColor: "#f3f3f3",
    borderWidth: 1.5,
  },
  status: {
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 14,
    marginBottom: 8,
    fontSize: 15,
    fontWeight: "600",
    alignSelf: "flex-start",
  },
  cancelled: {
    backgroundColor: "#f3f3f3",
    color: "#bbb",
  },
  delivered: {
    backgroundColor: "#f3f3f3",
    color: "#888",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  label: {
    color: "#888",
    fontSize: 15,
  },
  value: {
    color: "#222",
    fontWeight: "600",
    fontSize: 16,
  },
  reorderBtn: {
    backgroundColor: "#888",
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: "center",
    marginTop: 10,
  },
  reorderText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
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
    shadowRadius: 16,
    elevation: 4,
  },
  navItem: {
    alignItems: "center",
    flex: 1,
  },
  navActive: {
    color: "#222",
  },
  navIcon: {
    fontSize: 21,
    marginBottom: 2,
    color: "#888",
  },
  navLabel: {
    fontSize: 14,
    color: "#888",
  },
});
