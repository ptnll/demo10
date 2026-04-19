export const products = [
  {
    id: '1',
    categoryId: '6', // Beverages
    name: 'Diet Coke',
    subtitle: '355ml, Price',
    price: '1.99',
    tags: ['coke', 'beverage', 'soda', 'diet'],
    image: require('../assets/5e28052a3a50959340e109824c42dd0c99b5f377.png'),
  },
  {
    id: '2',
    categoryId: '6',
    name: 'Sprite Can',
    subtitle: '325ml, Price',
    price: '1.50',
    tags: ['sprite', 'beverage', 'soda'],
    image: require('../assets/d2f3f8693088e089e4cfee3167faeb848cf9ea96.png'),
  },
  {
    id: '3',
    categoryId: '1', // Fruits & Veggies
    name: 'Organic Bananas',
    subtitle: '7pcs, Price',
    price: '4.99',
    tags: ['banana', 'fruit', 'organic'],
    image: require('../assets/3834f4b9c7c2628935f610ab8527d0b21e102632.png'),
  },
  // Lan co the them tiep cac san pham khac vao day...
];

export const categories = [
  { id: '1', name: 'Fresh Fruits & Vegetable', bg: '#EEF8F2' },
  { id: '6', name: 'Beverages', bg: '#EDF7FC' },
  // ...
];