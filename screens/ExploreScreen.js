import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import BottomTabBar from '../components/BottomTabBar';

const { width } = Dimensions.get('window');
const CARD_SIZE = (width - SIZES.padding * 2 - 12) / 2;

const categories = [
  {
    id: '1',
    name: 'Frash Fruits\n& Vegetable',
    image: require('../assets/ca51c56fc6c319bfab3990da934ed0eb9c5ae3e7.png'),
    bg: COLORS.lightGreen,
  },
  {
    id: '2',
    name: 'Cooking Oil\n& Ghee',
    image: require('../assets/ca51c56fc6c319bfab3990da934ed0eb9c5ae3e7.png'),
    bg: COLORS.cream,
  },
  {
    id: '3',
    name: 'Meat & Fish',
    image: require('../assets/22d3aac257974f1aad9e0ec045f5bfc22ef5a6ab.png'),
    bg: COLORS.pink,
  },
  {
    id: '4',
    name: 'Bakery & Snacks',
    image: require('../assets/e2faac00a6029bf4a611c1016eaf4b8f75db6d65.png'),
    bg: COLORS.lavender,
  },
  {
    id: '5',
    name: 'Dairy & Eggs',
    image: require('../assets/94ca9c0c443493293986632d57e9fb6f1e3b963f.png'),
    bg: COLORS.cream,
  },
  {
    id: '6',
    name: 'Beverages',
    image: require('../assets/cf75912987c6a2d11af9c6213699a2c5c6e3fb48.png'),
    bg: COLORS.lightBlue,
  },
];

function CategoryCard({ item, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.categoryCard, { backgroundColor: item.bg, width: CARD_SIZE }]}
      onPress={onPress}
    >
      <Image
        source={item.image}
        style={styles.categoryImage}
        resizeMode="contain"
      />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );
}

export default function ExploreScreen({ navigation }) {
  const [search, setSearch] = useState('');

  const handleCategoryPress = (category) => {
    // Chuyen den man hinh tuong ung dua tren ID hoac Name
    if (category.id === '6') {
      navigation.navigate('Beverages');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ... Header va Search Input giu nguyen ... */}
      
      <ScrollView contentContainerStyle={styles.gridContainer}>
        <View style={styles.grid}>
          {categories.map((item) => (
            <CategoryCard
              key={item.id}
              item={item}
              onPress={() => handleCategoryPress(item)}
            />
          ))}
        </View>
      </ScrollView>

      {/* Dung BottomTabBar moi cua ban */}
      <BottomTabBar 
  activeTab="cart" 
  onTabPress={(key) => navigation.navigate(key)} 
/>

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
    paddingHorizontal: SIZES.padding,
    paddingTop: 16,
    paddingBottom: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: SIZES.xl,
    fontWeight: '700',
    color: COLORS.black,
  },

  // Search
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.grey,
    marginHorizontal: SIZES.padding,
    marginBottom: 20,
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

  // Grid
  gridContainer: {
    paddingHorizontal: SIZES.padding,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  // Category Card
  categoryCard: {
    height: 160,
    borderRadius: SIZES.radiusLg,
    justifyContent: 'flex-end',
    padding: 14,
    overflow: 'hidden',
  },
  categoryEmoji: {
    fontSize: 44,
    position: 'absolute',
    top: 16,
    right: 12,
  },
  categoryName: {
    fontSize: SIZES.sm,
    fontWeight: '700',
    color: COLORS.black,
    lineHeight: 18,
  },
});