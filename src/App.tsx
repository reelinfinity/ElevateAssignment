import { createContext, useEffect, useState } from "react"
import Carousel from "./components/Carousel"
import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar"
import { fetchProducts } from "./service/fetchProducts"
import { Product } from "./types"
import ProductListing from "./components/ProductListing"

export const ProductsContext = createContext<Product[]>([]);
export const CategoryContext = createContext<string[]>([]);

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  const getProducts = async () => {
    const products = await fetchProducts();
    setProducts(products as Product[]);
    const categoriesT: string[] = [];
    (products as Product[]).forEach((item) => categoriesT.push(item.category.toLocaleUpperCase()));
    setCategories([...new Set(categoriesT)]);
  }
  useEffect(() => {
    getProducts();
  }, [])
  return (
    <ProductsContext.Provider value={products}>
      <CategoryContext.Provider value={categories}>
        <div className="flex flex-col h-auto w-screen items-center relative bg-[#ddb134] overflow-y-scroll">
          <Navbar />
          <h1 className="text-white text-5xl my-4">Eflyer</h1>
          <Searchbar setSearchInput={setSearchInput} searchInput={searchInput} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
          <Carousel />
          <ProductListing searchInput={searchInput} selectedCategory={selectedCategory}/>
        </div>
      </CategoryContext.Provider>
    </ProductsContext.Provider>
  )
}

export default App
