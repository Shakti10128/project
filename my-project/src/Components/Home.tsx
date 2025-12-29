import { useNavigate } from "react-router-dom";
import type { Product } from "../CustomHooks/useProducts";
import useProducts from "../CustomHooks/useProducts";
import Products, { type ProductsProps } from "./Products";
import { useState } from "react";



const Home = () => {
  const { products, isLoading } = useProducts();

  const navigate = useNavigate();

  const [query, setQuery] = useState<string>("");

  const searchQueryHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    navigate(`/search/${query}`);
  };

  return (
    <div className="text-black min-h-screen">
      <div className="w-screen flex items-center justify-center mt-5">
        <form
          className="flex border rounded-full bg-white"
          onSubmit={searchQueryHandler} 
        >
          <input
            type="text"
            placeholder="Search item"
            value={query}
            className="p-2 rounded-l-full focus:outline-none"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 border-l border-l-black bg-blue-500 text-white rounded-r-full cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>

      <div className="mt-5">
        <Products products={products} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Home;
