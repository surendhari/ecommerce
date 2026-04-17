import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';


export default function Products() {

const[products,setProducts]=useState([]);

useEffect(()=>{
  fetch("https://fakestoreapi.com/products")
  .then(res=>res.json())
  .then(data => setProducts(data));
  }, []);
  return (
    <div className='grid'>
{products.map((item)=>( 
  <ProductCard key={item.id} product={item} />))}
      
    </div>
  )
}
