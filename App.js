import React from 'react';
import AppNavigator from "./navigation/AppNavigator";
import { CartProvider } from './context/CartContext'; // Đảm bảo đúng đường dẫn

export default function App() {
  return (
    <CartProvider>
      <AppNavigator />
    </CartProvider>
  );
}