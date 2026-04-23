
import { useEffect, useState } from "react"
import { getProducts } from "../services/productService"

export default function Shop(){
  const [products,setProducts]=useState([])

  useEffect(()=>{ getProducts().then(setProducts) },[])

  return (
    <div>
      <h2>Shop</h2>
      {products.map(p=>(
        <div key={p.id}>
          {p.name} - ${p.price}
        </div>
      ))}
    </div>
  )
}
