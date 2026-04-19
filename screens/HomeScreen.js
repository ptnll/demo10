
import React, { useState, useMemo } from 'react'; // Thêm useMemo vào đây
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import BottomTabBar from '../components/BottomTabBar';
import bannerVegetablesImage from '../assets/f1620a56c996bb044ee5c397586f834cd3bceafe.png';

const exclusiveOffers = [
  {
    id: '1',
    name: 'Organic Bananas',
    subtitle: '7pcs, Priceg',
    price: '$4.99',
    image: require('../assets/3834f4b9c7c2628935f610ab8527d0b21e102632.png'),
    bg: COLORS.white,
  },
  {
    id: '2',
    name: 'Red Apple',
    subtitle: '1kg, Priceg',
    price: '$4.99',
    image: require('../assets/3834f4b9c7c2628935f610ab8527d0b21e102632.png'),
    bg: COLORS.white,
  },
];

const bestSelling = [
  {
    id: '1',
    name: 'Bell Pepper Red',
    subtitle: '1kg, Priceg',
    price: '$4.99',
    image: require('../assets/0c425b7d8f0836dfb36395e62d0c84d6b0af4cf0.png'),
    bg: COLORS.white,
  },
  {
    id: '2',
    name: 'Ginger',
    subtitle: '250g, Priceg',
    price: '$2.99',
    image: require('../assets/accb1df0583c96a67f2ad989598f353de49e5a14.png'),
    bg: COLORS.white,
  },
];

function ProductCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={[styles.cardImageBg, { backgroundColor: item.bg }]}>
        {item.image ? (
          <Image
            source={item.image}
            style={styles.cardImage}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.cardEmoji}>{item.emoji}</Text>
        )}
      </View>
      <Text style={styles.cardName}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.cardPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const filteredOffers = useMemo(() => {
    return exclusiveOffers.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const filteredBestSelling = useMemo(() => {
    return bestSelling.filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>🥕</Text>
        <View style={styles.locationRow}>
          <Text style={styles.locationPin}>📍</Text>
          <Text style={styles.locationText}>Dhaka, Banassre</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Store"
            placeholderTextColor={COLORS.greyDark}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>Fresh Vegetables</Text>
            <Text style={styles.bannerSubtitle}>Get Up To 40% OFF</Text>
          </View>
          <Image
            source={bannerVegetablesImage}
            style={styles.bannerImage}
            resizeMode="contain"
          />
        </View>

        {/* Banner Dots */}
        <View style={styles.dotsRow}>
          {[0, 1, 2].map((i) => (
            <View key={i} style={[styles.dot, i === 0 && styles.dotActive]} />
          ))}
        </View>

        {/* Exclusive Offers */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Exclusive Offers */}
<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.horizontalList}
>
  {filteredOffers.map((item) => (
    <ProductCard
      key={item.id}
      item={item}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    />
  ))}
</ScrollView>

{/* Best Selling */}
<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.horizontalList}
>
  {filteredBestSelling.map((item) => (
    <ProductCard
      key={item.id}
      item={item}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    />
  ))}
</ScrollView>

        <View style={{ height: 20 }} />
      </ScrollView>

      <BottomTabBar active="Shop" navigation={navigation} />
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
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 8,
    paddingHorizontal: SIZES.padding,
  },
  logo: {
    fontSize: 32,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  locationPin: {
    fontSize: 14,
  },
  locationText: {
    fontSize: SIZES.base,
    fontWeight: '600',
    color: COLORS.black,
  },

  // Search
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.grey,
    marginHorizontal: SIZES.padding,
    marginVertical: 12,
    borderRadius: SIZES.radius,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 10,
  },
  searchIcon: {
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: SIZES.base,
    color: COLORS.black,
    padding: 0,
  },

  // Banner
  banner: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#D4EED0',
    marginHorizontal: SIZES.padding,
    borderRadius: SIZES.radiusLg,
    paddingVertical: 20,
    paddingHorizontal: 20,
    overflow: 'hidden',
  },
  bannerContent: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: SIZES.xl,
    fontWeight: '800',
    color: COLORS.black,
    lineHeight: 28,
  },
  bannerSubtitle: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.primary,
    marginTop: 4,
  },
  bannerImage: {
    width: 120,
    height: 120,
  },

  // Dots
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: 10,
    marginBottom: 4,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.border,
  },
  dotActive: {
    backgroundColor: COLORS.primary,
    width: 18,
  },

  // Section
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    marginTop: 20,
    marginBottom: 12,
    width: '100%',
  },
  sectionTitle: {
    fontSize: SIZES.lg,
    fontWeight: '700',
    color: COLORS.black,
  },
  seeAll: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.primary,
  },

  horizontalList: {
    paddingHorizontal: SIZES.padding,
    gap: 12,
  },

  // Product Card
  card: {
    width: 150,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radiusLg,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  cardImageBg: {
    width: '100%',
    height: 100,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: COLORS.white,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: SIZES.radius,
  },
  cardEmoji: {
    fontSize: 56,
  },
  cardName: {
    fontSize: SIZES.base,
    fontWeight: '700',
    color: COLORS.black,
  },
  cardSubtitle: {
    fontSize: SIZES.xs,
    color: COLORS.greyDark,
    marginTop: 2,
    marginBottom: 8,
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
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 22,
  },
});