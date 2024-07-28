

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from './utils/axios';
import Loading from '../Loading';




function Detail() {
  const {id} =useParams();


  const [product , setproduct]=useState(null)
  const getsingleproducts = async()=>{
    try {
      const {data }= await axios.get(`/products/${id}`);
      console.log(data);  // if you want to see the data in console
       setproduct(data);


      
    } catch (error) {
      console.log(error);
      
    }
   }
   useEffect(()=>{
    getsingleproducts();
  },[]);

  
  return product ? (
    <div  className='w-[70%] flex h-full justify-between items-center m-auto p-[10%]'>
      <img className = 'object-contain h-[80%] w-[40%]' 
      src={`${product.image}`}
      alt=''
      ></img>
      <div className='content w-[50%]'>
        <h1 className='text-4xl'>{product.title}</h1>
        <h3 className='text-zinc-400 my-3'>{product.category} </h3>
        <h2 className='text-red-400 my-3'> {product.price} </h2>
        <p className=' mb-3'>{product.description}</p>
        <Link className ='bg-blue-300 text-white px-5 py-2 mr-5  rounded-md'> 
        Edit </Link>
        <Link className ='bg-red-300 text-white px-5 py-2 rounded-md '> Delete</Link>
      </div>
    </div>
  ) : <Loading/>

}

export default Detail