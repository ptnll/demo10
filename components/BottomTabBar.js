import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants/theme';

const tabs = [
  { key: 'shop', label: 'Shop', icon: 'grid-outline', iconActive: 'grid' },
  { key: 'explore', label: 'Explore', icon: 'search-outline', iconActive: 'search' },
  { key: 'cart', label: 'Cart', icon: 'cart-outline', iconActive: 'cart' },
  { key: 'favourite', label: 'Favourite', icon: 'heart-outline', iconActive: 'heart' },
  { key: 'account', label: 'Account', icon: 'person-outline', iconActive: 'person' },
];

const BottomTabBar = ({ activeTab = 'explore', onTabPress }) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.tab}
            onPress={() => onTabPress && onTabPress(tab.key)}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isActive ? tab.iconActive : tab.icon}
              size={22}
              color={isActive ? COLORS.primary : COLORS.tabInactive}
            />
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingBottom: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    justifyContent: 'space-around',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    fontSize: SIZES.small,
    color: COLORS.tabInactive,
    marginTop: 4,
  },
  labelActive: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});

export default BottomTabBar;