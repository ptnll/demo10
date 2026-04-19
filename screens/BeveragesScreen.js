import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProductCard from '../components/ProductCard'; // Dùng cái này
import { products } from '../constants/data';
import { COLORS, SIZES } from '../constants/theme';

export default function BeveragesScreen({ navigation }) {
  const beverageList = products.filter(p => p.categoryId === '6');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={28} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Beverages</Text>
        <TouchableOpacity style={styles.filterBtn}>
          <Ionicons name="options-outline" size={22} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.grid}>
        {beverageList.map((item) => (
          <View key={item.id} style={{ width: '50%' }}> 
            <ProductCard item={item} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTitle: { fontSize: SIZES.lg, fontWeight: '700', color: COLORS.black },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8, // Để margin 8 của ProductCard cộng lại là vừa đẹp
  },
});