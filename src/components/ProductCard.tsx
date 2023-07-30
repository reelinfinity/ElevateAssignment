import { FC } from "react"
import { Product } from "../types"

interface ProductCardProps {
  product: Product
}

const ProductCard: FC<ProductCardProps> = ({product}) => {
  return (
    <div className="flex flex-col items-center justify-around h-[400px] w-[300px] bg-white rounded-sm py-5" style={{
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
    }}>
      <div>
        <h4>{product.title.substring(0, 10)}</h4>
        <h4><span className="text-orange-400">Price $</span>{Math.floor(product.price)}</h4>
      </div>
      <img src={product.image} className="h-56 aspect-square"/>
    </div>
  )
}

export default ProductCard