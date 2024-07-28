import React, { useContext } from 'react'
 import { Link } from 'react-router-dom'
import { ProductsContext } from './utils/Context'


function Nav() {
  const[products]= useContext(ProductsContext);
let uniquecat =  products.reduce(( acc ,cv)=>
  [ ...acc , cv.category]
 ,[]) 
 uniquecat=[...new  Set(uniquecat)];
//  console.log(uniquecat);
  return (
    <>
    <nav className='w-[15%] h-full bg-zinc flex flex-col items-center pt-5'>
    <Link 
    to = {"/create"}
    className='py-2 px-5 border rounded border-blue-200 text-blue-300'
    >Add new product 
    </Link>
    <hr className='my-3 w-[80%] '/>
    <h1 className='text-2xl mb-3 w-[80%] '>Category filter</h1>
    <div className='w-[80%]'>
      {uniquecat.map((c,i)=>
       ( 
        
        <Link key={i} 
        to={`/?category=${c}`}
        className='flex items-center mb-3 '>
          
            
        <span className='rounded-full mr-2 w-[15px] h-[15px] bg-red-300'></span>{" "}
       {c}
        </Link>

      ))}
      
    </div>
  </nav>
  </>
  )
}

export default Nav