import React, { useState } from 'react'

function Create() {
const [Image, setImage] = useState("");
const [title, settitle] = useState("");
const [category,setcategory] = useState("");
const [price, setprice] = useState("");
const [Description , setDescription] = useState("");

const Addproducthandler = (e)=>{
    e.preventDefault();
   const product ={
    Image,
    title,
    category,
    price,
    Description

   };
    console.log(product);
    
 
}



  return (
  

   <form 
   onSubmit={Addproducthandler}
   className='flex flex-col items-center w-screen h-screen p-[5%]'>
    <h1 className='text-3xl mb-[3%] w-1/2  '>Add new product</h1>
    <input type='url' placeholder='image link' className='mb-3 text-2xl p-3 w-1/2 bg-zinc-100 rounded-full'
     onChange={(e)=>setImage(e.target.value)}
     value={Image}
     />
   
    <input type='text' placeholder='title' className='mb-3 text-2xl p-3 w-1/2 bg-zinc-100 rounded-full'
    onChange={(e)=>settitle(e.target.value)}
    value={title}
    />
    
    <div className='flex gap-20  '>
    <input type='text' placeholder='category'className='mb-3 text-2xl p-3 w-1/2 bg-zinc-100 rounded-full w-[60%]'
        onChange={(e)=>setcategory(e.target.value)}
        value={category}/>
    
    <input type='number' placeholder=' product price'className='mb-3 text-2xl p-3 w-1/2 bg-zinc-100 rounded-full w-[60%]'
 onChange={(e)=>setprice(e.target.value)}
 value={price}
    />
    
    </div>
    
    <textarea className=' h-[25%] mb-3 text-2xl p-3  bg-zinc-100 rounded-md w-[48%]' placeholder='enter product description'
    onChange={(e)=>setDescription(e.target.value)}
    value={Description}
    > </textarea>
    
   <button  className='py-2 px-5   mr-[35%] border rounded border-blue-200 text-blue-300'> Add new product</button>
   </form>

  )
}

export default Create