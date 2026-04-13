import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

const { width } = Dimensions.get('window');
const CARD_SIZE = (width - SIZES.padding * 2 - 12) / 2;

const FALLBACK_IMAGE = 'https://placehold.co/200x200/f5f5f5/9e9e9e?text=No+Image';

const products = [
  {
    id: '1',
    name: 'Diet Coke',
    subtitle: '355ml, Price',
    price: '$1.99',
    image: require('../assets/5e28052a3a50959340e109824c42dd0c99b5f377.png'),
  },
  {
    id: '2',
    name: 'Sprite Can',
    subtitle: '325ml, Price',
    price: '$1.50',
    image: require('../assets/d2f3f8693088e089e4cfee3167faeb848cf9ea96.png'),
  },
  {
    id: '3',
    name: 'Apple & Grape Juice',
    subtitle: '2L, Price',
    price: '$15.99',
    image: require('../assets/e3f6fb1693ed22eec33505ff5f6f4f54c442e1c5.png'),
  },
  {
    id: '4',
    name: 'Orenge Juice',
    subtitle: '2L, Price',
    price: '$15.99',
    image: require('../assets/935fcc322f02c5d46a9e7043bc8445d6e37cb19d.png'),
  },
  {
    id: '5',
    name: 'Coca Cola Can',
    subtitle: '325ml, Price',
    price: '$4.99',
    image: require('../assets/a6501a3ca88c17d9ec33d6b348ad9b9b3078ccfb.png'),
  },
  {
    id: '6',
    name: 'Pepsi Can',
    subtitle: '330ml, Price',
    price: '$4.99',
    image: require('../assets/5e28052a3a50959340e109824c42dd0c99b5f377.png'),
  },
];

function ProductCard({ item, onPress }) {
  const [imgError, setImgError] = useState(false);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: imgError ? FALLBACK_IMAGE : item.image }}
          style={styles.productImage}
          resizeMode="contain"
          onError={() => setImgError(true)}
        />
      </View>
      <Text style={styles.cardName} numberOfLines={2}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.cardPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
          <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default function BeveragesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Beverages</Text>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterIcon}>⚙ </Text>
        </TouchableOpacity>
      </View>

      {/* Grid */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.grid}
      >
        {products.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
          />
        ))}
        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 28,
    color: COLORS.black,
    lineHeight: 32,
  },
  headerTitle: {
    fontSize: SIZES.lg,
    fontWeight: '700',
    color: COLORS.black,
  },
  filterBtn: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    fontSize: 18,
    color: COLORS.greyDark,
  },

  // Grid
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    padding: SIZES.padding,
  },

  // Product Card
  card: {
    width: CARD_SIZE,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radiusLg,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  imageWrapper: {
    width: '100%',
    height: 120,
    backgroundColor: COLORS.grey,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    overflow: 'hidden',
  },
  productImage: {
    width: '85%',
    height: '85%',
  },
  cardName: {
    fontSize: SIZES.sm,
    fontWeight: '700',
    color: COLORS.black,
    lineHeight: 18,
    minHeight: 36,
  },
  cardSubtitle: {
    fontSize: SIZES.xs,
    color: COLORS.greyDark,
    marginTop: 2,
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardPrice: {
    fontSize: SIZES.md,
    fontWeight: '700',
    color: COLORS.black,
  },
  addBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnText: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '300',
    lineHeight: 24,
    textAlign: 'center',
  },
});