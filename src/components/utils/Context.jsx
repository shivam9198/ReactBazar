import React, {  createContext,useEffect, useState } from 'react'
import axios from './axios'



export const ProductsContext = createContext();

const Context = (props)=>{
    const [products, setProducts] = useState(null);

    const getproducts= async() => {
        try {
            const {data} = await axios("/products");
            //  console.log(data);  // if you want to see the data in console
             setProducts(data);
            
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(()=>{
        getproducts();
    },[]);
    





  return (
   <ProductsContext.Provider value={[products , setProducts]}>
      {props.children}
    </ProductsContext.Provider> 
  );
}

export default Context