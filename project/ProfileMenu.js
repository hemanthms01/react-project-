import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import { useNavigation } from "@react-navigation/native";



export default function ProfileMenu({navigation}) {
  const [avatar, setAvatar] = useState(null);

  const pickImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        mediaType: "photo",
      });
      setAvatar({ uri: image.path });
    } catch (error) {
      console.log("Image picking cancelled or failed", error);
    }
  };
  function choice(item)
{
    if(item==="My Wallet")  
        {navigation.navigate('Wallet');}
    else if(item==="Your profile") {navigation.navigate('Profile');}
    else if(item==="My Coupons") {navigation.navigate('Coupon');}
    else if(item==="Settings") {navigation.navigate('Settings');}
    else if(item==="Manage Address") {navigation.navigate('AddressOptionScreen');}
    else if(item==="Payment Methods") {navigation.navigate('AddCard');}
}
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => Alert.alert("Go back")}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Profile</Text>

      <View style={styles.avatarWrap}>
        <View style={styles.avatarContainer}>
          {avatar ? (
            <Image source={avatar} style={styles.avatarImage} />
          ) : (
            <View style={styles.avatarPlaceholder} />
          )}

          <TouchableOpacity
            style={styles.avatarEdit}
            onPress={pickImage}
          >
            <Text style={styles.editIcon}>✎</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.name}>Esther Howard</Text>

      <ScrollView style={styles.menuList}>
        {[
          "Your profile",
          "Manage Address",
          "Payment Methods",
          "My Wallet",
          "My Coupons",
          "Settings",
          "Help Center",
          "Privacy Policy",
        ].map((item, index) => (
          <TouchableOpacity 
          key={index} 
          style={styles.menuItem}  
          onPress={()=>choice(item)}>
            <Text style={styles.menuLabel} >{item}</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  backBtn: {
    position: "absolute",
    top: 32,
    left: 18,
    zIndex: 1,
  },
  backText: {
    fontSize: 24,
    color: "#222",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 32,
    marginBottom: 12,
    color: "#222",
  },
  avatarWrap: {
    alignItems: "center",
    marginBottom: 8,
  },
  avatarContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  avatarPlaceholder: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#e0e0e0",
  },
  avatarEdit: {
    position: "absolute",
    right: 2,
    bottom: 2,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  editIcon: {
    fontSize: 16,
    color: "#888",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 18,
    color: "#222",
  },
  menuList: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderBottomWidth: 1.5,
    borderColor: "#f3f3f3",
  },
  menuLabel: {
    fontSize: 16,
    color: "#222",
    flex: 1,
  },
  menuArrow: {
    fontSize: 22,
    color: "#bbb",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 6,
    elevation: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  navIcon: {
    fontSize: 20,
    color: "#888",
  },
  navLabel: {
    fontSize: 12,
    color: "#888",
  },
  activeNav: {
    color: "#222",
  },
});
