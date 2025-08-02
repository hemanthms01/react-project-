import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const addresses = [
  {
    id: 1,
    label: "Home",
    detail: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
  },
  {
    id: 2,
    label: "Office",
    detail: "4517 Washington Ave. Manchester, Kentucky 39495",
  },
  {
    id: 3,
    label: "Parent’s House",
    detail: "8502 Preston Rd. Inglewood, Maine 98380",
  },
  {
    id: 4,
    label: "Friend’s House",
    detail: "2464 Royal Ln. Mesa, New Jersey 45463",
  },
];

export default function DeliveryAddress() {
  const [selected, setSelected] = useState(1);

  const renderAddress = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => setSelected(item.id)}
      activeOpacity={0.7}
    >
      <View style={styles.icon}>
        <Ionicons name="location-outline" size={20} color="#888" />
      </View>
      <View style={styles.info}>
        <Text style={styles.label}>{item.label}</Text>
        <Text style={styles.detail}>{item.detail}</Text>
      </View>
      <View style={styles.radio}>
        <View
          style={[
            styles.radioOuter,
            selected === item.id && styles.radioOuterSelected,
          ]}
        >
          {selected === item.id && <View style={styles.radioInner} />}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.title}>Delivery Address</Text>
      </View>

      <ScrollView contentContainerStyle={styles.list}>
        <FlatList
          data={addresses}
          renderItem={renderAddress}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
        />
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addIcon}>+</Text>
          <Text style={styles.addText}>Add New Delivery Address</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.applyBtn}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 90,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 12,
  },
  backBtn: {
    paddingRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 18,
  },
  icon: {
    marginTop: 2,
    marginRight: 12,
  },
  info: {
    flex: 1,
    flexDirection: "column",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  detail: {
    fontSize: 15,
    color: "#888",
    marginTop: 2,
  },
  radio: {
    marginLeft: 10,
    marginTop: 2,
    justifyContent: "center",
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
  },
  radioOuterSelected: {
    borderColor: "#888",
  },
  radioInner: {
    width: 10,
    height: 10,
    backgroundColor: "#888",
    borderRadius: 5,
  },
  addBtn: {
    marginTop: 18,
    paddingVertical: 18,
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: "#bbb",
    borderRadius: 12,
    backgroundColor: "#fafafa",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  addIcon: {
    fontSize: 20,
    fontWeight: "700",
    color: "#888",
    marginRight: 8,
  },
  addText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#888",
  },
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 4,
    padding: 18,
  },
  applyBtn: {
    backgroundColor: "#888",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  applyText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
 

















