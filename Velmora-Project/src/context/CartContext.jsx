// import { createContext, useContext, useState } from "react";

// const CartContext = createContext(null);

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);

//   function addToCart(item) {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i.header === item.header);
//       if (existing) {
//         return prev.map((i) =>
//           i.header === item.header ? { ...i, qty: i.qty + 1 } : i
//         );
//       }
//       return [...prev, { ...item, qty: 1 }];
//     });
//   }

//   function increment(header) {
//     setCartItems((prev) =>
//       prev.map((i) => (i.header === header ? { ...i, qty: i.qty + 1 } : i))
//     );
//   }

//   function decrement(header) {
//     setCartItems((prev) => {
//       const item = prev.find((i) => i.header === header);
//       if (!item) return prev;
//       if (item.qty === 1) return prev.filter((i) => i.header !== header);
//       return prev.map((i) =>
//         i.header === header ? { ...i, qty: i.qty - 1 } : i
//       );
//     });
//   }

//   function remove(header) {
//     setCartItems((prev) => prev.filter((i) => i.header !== header));
//   }

//   function clearCart() {
//     setCartItems([]);
//   }

//   const totalCount = cartItems.reduce((sum, i) => sum + i.qty, 0);
//   const subtotal   = cartItems.reduce((sum, i) => sum + i.qty * i.price, 0);

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, increment, decrement, remove, clearCart, totalCount, subtotal }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// // }

// export function useCart() {
//   return useContext(CartContext);
// }