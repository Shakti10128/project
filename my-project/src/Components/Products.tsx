import type { FC } from "react";
import type { Product } from "../CustomHooks/useProducts"
import ProductCard from "./ProductCard";
import ProductCardShimmer from "./Shimmers/ProductCardShimmer";
import { useNavigate } from "react-router-dom";


export interface ProductsProps{
    products:Product[]
    isLoading:boolean
}

const Products:FC<ProductsProps> = ({products,isLoading}) => {
  const navigate = useNavigate();
    if(isLoading) {
        return <ProductCardShimmer/>;
    }
    // console.log("from products: ", productsList);
  return (
    <div>
      <div className="m-10  flex flex-wrap justify-center">
        {
            products.length > 0 ? products.map((product) =>{
                return <ProductCard product={product} key={product.id} isCartItem={false}/>
            })

            :
            <div className="w-screen flex flex-col gap-5 items-center justify-center">
              <h1 className="font-semibold text-2xl">product not found for your search</h1>
              <button className="border bg-blue-500 text-white p-2 rounded-md cursor-pointer"
              onClick={()=> navigate("/")}>
                Go to Home
              </button>
            </div>
        }
      </div>
    </div>
  )
}

export default Products
