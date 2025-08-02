import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <View style={styles.location}>
            <Text style={styles.locationLabel}>Location</Text>
            <TouchableOpacity style={styles.locationBtn}>
              <View style={styles.locationDot} />
              <Text style={styles.locationText} onPress={()=>navigation.navigate('Location')}>New York, USA ▼</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <View style={styles.bellBadge} />
              <Text>🔔</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text>👤</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Food, Drinks, etc"
          />
          <TouchableOpacity style={styles.searchFilter} onPress={()=>navigation.navigate('Filter')}>
          <Ionicons name={"options"} size={30} color={"black"} />
          </TouchableOpacity>
        </View>

        <View style={styles.offerBanner}>
          <Text style={styles.offerTitle}>Up to 30% offer!</Text>
          <Text style={styles.offerDesc}>Enjoy our big offer every day</Text>
          <TouchableOpacity style={styles.offerBtn}>
            <Text style={styles.offerBtnText}>Shop Now</Text>
          </TouchableOpacity>
          <View style={styles.dots}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Category</Text>
          <TouchableOpacity>
            <Text style={styles.sectionLink} onPress={()=>navigation.navigate('Category')}>See All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryRow}>
          {['Vegetable', 'Fruits', 'Milk & Eggs', 'Drinks'].map((item, i) => (
            <View style={styles.categoryItem} key={i}>
              <View style={[styles.categoryIcon, styles[`category${i}`]]} />
              <Text style={styles.categoryLabel}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Best Deal</Text>
          <TouchableOpacity>
            <Text style={styles.sectionLink} onPress={()=>navigation.navigate('BestDeal')}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal style={styles.bestDealRow}>
          {['Fresh Apple', 'Fresh Orange','apple juice'].map((item, i) => (
            <View style={styles.bestDealCard} key={i}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>35% OFF</Text>
              </View>
              <TouchableOpacity style={styles.heart}>
                <Text>♥</Text>
              </TouchableOpacity>
              <View style={styles.dealImg} />
              <Text style={styles.dealTitle}>{item}</Text>
              <Text style={styles.dealDesc}>1 Kg</Text>
            </View>
          ))}
          
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location: {
    flexDirection: 'column',
  },
  locationLabel: {
    fontSize: 14,
    color: '#888',
  },
  locationBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationDot: {
    width: 8,
    height: 8,
    backgroundColor: '#888',
    borderRadius: 4,
    marginRight: 4,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    marginLeft: 10,
  },
  bellBadge: {
    width: 8,
    height: 8,
    backgroundColor: '#e74c3c',
    borderRadius: 4,
    position: 'absolute',
    top: -2,
    right: -2,
    borderWidth: 1,
    borderColor: '#fff',
  },
  searchRow: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 12,
    borderRadius: 10,
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  searchFilter: {
    width: 48,
    height: 48,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  offerBanner: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },
  offerDesc: {
    color: '#888',
    marginBottom: 10,
  },
  offerBtn: {
    backgroundColor: '#888',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  offerBtnText: {
    color: '#fff',
    fontWeight: '600',
  },
  dots: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 6,
  },
  dot: {
    width: 7,
    height: 7,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: '#888',
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  sectionLink: {
    color: '#888',
    textDecorationLine: 'underline',
  },
  categoryRow: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 16,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginBottom: 6,
  },
  category0: { backgroundColor: '#e0f7e9' },
  category1: { backgroundColor: '#fff3e0' },
  category2: { backgroundColor: '#e3f2fd' },
  category3: { backgroundColor: '#fce4ec' },
  categoryLabel: {
    color: '#888',
  },
  bestDealRow: {
    marginTop: 16,
    flexDirection: 'row',
  },
  bestDealCard: {
    backgroundColor: '#fafafa',
    padding: 10,
    borderRadius: 10,
    marginRight: 12,
    width: 140,
  },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#888',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  heart: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  dealImg: {
    height: 60,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 10,
  },
  dealTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  dealDesc: {
    color: '#888',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 18,
    marginBottom: 2,
  },
  navLabel: {
    fontSize: 12,
    color: '#888',
  },
});

