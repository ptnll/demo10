import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import BottomTabBar from '../components/BottomTabBar';
import FilterModal from '../components/FilterModal';
import { COLORS, SIZES } from '../constants/theme';
import { products } from '../constants/data';

const CARD_SIZE = (SIZES.width - SIZES.padding * 2 - 12) / 2;

export default function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const filteredProducts = useMemo(() => {
    let result = products;

    // 1. Lọc theo search query (tên hoặc category name)
    if (searchQuery.trim()) {
      const text = searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.name.toLowerCase().includes(text) || 
        (p.category && p.category.toLowerCase().includes(text))
      );
    }

    // 2. Lọc theo Categories (Dùng ID cho chuẩn)
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.categoryId));
    }

    // 3. Lọc theo Brands
    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brandId) || selectedBrands.includes(p.brand));
    }

    return result;
  }, [searchQuery, selectedCategories, selectedBrands]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onClear={() => setSearchQuery('')}
        onFilterPress={() => setFilterModalVisible(true)}
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => <ProductCard item={item} />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No products found</Text>
          </View>
        }
      />

      <FilterModal
        visible={filterModalVisible}
        onClose={() => setFilterModalVisible(false)}
        selectedCategories={selectedCategories}
        selectedBrands={selectedBrands}
        onApply={(cats, brands) => {
          setSelectedCategories(cats);
          setSelectedBrands(brands);
          setFilterModalVisible(false);
        }}
      />

      <BottomTabBar activeTab="explore" onTabPress={(key) => navigation.navigate(key)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  contentContainer: { paddingHorizontal: 8, paddingBottom: 100 },
  columnWrapper: { justifyContent: 'space-between' },
  emptyContainer: { flex: 1, alignItems: 'center', marginTop: 100 },
  emptyText: { fontSize: SIZES.large, color: COLORS.greyDark },

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.white,
//   },

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