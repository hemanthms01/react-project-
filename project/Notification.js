import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const notifications = [
  {
    group: "TODAY",
    items: [
      {
        icon: "📦",
        title: "Order Shipped",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        time: "1h",
        unread: true,
      },
      {
        icon: "⏰",
        title: "Flash Sale Alert",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        time: "1h",
        unread: true,
      },
      {
        icon: "⭐",
        title: "Product Review Request",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        time: "1h",
        unread: false,
      },
    ],
  },
  {
    group: "YESTERDAY",
    items: [
      {
        icon: "📦",
        title: "Order Shipped",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        time: "1d",
        unread: false,
      },
      {
        icon: "💰",
        title: "New Paypal Added",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        time: "1d",
        unread: false,
      },
      {
        icon: "⏰",
        title: "Flash Sale Alert",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        time: "1d",
        unread: false,
      },
    ],
  },
];

export default function Notification({navigation}) {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={styles.backArrow} onPress={()=>navigation.goBack()}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Notification</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>2 NEW</Text>
        </View>
      </View>

      {/* Notification List */}
      <View style={styles.list}>
        {notifications.map((group, idx) => (
          <View key={idx}>
            <View style={styles.groupRow}>
              <Text style={styles.groupLabel}>{group.group}</Text>
              <TouchableOpacity>
                <Text style={styles.markAll}>Mark all as read</Text>
              </TouchableOpacity>
            </View>

            {group.items.map((item, i) => (
              <View
                key={`${item.title}-${i}`}
                style={[
                  styles.item,
                  item.unread && styles.itemUnread,
                ]}
              >
                <View style={styles.iconContainer}>
                  <Text style={styles.icon}>{item.icon}</Text>
                </View>
                <View style={styles.content}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemDesc} numberOfLines={2}>
                    {item.desc}
                  </Text>
                </View>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingBottom: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingVertical: 18,
  },
  backBtn: {
    position: "absolute",
    left: 12,
  },
  backArrow: {
    fontSize: 24,
    color: "#222",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },
  badge: {
    position: "absolute",
    right: 18,
    backgroundColor: "#bbb",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
    letterSpacing: 1,
  },
  list: {
    marginTop: 8,
  },
  groupRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    marginVertical: 12,
  },
  groupLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#bbb",
    letterSpacing: 1,
  },
  markAll: {
    fontSize: 14,
    color: "#bbb",
    textDecorationLine: "underline",
  },
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
  },
  itemUnread: {
    backgroundColor: "#fafafa",
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: "#f3f3f3",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  icon: {
    fontSize: 22,
  },
  content: {
    flex: 1,
    flexDirection: "column",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },
  itemDesc: {
    fontSize: 14,
    color: "#888",
    marginTop: 2,
  },
  time: {
    fontSize: 13,
    color: "#bbb",
    marginLeft: 8,
    marginTop: 4,
  },
});
