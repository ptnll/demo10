import React, { useState, useContext } from 'react';
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
import { products } from '../constants/data';
import { CartContext } from '../context/CartContext';
import BottomTabBar from '../components/BottomTabBar';

const FavouriteScreen = ({ navigation }) => {
  const [favorites] = useState(products.slice(0, 5));
  const { addToCart } = useContext(CartContext);

  const handleAddAll = () => {
    favorites.forEach((p) => addToCart(p));
  };


  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.row} activeOpacity={0.8}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.description}, Price</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.price}>${Number(item.price).toFixed(2)}
</Text>
        <Ionicons name="chevron-forward" size={20} color={COLORS.gray} />
      </View>
    </TouchableOpacity>
  );

  const renderSeparator = () => <View style={styles.sep} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favourite</Text>
      </View>

      <FlatList
        data={favorites}
        keyExtractor={(i) => i.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.addAllBtn} onPress={handleAddAll} activeOpacity={0.9}>
          <Text style={styles.addAllBtnText}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>

      <BottomTabBar 
  activeTab="cart" 
  onTabPress={(key) => navigation.navigate(key)} 
/>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
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
  listContent: { paddingVertical: 12 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: 18,
    backgroundColor: COLORS.white,
  },
  image: { width: 72, height: 72, borderRadius: 10, backgroundColor: COLORS.lightGray },
  info: { flex: 1, marginLeft: 14 },
  title: { fontSize: SIZES.large, fontWeight: '700', color: COLORS.text },
  subtitle: { fontSize: SIZES.font, color: COLORS.subText, marginTop: 6 },
  right: { alignItems: 'flex-end', width: 100, flexDirection: 'row', justifyContent: 'flex-end' },
  price: { fontSize: SIZES.medium, fontWeight: '700', color: COLORS.price, marginRight: 8 },
  sep: { height: 1, backgroundColor: COLORS.border },
  footer: { padding: SIZES.padding, backgroundColor: COLORS.white },
  addAllBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 18,
    borderRadius: SIZES.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addAllBtnText: { color: COLORS.white, fontSize: SIZES.medium, fontWeight: '700' },
});

export default FavouriteScreen;