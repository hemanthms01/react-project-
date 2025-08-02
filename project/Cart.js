import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native';

const Cart = ({navigation}) => {
  const [promo, setPromo] = useState('');
  const [items, setItems] = useState([
    { id: 1, name: 'Fresh Strawberry', qty: 1, price: 10, oldPrice: 12, badge: '35% OFF' },
    { id: 2, name: 'Fresh Papaya', qty: 1, price: 10, oldPrice: 12 },
    { id: 3, name: 'Fresh Watermelon', qty: 1, price: 10, oldPrice: 12, badge: '35% OFF' },
  ]);

  const updateQty = (id, delta) => {
    setItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const removeItem = id => {
    setItems(items => items.filter(item => item.id !== id));
  };

  const subTotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const delivery = 5;
  const discount = -35;
  const total = subTotal + delivery + discount;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn}>
        <Text style={styles.backBtnText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Shopping Cart</Text>
      <ScrollView style={styles.cartList}>
        {items.map(item => (
          <View key={item.id} style={styles.item}>
            {item.badge && <Text style={styles.badge}>{item.badge}</Text>}
            <View style={styles.imgBox} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <View style={styles.qtyRow}>
                <Text style={styles.qtyLabel}>1 Kg</Text>
                <View style={styles.qtyControls}>
                  <TouchableOpacity onPress={() => updateQty(item.id, -1)} style={styles.qtyBtn}>
                    <Text style={styles.qtyBtnText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtyValue}>{item.qty} Kg</Text>
                  <TouchableOpacity onPress={() => updateQty(item.id, 1)} style={styles.qtyBtn}>
                    <Text style={styles.qtyBtnText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.price}>${item.price}</Text>
                <Text style={styles.oldPrice}>${item.oldPrice}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.deleteBtn}>
              <Text style={{ fontSize: 16, color: '#bbb' }}>✕</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomBar}>
        <View style={styles.promoRow}>
          <TextInput
            style={styles.promoInput}
            placeholder="Promo Code"
            value={promo}
            onChangeText={setPromo}
          />
          <TouchableOpacity style={styles.promoApply}>
            <Text style={styles.promoApplyText}>Apply</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Text>Sub-Total</Text>
            <Text>${subTotal.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>Delivery Fee</Text>
            <Text>${delivery.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text>Discount</Text>
            <Text style={{ color: '#e74c3c' }}>{discount}</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text>Total Cost</Text>
            <Text>${total.toFixed(2)}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText} onPress={()=>navigation.navigate('Checkout')}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   width:'100%', 
   marginHorizontal: 'auto',
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom: 220,
  },
  backBtn: {
    position: 'absolute',
    left: 18,
    top: 32,
    zIndex: 5,
  },
  backBtnText: {
    fontSize: 24,
    color: '#222',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    textAlign: 'center',
    marginTop: 32,
    marginBottom: 18,
  },
  cartList: {
    paddingHorizontal: 14,
  },
  item: {
    backgroundColor: '#fafafa',
    borderRadius: 14,
    padding: 12,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#888',
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    zIndex: 1,
  },
  imgBox: {
    width: 56,
    height: 56,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginRight: 8,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  qtyLabel: {
    fontSize: 15,
    color: '#888',
  },
  qtyControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyBtnText: {
    fontSize: 18,
    color: '#888',
  },
  qtyValue: {
    fontSize: 16,
    minWidth: 36,
    textAlign: 'center',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  price: {
    color: '#222',
    fontSize: 16,
    fontWeight: '600',
  },
  oldPrice: {
    color: '#bbb',
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
  deleteBtn: {
    marginLeft: 8,
    marginTop: 8,
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    padding: 18,
    elevation: 8,
  },
  promoRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  promoInput: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    backgroundColor: '#fafafa',
    fontSize: 16,
  },
  promoApply: {
    backgroundColor: '#888',
    paddingHorizontal: 18,
    justifyContent: 'center',
    borderRadius: 8,
    height: 44,
  },
  promoApplyText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  summary: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 14,
    marginBottom: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    fontSize: 16,
    color: '#222',
  },
  summaryDivider: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    borderStyle: 'dashed',
    marginVertical: 8,
  },
  totalRow: {
    fontWeight: '700',
    fontSize: 17,
  },
  checkoutBtn: {
    backgroundColor: '#222',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Cart;
