import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants/theme';


const FilterModal = ({ visible, onClose, onApply, selectedCategories, selectedBrands }) => {
  const [categories, setCategories] = useState(selectedCategories);
  const [brands, setBrands] = useState(selectedBrands);

  useEffect(() => {
  setCategories(selectedCategories);
}, [selectedCategories]);

useEffect(() => {
  setBrands(selectedBrands);
}, [selectedBrands]);

  const categoryList = ['eggs', 'noodles', 'pasta', 'condiments'];
  const brandList = ['individual', 'cocola', 'ifad', 'kazi'];

  const toggleCategory = (cat) => {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleBrand = (brand) => {
    setBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleApply = () => {
    onApply(categories, brands);
  };

  const handleReset = () => {
    setCategories([]);
    setBrands([]);
  };

  const getCategoryLabel = (cat) => {
    const labels = {
      eggs: 'Eggs',
      noodles: 'Noodles & Pasta',
      pasta: 'Chips & Crisps',
      condiments: 'Fast Food',
    };
    return labels[cat] || cat;
  };

  const getBrandLabel = (brand) => {
    const labels = {
      individual: 'Individual Collection',
      cocola: 'Cocola',
      ifad: 'Ifad',
      kazi: 'Kazi Farmas',
    };
    return labels[brand] || brand;
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={28} color={COLORS.text} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Filters</Text>
          <View style={{ width: 28 }} />
        </View>

        {/* Content */}
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Categories */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Categories</Text>
            {categoryList.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={styles.checkboxRow}
                onPress={() => toggleCategory(cat)}
              >
                <View
                  style={[
                    styles.checkbox,
                    categories.includes(cat) && styles.checkboxChecked,
                  ]}
                >
                  {categories.includes(cat) && (
                    <Ionicons
                      name="checkmark"
                      size={16}
                      color={COLORS.white}
                    />
                  )}
                </View>
                <Text style={styles.checkboxLabel}>
                  {getCategoryLabel(cat)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Brands */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Brand</Text>
            {brandList.map((brand) => (
              <TouchableOpacity
                key={brand}
                style={styles.checkboxRow}
                onPress={() => toggleBrand(brand)}
              >
                <View
                  style={[
                    styles.checkbox,
                    brands.includes(brand) && styles.checkboxChecked,
                  ]}
                >
                  {brands.includes(brand) && (
                    <Ionicons
                      name="checkmark"
                      size={16}
                      color={COLORS.white}
                    />
                  )}
                </View>
                <Text style={styles.checkboxLabel}>
                  {getBrandLabel(brand)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.resetBtn}
            onPress={handleReset}
          >
            <Text style={styles.resetBtnText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.applyBtn}
            onPress={handleApply}
          >
            <Text style={styles.applyBtnText}>Apply Filter</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontWeight: '600',
    color: COLORS.text,
  },
  content: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: 16,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: SIZES.medium,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 12,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  checkboxLabel: {
    fontSize: SIZES.font,
    color: COLORS.text,
  },
  footer: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: SIZES.padding,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  resetBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: SIZES.borderRadius,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetBtnText: {
    fontSize: SIZES.font,
    fontWeight: '600',
    color: COLORS.text,
  },
  applyBtn: {
    flex: 1.5,
    paddingVertical: 14,
    borderRadius: SIZES.borderRadius,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyBtnText: {
    fontSize: SIZES.font,
    fontWeight: '600',
    color: COLORS.white,
  },
});

export default FilterModal;