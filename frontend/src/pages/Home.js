import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import {useSearchParams} from 'react-router-dom';

export default function Home() {
  const [products,setProducts]=useState([]);
  const [searchParams,setSearchParams]=useSearchParams()

  useEffect(()=>{
    fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
    .then(res =>res.json())
    .then(res =>setProducts(res.Products))
  },[searchParams])
    return <Fragment>
     <h2 id="products_heading">Latest Products</h2>
     

    <section id="products" class="container mt-5">
      <div class="row ">
        {products.map(product =><ProductCard  product={product}/>)}
      
         </div>
    </section>
     </Fragment>
}