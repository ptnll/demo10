import React, { useState, useMemo, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Keyboard,
} from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import BottomTabBar from '../components/BottomTabBar';

const { width } = Dimensions.get('window');
const CARD_SIZE = (width - SIZES.padding * 2 - 12) / 2;

const FALLBACK_IMAGE = 'https://placehold.co/200x200/f5f5f5/9e9e9e?text=No+Image';

const allProducts = [
  {
    id: '1',
    name: 'Egg Chicken Red',
    subtitle: '4pcs, Price',
    price: '$1.99',
    tags: ['egg', 'chicken', 'red'],
    image: 'https://images.unsplash.com/photo-1569288063643-5d29ad58df85?w=300&q=80',
  },
  {
    id: '2',
    name: 'Egg Chicken White',
    subtitle: '180g, Price',
    price: '$1.50',
    tags: ['egg', 'chicken', 'white'],
    image: 'https://images.unsplash.com/photo-1587486937303-6d4e6e0b5b43?w=300&q=80',
  },
  {
    id: '3',
    name: 'Egg Pasta',
    subtitle: '30gm, Price',
    price: '$15.99',
    tags: ['egg', 'pasta', 'noodle'],
    image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=300&q=80',
  },
  {
    id: '4',
    name: 'Egg Noodles',
    subtitle: '2L, Price',
    price: '$15.99',
    tags: ['egg', 'noodle'],
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&q=80',
  },
  {
    id: '5',
    name: 'Mayonnais Eggless',
    subtitle: '500g, Price',
    price: '$5.99',
    tags: ['egg', 'mayo', 'sauce'],
    image: 'https://images.unsplash.com/photo-1633635880027-9cc1e1564c81?w=300&q=80',
  },
  {
    id: '6',
    name: 'Egg Noodles Instant',
    subtitle: '250g, Price',
    price: '$3.49',
    tags: ['egg', 'noodle', 'instant'],
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&q=80',
  },
  {
    id: '7',
    name: 'Diet Coke',
    subtitle: '355ml, Price',
    price: '$1.99',
    tags: ['coke', 'beverage', 'soda'],
    image: 'https://images.unsplash.com/photo-1622766813841-664485e3b86a?w=300&q=80',
  },
  {
    id: '8',
    name: 'Orange Juice',
    subtitle: '1L, Price',
    price: '$3.99',
    tags: ['juice', 'orange', 'beverage'],
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&q=80',
  },
  {
    id: '9',
    name: 'Organic Bananas',
    subtitle: '7pcs, Price',
    price: '$4.99',
    tags: ['banana', 'fruit', 'organic'],
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&q=80',
  },
  {
    id: '10',
    name: 'Red Apple',
    subtitle: '1kg, Price',
    price: '$4.99',
    tags: ['apple', 'fruit', 'red'],
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&q=80',
  },
];

const recentSearches = ['Egg', 'Milk', 'Bread', 'Chicken'];

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

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('Egg');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    return allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q))
    );
  }, [query]);

  const showRecent = query.trim() === '' && isFocused;
  const showResults = query.trim().length > 0;
  const noResults = showResults && filtered.length === 0;

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      {/* Search Bar */}
      <View style={styles.searchRow}>
        <View style={[styles.searchBox, isFocused && styles.searchBoxFocused]}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            ref={inputRef}
            style={styles.searchInput}
            placeholder="Search Store"
            placeholderTextColor={COLORS.greyDark}
            value={query}
            onChangeText={setQuery}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            autoCorrect={false}
            returnKeyType="search"
            onSubmitEditing={Keyboard.dismiss}
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={handleClear} style={styles.clearBtn}>
              <Text style={styles.clearIcon}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterIcon}>⚙</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Recent Searches */}
        {showRecent && (
          <View style={styles.recentSection}>
            <Text style={styles.sectionLabel}>Recent Searches</Text>
            <View style={styles.chips}>
              {recentSearches.map((term) => (
                <TouchableOpacity
                  key={term}
                  style={styles.chip}
                  onPress={() => setQuery(term)}
                >
                  <Text style={styles.chipText}>{term}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Results count */}
        {showResults && !noResults && (
          <View style={styles.resultsMeta}>
            <Text style={styles.resultsLabel}>
              Results for{' '}
              <Text style={styles.resultsQuery}>"{query}"</Text>
            </Text>
            <Text style={styles.resultsCount}>{filtered.length} items</Text>
          </View>
        )}

        {/* No Results */}
        {noResults && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🔍</Text>
            <Text style={styles.emptyTitle}>No results found</Text>
            <Text style={styles.emptySubtitle}>
              Try a different keyword
            </Text>
          </View>
        )}

        {/* Products Grid */}
        {showResults && !noResults && (
          <View style={styles.grid}>
            {filtered.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onPress={() =>
                  navigation.navigate('ProductDetail', { product: item })
                }
              />
            ))}
          </View>
        )}

        {/* Empty State (before typing) */}
        {!isFocused && !showResults && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🛒</Text>
            <Text style={styles.emptyTitle}>Search for products</Text>
            <Text style={styles.emptySubtitle}>
              Type to find fruits, beverages, dairy and more
            </Text>
          </View>
        )}

        <View style={{ height: 20 }} />
      </ScrollView>

      <BottomTabBar active="Explore" navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

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