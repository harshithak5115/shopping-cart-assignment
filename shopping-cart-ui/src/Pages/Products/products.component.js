import React, { useEffect } from 'react';
import { useState } from 'react';
import "../Products/products.component.css";




const ProductListingPage=()=>{

const [products,setProducts]=useState([]);

const fetchProducts=()=>{
  fetch('http://localhost:3001/products')
  .then(res=>res.json())
  .then(res=>setProducts(res))
}
console.log('data',products)

useEffect(()=>{
    fetchProducts();
},[])

    return (

        <div className='card-container'>
            {products.map(({name,imageURL,id,price,stock,category,description})=>

                <div className="card" key={id}>
                <img src={imageURL} alt={name} />
                <h1>{name}</h1>
                <p className="price">Price: {price}</p>
                <p className="stock">Stock: {stock}</p>
                <p>{description}</p>
                <p>{category}</p>
                <p><button>Add to Cart</button></p>
                </div>

            
            )}

        </div>
    )
}

export default ProductListingPage;
