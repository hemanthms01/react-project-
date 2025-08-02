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

const categories = ["All", "Vegetable", "Fruits", "Drinks"];
const sortBy = ["All", "Popular", "Most Recent", "Price"];
const brands = ["All", "Nestle", "Coco Cola", "Parle"];
const reviewOptions = [
  { label: "4.5 and above", value: "4.5" },
  { label: "4.0 - 4.5", value: "4.0" },
  { label: "3.5 - 4.0", value: "3.5" },
  { label: "3.0 - 3.5", value: "3.0" },
  { label: "2.5 - 3.0", value: "2.5" },
];

const Filter = () => {
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState("All");
  const [brand, setBrand] = useState("All");
  const [review, setReview] = useState("4.5");
  const [price, setPrice] = useState([100, 350]);

  const handlePrice = (idx, change) => {
    let newPrice = [...price];
    newPrice[idx] = Math.max(50, Math.min(400, newPrice[idx] + change));
    if (idx === 0 && newPrice[0] > newPrice[1]) newPrice[0] = newPrice[1];
    if (idx === 1 && newPrice[1] < newPrice[0]) newPrice[1] = newPrice[0];
    setPrice(newPrice);
  };

  const reset = () => {
    setCat("All");
    setSort("All");
    setBrand("All");
    setReview("4.5");
    setPrice([100, 350]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.title}>Filter</Text>
        </View>

        <Section label="Category">
          <ChipGroup data={categories} selected={cat} onSelect={setCat} />
        </Section>

        <Section label="Price Range">
          <View style={styles.priceControl}>
            <Text>${price[0]}</Text>
            <View style={styles.priceBtns}>
              <TouchableOpacity onPress={() => handlePrice(0, -10)} style={styles.adjustBtn}><Text>-</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handlePrice(0, 10)} style={styles.adjustBtn}><Text>+</Text></TouchableOpacity>
            </View>
            <Text>${price[1]}</Text>
            <View style={styles.priceBtns}>
              <TouchableOpacity onPress={() => handlePrice(1, -10)} style={styles.adjustBtn}><Text>-</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => handlePrice(1, 10)} style={styles.adjustBtn}><Text>+</Text></TouchableOpacity>
            </View>
          </View>
        </Section>

        <Section label="Reviews">
          {reviewOptions.map(r => (
            <TouchableOpacity
              key={r.value}
              style={styles.reviewRow}
              onPress={() => setReview(r.value)}
            >
              <Text style={styles.star}>★★★★★</Text>
              <Text style={styles.reviewLabel}>{r.label}</Text>
              <View style={[styles.radio, review === r.value && styles.radioSelected]} />
            </TouchableOpacity>
          ))}
        </Section>

        <Section label="Sort by">
          <ChipGroup data={sortBy} selected={sort} onSelect={setSort} />
        </Section>

        <Section label="Brand">
          <ChipGroup data={brands} selected={brand} onSelect={setBrand} />
        </Section>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.resetBtn} onPress={reset}>
          <Text style={styles.resetText}>Reset Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyBtn}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const ChipGroup = ({ data, selected, onSelect }) => (
  <View style={styles.chipRow}>
    {data.map(item => (
      <TouchableOpacity
        key={item}
        style={[styles.chip, selected === item && styles.chipSelected]}
        onPress={() => onSelect(item)}
      >
        <Text style={selected === item ? styles.chipTextSelected : styles.chipText}>{item}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const Section = ({ label, children }) => (
  <View style={{ marginBottom: 12 }}>
    <Text style={styles.sectionLabel}>{label}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 90,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  backArrow: {
    fontSize: 24,
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  sectionLabel: {
    marginLeft: 16,
    marginTop: 12,
    fontWeight: "600",
    fontSize: 16,
    color: "#222",
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 16,
    gap: 8,
    marginTop: 8,
  },
  chip: {
    backgroundColor: "#f3f3f3",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  chipSelected: {
    backgroundColor: "#888",
  },
  chipText: {
    color: "#888",
    fontWeight: "500",
  },
  chipTextSelected: {
    color: "#fff",
    fontWeight: "500",
  },
  priceControl: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 10,
  },
  priceBtns: {
    flexDirection: "row",
    gap: 4,
  },
  adjustBtn: {
    backgroundColor: "#ddd",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginHorizontal: 2,
  },
  reviewRow: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    marginVertical: 6,
  },
  star: {
    color: "#bbb",
    marginRight: 10,
  },
  reviewLabel: {
    flex: 1,
    fontSize: 16,
    color: "#222",
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#bbb",
  },
  radioSelected: {
    borderColor: "#888",
    backgroundColor: "#888",
  },
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
  },
  resetBtn: {
    backgroundColor: "#f3f3f3",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    flex: 1,
    marginRight: 8,
  },
  resetText: {
    textAlign: "center",
    fontWeight: "600",
    color: "#888",
  },
  applyBtn: {
    backgroundColor: "#888",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    flex: 1,
  },
  applyText: {
    textAlign: "center",
    fontWeight: "600",
    color: "#fff",
  },
});

export default Filter;
