import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

const orders = [
  {
    id: 1,
    status: "Order Placed",
    transaction: "#GR45HGJF",
    date: "10, Sep",
    total: "$25.00",
    tab: "Active",
  },
  {
    id: 2,
    status: "In Progress",
    transaction: "#GR45HGJF",
    date: "10, Sep",
    total: "$25.00",
    tab: "Active",
  },
  {
    id: 3,
    status: "In Progress",
    transaction: "#GR45HGJF",
    date: "10, Sep",
    total: "$25.00",
    tab: "Active",
  },
];

const tabs = ["Active", "Completed", "Cancelled"];

export default function MyOrder({navigation}) {
  const [activeTab, setActiveTab] = useState("Active");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={styles.backText} onPress={()=>navigation.goBack()}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>My Order</Text>
      </View>

      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tab,
              activeTab === tab && styles.tabActive,
            ]}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.orderList}>
        {orders
          .filter((o) => o.tab === activeTab)
          .map((order) => (
            <View key={order.id} style={styles.card}>
              <Text
                style={[
                  styles.status,
                  order.status === "Delivered" && styles.delivered,
                ]}
              >
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

              {activeTab === "Completed" ? (
                <View style={styles.actions}>
                  <TouchableOpacity style={styles.disabledBtn} disabled>
                    <Text style={styles.disabledText}>Leave Review</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.reorderBtn}>
                    <Text style={styles.reorderText}>Re-Order</Text>
                  </TouchableOpacity>
                </View>
              ) : activeTab === "Active" ? (
                <View style={styles.actions}>
                  <TouchableOpacity style={styles.cancelBtn}>
                    <Text style={styles.reorderText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.reorderBtn}>
                    <Text style={styles.reorderText} onPress={()=>navigation.navigate('TrackOrder')}>Track Order</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
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
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
  },
  backBtn: {
    marginLeft: 8,
  },
  backText: {
    fontSize: 24,
    color: "#222",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginLeft: 12,
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1.5,
    borderBottomColor: "#eee",
    marginBottom: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#bbb",
  },
  tabActive: {
    borderBottomWidth: 2.5,
    borderBottomColor: "#888",
  },
  tabTextActive: {
    color: "#222",
  },
  orderList: {
    flex: 1,
  },
  card: {
    backgroundColor: "#fafafa",
    marginHorizontal: 14,
    marginBottom: 18,
    borderRadius: 14,
    padding: 18,
    borderWidth: 1.5,
    borderColor: "#f3f3f3",
    shadowColor: "#000",
    shadowOpacity: 0.01,
    shadowRadius: 8,
  },
  status: {
    backgroundColor: "#f3f3f3",
    color: "#bbb",
    fontWeight: "600",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 14,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  delivered: {
    color: "#888",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  label: {
    color: "#888",
    fontSize: 14,
  },
  value: {
    color: "#222",
    fontWeight: "600",
    fontSize: 15,
  },
  actions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 10,
  },
  disabledBtn: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: "center",
  },
  disabledText: {
    color: "#bbb",
    fontWeight: "600",
    fontSize: 16,
  },
  reorderBtn: {
    flex: 1,
    backgroundColor: "#888",
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: "center",
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: "center",
  },
  reorderText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 64,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 16,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 4,
  },
  navItemActive: {
    color: "#222",
  },
  navIcon: {
    fontSize: 20,
    color: "#888",
  },
  navLabel: {
    fontSize: 13,
    color: "#888",
  },
});
