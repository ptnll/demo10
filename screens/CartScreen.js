import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants/theme';
import { CartContext } from '../context/CartContext';
import BottomTabBar from '../components/BottomTabBar';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <View style={styles.cartItem}>
      {/* Image */}
      <Image
        source={item.image}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.itemHeader}>
          <View style={styles.itemText}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDesc}>{item.description}</Text>
          </View>
          <TouchableOpacity onPress={() => onRemove(item.id)}>
            <Ionicons name="close" size={18} color={COLORS.gray} />
          </TouchableOpacity>
        </View>

        {/* Controls Row */}
        <View style={styles.controlsRow}>
          <View style={styles.quantityControl}>
            <TouchableOpacity
              onPress={() => onUpdateQuantity(item.id, item.quantity - 1)}
              style={styles.quantityBtn}
            >
              <Text style={styles.quantityBtnText}>−</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={() => onUpdateQuantity(item.id, item.quantity + 1)}
              style={styles.quantityBtn}
            >
              <Text style={styles.quantityBtnText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>${(item.price * item.quantity).toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

const CartScreen = ({ navigation }) => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } =
    useContext(CartContext);

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Ionicons name="cart-outline" size={64} color={COLORS.lightGray} />
      <Text style={styles.emptyText}>Your cart is empty</Text>
      <Text style={styles.emptySubText}>Add items to get started</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      {/* Cart Items */}
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
          />
        )}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={styles.listContent}
        scrollEnabled={cart.length > 0}
      />

      {/* Footer */}
      {cart.length > 0 && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutBtnText}>Go to Checkout</Text>
            <Text style={styles.checkoutPrice}>${getCartTotal().toFixed(2)}</Text>
          </TouchableOpacity>
        </View>
      )}

      <BottomTabBar 
  activeTab="cart" 
  onTabPress={(key) => navigation.navigate(key)} 
/>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: 16,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontWeight: '700',
    color: COLORS.text,
    textAlign: 'center',
  },
  listContent: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: 12,
    flexGrow: 1,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.borderRadius,
    padding: 12,
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: COLORS.lightGray,
  },
  content: {
    flex: 1,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  itemText: {
    flex: 1,
  },
  itemName: {
    fontSize: SIZES.font,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 2,
  },
  itemDesc: {
    fontSize: SIZES.small,
    color: COLORS.subText,
  },
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: 6,
    padding: 4,
  },
  quantityBtn: {
    width: 26,
    height: 26,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.subText,
    fontWeight: '600',
  },
  quantity: {
    marginHorizontal: 8,
    fontSize: SIZES.font,
    fontWeight: '600',
    color: COLORS.text,
    minWidth: 20,
    textAlign: 'center',
  },
  price: {
    fontSize: SIZES.large,
    fontWeight: '700',
    color: COLORS.price,
  },
  /* totalRow and totalPrice removed - not shown above checkout button */
  checkoutBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkoutBtnText: {
    fontSize: SIZES.font,
    fontWeight: '600',
    color: COLORS.white,
    flex: 1,
    textAlign: 'center',
  },
  checkoutPrice: {
    fontSize: SIZES.font,
    fontWeight: '600',
    color: COLORS.white,
    minWidth: 50,
    textAlign: 'right',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: SIZES.medium,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: 16,
  },
  emptySubText: {
    fontSize: SIZES.font,
    color: COLORS.subText,
    marginTop: 4,
  },
});

export default CartScreen;