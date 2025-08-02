import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";

export default function TrackLiveLocation({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={{ fontSize: 24 }} onPress={()=>navigation.goBack()}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Track Live Location</Text>
      </View>

      <View style={styles.mapWrap}>
        <View style={styles.mapPlaceholder} />
        <TouchableOpacity style={styles.mapSettings}>
          <View style={styles.mapSettingsInner}>
            <View style={styles.mapSettingsCircle} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.sheet}>
        <Text style={styles.arrivalLabel}>Estimated Arrival Time</Text>
        <Text style={styles.arrivalTime}>12:30 PM - 01:00 PM</Text>

        <View style={styles.deliveryRow}>
          <View style={styles.avatar} />
          <View style={styles.deliveryInfo}>
            <Text style={styles.deliveryName}>John Doe</Text>
            <Text style={styles.deliveryRole}>Delivery Man</Text>
          </View>
          <TouchableOpacity style={styles.iconBtn}><Text>💬</Text></TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}><Text>📞</Text></TouchableOpacity>
        </View>

        <View style={styles.marketCard}>
          <View style={styles.marketRadio} />
          <View>
            <Text style={styles.marketName}>Market Mart</Text>
            <Text style={styles.marketAddress}>📍 1901 Thornridge Cir. Shiloh, Haw...</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Order Details</Text>
        <View style={styles.orderList}>
          <Text style={styles.orderBadge}>35% OFF</Text>
          <View style={styles.orderItem}>
            <View style={styles.orderImg} />
            <View style={styles.orderInfo}>
              <Text style={styles.orderName}>Fresh Strawberry</Text>
              <Text style={styles.orderQty}>1 Kg</Text>
              <View style={styles.priceRow}>
                <Text style={styles.price}>$10</Text>
                <Text style={styles.oldPrice}>$12</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.sheetBar} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 430,
    marginHorizontal: "auto",
    minHeight: Dimensions.get("window").height,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingTop: 18,
    position: "relative",
    zIndex: 2,
    backgroundColor: "#fff",
  },
  backBtn: {
    position: "absolute",
    left: 8,
    top: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },
  mapWrap: {
    height: 260,
    backgroundColor: "#f7f7f7",
    position: "relative",
    zIndex: 1,
  },
  mapPlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f7f7f7",
  },
  mapSettings: {
    position: "absolute",
    right: 18,
    bottom: 18,
    width: 44,
    height: 44,
    backgroundColor: "#fff",
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
    zIndex: 2,
  },
  mapSettingsInner: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
  },
  mapSettingsCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#bbb",
  },
  sheet: {
    position: "relative",
    top: -28,
    backgroundColor: "#fff",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 16,
    padding: 24,
    zIndex: 3,
  },
  arrivalLabel: {
    color: "#bbb",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 2,
  },
  arrivalTime: {
    color: "#222",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 18,
  },
  deliveryRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#e0e0e0",
  },
  deliveryInfo: {
    flex: 1,
    gap: 2,
  },
  deliveryName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  deliveryRole: {
    color: "#888",
    fontSize: 15,
  },
  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 4,
  },
  marketCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fafafa",
    borderRadius: 12,
    padding: 12,
    gap: 10,
    marginBottom: 14,
  },
  marketRadio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#888",
    backgroundColor: "#fff",
    marginTop: 4,
    marginRight: 4,
  },
  marketName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  marketAddress: {
    color: "#888",
    fontSize: 15,
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginTop: 10,
    marginBottom: 8,
  },
  orderList: {
    marginBottom: 8,
    position: "relative",
  },
  orderBadge: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#888",
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    zIndex: 1,
  },
  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fafafa",
    borderRadius: 10,
    padding: 12,
    paddingLeft: 38,
    marginTop: 10,
  },
  orderImg: {
    width: 44,
    height: 44,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    marginRight: 8,
  },
  orderInfo: {
    flex: 1,
    gap: 2,
  },
  orderName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  orderQty: {
    color: "#888",
    fontSize: 15,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
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
  },
  sheetBar: {
    width: 48,
    height: 4,
    backgroundColor: "#eee",
    borderRadius: 2,
    marginTop: 18,
    alignSelf: "center",
  },
});
