import toast from "react-hot-toast";
import type { Product } from "../CustomHooks/useProducts";

const CartMethods = () => {
  const products: Product[] = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") as string)
    : [];

  return {
    addItem: (product: Product) => {
      const existingProduct = products.find((p) => p.id === product.id);
      if (!existingProduct) {
        products.push(product);
        localStorage.setItem("cartItems", JSON.stringify(products));
        console.log("Product added to cart");
        return;
      } else {
        toast.error("Product already added to cart")
      }
    },

    removeItem: (product: Product) => {
      const newProducts: Product[] = products.filter((p) => p.id !== product.id);
      localStorage.setItem("cartItems", JSON.stringify(newProducts));
      console.log("Product removed from cart");
    },

    getCart: () => {
      return JSON.parse(localStorage.getItem("cartItems") || "[]") as Product[];
    },

    clearCart: () => {
      localStorage.removeItem("cartItems");
      console.log("Cart cleared");
    },
  };
};

export default CartMethods;
