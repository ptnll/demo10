import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

const PRODUCT_INFO = {
  name: 'Naturel Red Apple',
  subtitle: '1kg, Price',
  price: 4.99,
  image: require('../assets/3834f4b9c7c2628935f610ab8527d0b21e102632.png'),
  bg: '#FDE8E8',
  description:
    'Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May Be Good For Your Heart. As Part Of A Healthful And Varied Diet.',
  rating: 4,
  reviewCount: 120,
};

function StarRating({ rating, max = 5 }) {
  return (
    <View style={{ flexDirection: 'row', gap: 3 }}>
      {Array.from({ length: max }).map((_, i) => (
        <Text key={i} style={{ fontSize: 14, color: i < rating ? COLORS.star : COLORS.border }}>
          ★
        </Text>
      ))}
    </View>
  );
}

function AccordionRow({ label, right, onPress }) {
  return (
    <TouchableOpacity style={styles.accordionRow} onPress={onPress}>
      <Text style={styles.accordionLabel}>{label}</Text>
      <View style={styles.accordionRight}>
        {right}
        <Text style={styles.chevron}>›</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function ProductDetailScreen({ navigation, route }) {
  const product = route?.params?.product;
  const [quantity, setQuantity] = useState(1);
  const [isFav, setIsFav] = useState(false);
  const [showDetail, setShowDetail] = useState(true);

  const basePrice = product?.price || PRODUCT_INFO.price;
  const price = basePrice * quantity;
  const { addToCart } = useContext(CartContext);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.shareIcon}>⬆</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View style={styles.imageWrapper}>
          <View style={styles.imageBg}>
            <Image
              source={product?.image ?? PRODUCT_INFO.image}
              style={styles.productImage}
              resizeMode="contain"
            />
          </View>

          {/* Slider Dots */}
          <View style={styles.dotsRow}>
            {[0, 1, 2].map((i) => (
              <View key={i} style={[styles.dot, i === 0 && styles.dotActive]} />
            ))}
          </View>
        </View>

        {/* Product Info */}
        <View style={styles.content}>
          {/* Title + Favourite */}
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.productName}>
                {product?.name ?? PRODUCT_INFO.name}
              </Text>
              <Text style={styles.productSubtitle}>{PRODUCT_INFO.subtitle}</Text>
            </View>
            <TouchableOpacity onPress={() => setIsFav(!isFav)}>
              <Text style={[styles.favIcon, isFav && styles.favActive]}>
                {isFav ? '❤️' : '🤍'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Quantity + Price */}
          <View style={styles.qtyRow}>
            <View style={styles.qtyControls}>
              <TouchableOpacity
                style={styles.qtyBtn}
                onPress={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <Text style={styles.qtyBtnText}>−</Text>
              </TouchableOpacity>
              <Text style={styles.qtyValue}>{quantity}</Text>
              <TouchableOpacity
                style={styles.qtyBtn}
                onPress={() => setQuantity((q) => q + 1)}
              >
                <Text style={styles.qtyBtnText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.priceText}>${price.toFixed(2)}</Text>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Product Detail Accordion */}
          <TouchableOpacity
            style={styles.accordionHeader}
            onPress={() => setShowDetail((v) => !v)}
          >
            <Text style={styles.accordionTitle}>Product Detail</Text>
            <Text style={styles.chevron}>{showDetail ? '∨' : '›'}</Text>
          </TouchableOpacity>

          {showDetail && (
            <Text style={styles.description}>{PRODUCT_INFO.description}</Text>
          )}

          {/* Divider */}
          <View style={styles.divider} />

          {/* Nutritions */}
          <AccordionRow
            label="Nutritions"
            right={
              <View style={styles.nutritionBadge}>
                <Text style={styles.nutritionBadgeText}>100gr</Text>
              </View>
            }
          />

          {/* Divider */}
          <View style={styles.divider} />

          {/* Review */}
          <AccordionRow
            label="Review"
            right={<StarRating rating={PRODUCT_INFO.rating} />}
          />
        </View>
      </ScrollView>

      {/* Add To Basket */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addToBasketBtn} onPress={() =>
    addToCart({
      ...(product ?? PRODUCT_INFO),
      quantity
    })
  }
>

          <Text style={styles.addToBasketText}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: 12,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: COLORS.black,
    lineHeight: 28,
  },
  shareIcon: {
    fontSize: 20,
    color: COLORS.black,
  },

  // Image
  imageWrapper: {
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingBottom: 16,
  },
  imageBg: {
    width: '100%',
    height: 260,
    backgroundColor: COLORS.grey,
    borderRadius: SIZES.radiusLg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 6,
    marginTop: 14,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.border,
  },
  dotActive: {
    backgroundColor: COLORS.primary,
    width: 20,
  },

  // Content
  content: {
    paddingHorizontal: SIZES.padding,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  productName: {
    fontSize: SIZES.xl,
    fontWeight: '700',
    color: COLORS.black,
  },
  productSubtitle: {
    fontSize: SIZES.sm,
    color: COLORS.greyDark,
    marginTop: 3,
  },
  favIcon: {
    fontSize: 22,
  },
  favActive: {
    transform: [{ scale: 1.1 }],
  },

  // Qty
  qtyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  qtyControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  qtyBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyBtnText: {
    fontSize: 18,
    color: COLORS.black,
    lineHeight: 20,
  },
  qtyValue: {
    fontSize: SIZES.lg,
    fontWeight: '700',
    color: COLORS.black,
    minWidth: 20,
    textAlign: 'center',
  },
  priceText: {
    fontSize: SIZES.xxl,
    fontWeight: '700',
    color: COLORS.black,
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 12,
  },

  // Accordion
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  accordionTitle: {
    fontSize: SIZES.md,
    fontWeight: '600',
    color: COLORS.black,
  },
  accordionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  accordionLabel: {
    fontSize: SIZES.md,
    fontWeight: '600',
    color: COLORS.black,
  },
  accordionRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  chevron: {
    fontSize: 20,
    color: COLORS.greyDark,
  },
  description: {
    fontSize: SIZES.sm,
    color: COLORS.greyText,
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 4,
  },
  nutritionBadge: {
    backgroundColor: COLORS.grey,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: SIZES.radius,
  },
  nutritionBadgeText: {
    fontSize: SIZES.xs,
    color: COLORS.greyDark,
    fontWeight: '500',
  },

  // Footer
  footer: {
    padding: SIZES.padding,
    paddingBottom: 28,
    backgroundColor: COLORS.white,
  },
  addToBasketBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radiusFull,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  addToBasketText: {
    color: COLORS.white,
    fontSize: SIZES.md,
    fontWeight: '700',
  },
});