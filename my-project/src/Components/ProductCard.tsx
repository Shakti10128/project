import type { FC } from "react"
import type { Product } from "../CustomHooks/useProducts"
import CartMethods from "../Utils/CartMethods"
import toast from "react-hot-toast"


interface ProductCardProps{
    product: Product
    isCartItem:boolean
}



const ProductCard:FC<ProductCardProps> = ({product,isCartItem}) => {
    const {addItem,removeItem} = CartMethods();

    const addToCartItemHander = (product:Product) =>{
        if(!isCartItem) {
            addItem(product);
            toast.success("Item added");
        }
        else{
            removeItem(product);
            toast.success("Item removed");
        }
    }
  return (
    <div>
      <div className="h-[350px] w-[350px] m-5 p-5 border border-black gap-5 rounded-md flex flex-col cursor-pointer">

        <div className="h-[200px] w-full">
            <img src={Array.isArray(product.images) ? product.images[0] : product.images} alt=""
            className="h-full w-full object-cover" 
        />
        </div>

        <div>
            <h1 className="font-semibold">{"Title: " + product.title}</h1>
            <h1 className="font-semibold">{"Category: " + product.category}</h1>
        </div>

        <div className="flex justify-between items-start">
            <h1 className="font-semibold">{"Price: " + product.price}</h1>
            <button className=" m-2 p-2 border bg-blue-400 text-white border-white rounded-md mb-12 cursor-pointer" onClick={()=>addToCartItemHander(product)}>
                {!isCartItem ? "Add to Cart" : "Remvove Item"}
            </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
