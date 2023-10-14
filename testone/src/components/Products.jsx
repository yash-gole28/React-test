import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {
    const [products , setProducts] = useState([])
    // console.log(products)

    useEffect(()=>{
       async function  getProducts(){
            try {
                const getData = await axios.get('https://fakestoreapi.com/products')
                console.log(getData.data)
                setProducts(getData.data)
            }
            catch(error)
            {alert("something went wrong")}
        }
        getProducts()
    },[])
  return (
    <div>
      {products.map((product)=>(<div>{product.id}{product.title}<img src={product.image}/></div>))}
    </div>
  )
}

export default Products
