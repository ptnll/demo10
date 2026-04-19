import React, { useState, useMemo } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { products } from '../constants/data';
import { COLORS, SIZES } from '../constants/theme';
import SearchBar from '../components/SearchBar';
import FilterModal from '../components/FilterModal';
import ProductCard from '../components/ProductCard';
import BottomTabBar from '../components/BottomTabBar';
import { Dimensions } from 'react-native';
import { View, ScrollView, SafeAreaView, StyleSheet, StatusBar } from 'react-native';


const { width } = Dimensions.get('window');
const CARD_SIZE = (width - 32 - 12) / 2;

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ categories: [], brands: [] });

  const filteredProducts = useMemo(() => {
    let result = products;

    if (query.trim()) {
      const text = query.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(text)
      );
    }

    if (filters.categories.length > 0) {
      result = result.filter(p =>
        filters.categories.includes(p.categoryId)
      );
    }

    return result;
  }, [query, filters]);

  return (
    <FlatList
      data={filteredProducts}
      renderItem={({ item }) => <ProductCard item={item} />}
    />
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },

  // Search Row
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: 12,
    gap: 10,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.grey,
    borderRadius: SIZES.radius,
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 8,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  searchBoxFocused: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
  },
  searchIcon: {
    fontSize: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: SIZES.base,
    color: COLORS.black,
    padding: 0,
  },
  clearBtn: {
    padding: 2,
  },
  clearIcon: {
    fontSize: 13,
    color: COLORS.greyDark,
  },
  filterBtn: {
    width: 42,
    height: 42,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    fontSize: 18,
    color: COLORS.greyDark,
  },

  // Recent
  recentSection: {
    paddingHorizontal: SIZES.padding,
    marginTop: 8,
  },
  sectionLabel: {
    fontSize: SIZES.sm,
    fontWeight: '600',
    color: COLORS.greyDark,
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: COLORS.primaryLight,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: SIZES.radiusFull,
  },
  chipText: {
    fontSize: SIZES.sm,
    color: COLORS.primary,
    fontWeight: '600',
  },

  // Results meta
  resultsMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    marginBottom: 12,
    marginTop: 4,
  },
  resultsLabel: {
    fontSize: SIZES.sm,
    color: COLORS.greyDark,
  },
  resultsQuery: {
    fontWeight: '700',
    color: COLORS.black,
  },
  resultsCount: {
    fontSize: SIZES.sm,
    color: COLORS.primary,
    fontWeight: '600',
  },

  // Grid
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    paddingHorizontal: SIZES.padding,
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

  // Empty State
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyIcon: {
    fontSize: 56,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: SIZES.lg,
    fontWeight: '700',
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: SIZES.sm,
    color: COLORS.greyDark,
    textAlign: 'center',
    lineHeight: 20,
  },
});