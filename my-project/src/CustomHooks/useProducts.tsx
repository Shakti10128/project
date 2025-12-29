import axios from "axios";
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string; 
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}


const apiUrl = import.meta.env.VITE_REACT_PRODUCT_API_URL;

const useProducts = () => {
  const { query } = useParams<{ query: string }>();

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const url = query
          ? `${apiUrl}/products/search?q=${query}`
          : `${apiUrl}/products`;

        const { data } = await axios.get(url);
        console.log(query ? "query data" : "home page data", data);
        setProducts(data.products);
      } catch (error) {
        console.error("Error while getting the products", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  return {products,isLoading};
}

export default useProducts
