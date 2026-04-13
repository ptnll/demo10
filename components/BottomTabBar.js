import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

const tabs = [
  { name: 'Shop', icon: '🏪' },
  { name: 'Explore', icon: '🔍' },
  { name: 'Cart', icon: '🛒' },
  { name: 'Favourite', icon: '🤍' },
  { name: 'Account', icon: '👤' },
];

export default function BottomTabBar({ active = 'Shop', navigation }) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = tab.name === active;
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => {
              if (tab.name === 'Shop') navigation?.navigate('Home');
              else if (tab.name === 'Explore') navigation?.navigate('Explore');
            }}
          >
            <Text style={[styles.icon, isActive && styles.iconActive]}>
              {tab.icon}
            </Text>
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {tab.name}
            </Text>
            {isActive && <View style={styles.indicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
    position: 'relative',
  },
  icon: {
    fontSize: 20,
    opacity: 0.4,
  },
  iconActive: {
    opacity: 1,
  },
  label: {
    fontSize: SIZES.xs,
    color: COLORS.greyDark,
  },
  labelActive: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  indicator: {
    position: 'absolute',
    bottom: -10,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.primary,
  },
});