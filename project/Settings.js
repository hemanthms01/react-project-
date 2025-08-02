import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function Settings({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn}>
        <Text style={styles.backText} onPress={()=>navigation.goBack()}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Settings</Text>

      <ScrollView contentContainerStyle={styles.list}>
        <TouchableOpacity style={styles.item}>
          <View style={styles.iconWrap}>
            <View style={styles.circle} />
            <View style={styles.rect} />
          </View>
          <Text style={styles.label} onPress={()=>navigation.navigate('Notification')}>Notification Settings</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.iconWrap}>
            <Text style={styles.iconText}>🔒</Text>
          </View>
          <Text style={styles.label} onPress={()=>navigation.navigate('NewPassword')}>Password Manager</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.iconWrap}>
            <Text style={styles.iconText}>🗑️</Text>
          </View>
          <Text style={styles.label}>Delete Account</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 24,
    position: "relative",
  },
  backBtn: {
    position: "absolute",
    left: 18,
    top: 32,
    zIndex: 10,
  },
  backText: {
    fontSize: 24,
    color: "#222",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
    marginTop: 32,
    marginBottom: 18,
  },
  list: {
    paddingTop: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderBottomWidth: 1.5,
    borderBottomColor: "#f3f3f3",
    backgroundColor: "#fff",
  },
  iconWrap: {
    width: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 18,
    color: "#888",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
  },
  arrow: {
    marginLeft: "auto",
    fontSize: 22,
    color: "#bbb",
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#888",
  },
  rect: {
    width: 16,
    height: 4,
    borderRadius: 2,
    borderWidth: 1.5,
    borderColor: "#888",
    marginTop: 2,
  },
});
