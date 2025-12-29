import { useEffect, useState } from "react";
import type { Product } from "../CustomHooks/useProducts";
import ProductCard from "./ProductCard";
import CartMethods from "../Utils/CartMethods";


const Cart = () => {
  const [cartProducts,setCartProducts] = useState<Product[] | []>([]);
  
  useEffect(()=>{
      const {getCart} = CartMethods();
      setCartProducts(getCart);
  },[])
  return (
    <div className="text-black">
      <div>
        {
          cartProducts.length === 0 
          ? 
          <div className="w-full flex items-center justify-center mt-10">
            <h1 className="font-semibold text-4xl">Cart is empty</h1>
          </div>
          : 
          <div className="flex flex-wrap justify-center items-center">
            {
              cartProducts && cartProducts.map((product) =>{
                return <ProductCard key={product.id} product={product} isCartItem={true}/>
              })
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Cart
