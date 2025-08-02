import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";

const walletBalance = 12000;
const transactions = [
  {
    dateGroup: "Today",
    items: [
      {
        title: "Money Added to Wallet",
        amount: 500,
        type: "credit",
        time: "24 September | 7:30 AM",
        balance: 12000,
      },
    ],
  },
  {
    dateGroup: "Yesterday",
    items: [
      {
        title: "Order No #34234",
        amount: -500,
        type: "debit",
        time: "23 September | 5:30 AM",
        balance: 11250,
      },
    ],
  },
  {
    dateGroup: "22 September 2023",
    items: [
      {
        title: "Refund for Order No #34234",
        amount: 500,
        type: "credit",
        time: "22 September | 7:30 AM",
        balance: 11250,
      },
      {
        title: "Order No #34234",
        amount: -250,
        type: "debit",
        time: "22 September | 5:30 AM",
        balance: 11250,
      },
      {
        title: "Order No #34234",
        amount: -250,
        type: "debit",
        time: "22 September | 4:30 AM",
        balance: 11250,
      },
      {
        title: "Order No #34234",
        amount: -250,
        type: "debit",
        time: "22 September | 7:30 AM",
        balance: 11250,
      },
    ],
  },
];

export default function Wallet({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => Alert.alert("Back pressed")}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Wallet</Text>
      </View>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Wallet Balance</Text>
        <Text style={styles.balanceValue}>
          ${walletBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </Text>
        <TouchableOpacity
          style={styles.balanceIcon}
          onPress={() => Alert.alert("Options pressed")}
        >
          <Text>💼</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => Alert.alert("Add money")}
        >
          <Text style={styles.addBtnText} onPress={()=>navigation.navigate('AddMoney')}>Add Money</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.historyList}>
        {transactions.map((group) => (
          <View key={group.dateGroup}>
            <Text style={styles.historyDate}>{group.dateGroup}</Text>
            {group.items.map((item, idx) => (
              <View style={styles.historyCard} key={idx}>
                <View style={styles.historyRow}>
                  <Text style={styles.historyTitle}>{item.title}</Text>
                  <Text
                    style={[
                      styles.historyAmount,
                      item.type === "credit" ? styles.credit : styles.debit,
                    ]}
                  >
                    {item.amount > 0 ? "+" : "-"}$
                    {Math.abs(item.amount).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </Text>
                </View>
                <View style={styles.historyMeta}>
                  <Text>{item.time}</Text>
                  <Text style={styles.historyBalance}>
                    Balance $
                    {item.balance.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </Text>
                </View>
              </View>
            ))}
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
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  backBtn: {
    position: "absolute",
    left: 8,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
  backText: {
    fontSize: 24,
    color: "#222",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },
  balanceCard: {
    backgroundColor: "#fafafa",
    marginHorizontal: 14,
    padding: 18,
    borderRadius: 12,
    marginBottom: 18,
    position: "relative",
  },
  balanceLabel: {
    fontSize: 16,
    color: "#bbb",
    marginBottom: 4,
  },
  balanceValue: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    marginBottom: 8,
  },
  balanceIcon: {
    position: "absolute",
    top: 18,
    right: 18,
    backgroundColor: "#fff",
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  addBtn: {
    backgroundColor: "#888",
    paddingVertical: 14,
    borderRadius: 8,
    width: "100%",
    marginTop: 10,
  },
  addBtnText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
  },
  historyList: {
    paddingBottom: 24,
  },
  historyDate: {
    fontSize: 16,
    fontWeight: "600",
    color: "#bbb",
    marginLeft: 18,
    marginVertical: 10,
  },
  historyCard: {
    backgroundColor: "#fafafa",
    borderRadius: 12,
    padding: 14,
    marginHorizontal: 14,
    marginBottom: 12,
    elevation: 1,
  },
  historyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
  },
  historyAmount: {
    fontSize: 16,
    fontWeight: "600",
  },
  credit: {
    color: "#2ecc71",
  },
  debit: {
    color: "#e74c3c",
  },
  historyMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    color: "#bbb",
    fontSize: 14,
  },
  historyBalance: {
    color: "#bbb",
    fontSize: 14,
  },
});
