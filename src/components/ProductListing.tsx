import { FC, useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductsContext } from "../App";
import { Product } from "../types";

interface ProductListingProps {
  searchInput: string;
  selectedCategory: string;
}

const ProductListing: FC<ProductListingProps> = ({ searchInput, selectedCategory }) => {
  const products = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  useEffect(() => {
    if(!searchInput || !products.length) return;
    const filteredProductsT: Product[] = [];
    products.forEach((product) => {
      if(product.title.startsWith(searchInput)){
        filteredProductsT.push(product);
      }
    });
    setFilteredProducts(filteredProductsT);
  }, [searchInput, products])

  useEffect(() => {
    if(selectedCategory === "Categories" || !products.length) return;
    const filteredProductsT: Product[] = [];
    products.forEach((product) => {
      if(product.category === selectedCategory.toLocaleLowerCase()){
        filteredProductsT.push(product);
      }
    });
    setFilteredProducts(filteredProductsT);
  }, [selectedCategory, products])
  return (
    <div className="flex w-full px-[200px] bg-white overflow-y-scroll py-5">
      <div className="grid gap-x-3 gap-y-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white w-full overflow-y-scroll">
        {(!searchInput && selectedCategory === "Categories")  && products?.map((product, index) => (
          <ProductCard key={index} product={product}/>
        ))}
        {searchInput &&  filteredProducts?.map((product, index) => (
          <ProductCard key={index} product={product}/>
        ))}
        {selectedCategory !== "Categories" && filteredProducts?.map((product, index) => (
          <ProductCard key={index} product={product}/>))}
      </div>
    </div>
  )
}

export default ProductListing