import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ item }) => {
  const [added, setAdded] = useState(false);
  const [scale] = useState(new Animated.Value(1));
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    Animated.sequence([
      Animated.spring(scale, { toValue: 0.85, useNativeDriver: true, speed: 30 }),
      Animated.spring(scale, { toValue: 1, useNativeDriver: true, speed: 20 }),
    ]).start();
    setAdded(!added);
    addToCart(item);
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      </View>

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <Animated.View style={{ transform: [{ scale }] }}>
          <TouchableOpacity
            style={[styles.addBtn, added && styles.addBtnActive]}
            onPress={handleAdd}
            activeOpacity={0.8}
          >
            <Ionicons
              name={added ? 'checkmark' : 'add'}
              size={22}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.borderRadius,
    padding: 12,
    flex: 1,
    margin: 8,
    ...SHADOWS.light,
  },
  imageContainer: {
    height: 140,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: '80%',
    height: '80%',
  },
  info: {
    marginBottom: 8,
  },
  name: {
    fontSize: SIZES.font,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 4,
  },
  description: {
    fontSize: SIZES.small,
    color: COLORS.subText,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.price,
  },
  addBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addBtnActive: {
    backgroundColor: COLORS.primary,
  },
});

export default ProductCard;