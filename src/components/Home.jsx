import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav';
import { Link, useLocation } from 'react-router-dom';
import { ProductsContext } from './utils/Context';
import Loading from '../Loading';
import axios from './utils/axios';

const Home=()=>{
  const [products]= useContext(ProductsContext);
  const {search} = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  ;

  const [filterProducts , setfilterProducts] = useState(null);
  const getproductcategory= async()=>{
    try {
      const {data} = await axios.get(`/products/category/${category}`);
      setfilterProducts(data);
     
      
    } catch (error) {
      console.error(error);
      
    }
  }

  useEffect(()=>{
    if(!filterProducts || category=="undefined") setfilterProducts(products);
    if(category !="undefined" ) getproductcategory();
  },[category , products]);

return  products ? ( 
    <>
      <Nav />
      <div className='w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
      { filterProducts  && filterProducts.map((p, i) => (
          <div
            className='mr-3 mb-3 card p-3 border shadow   rounded w-[18%] h-[35vh] flex-col flex justify-center items-center'
            key={i} // Moved the key prop here
          >
            <Link to={`/detail/${p.id}`}>
              <div
                className='hover:scale-110 mb-3 w-full h-20 bg-contain bg-no-repeat bg-center '
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className='hover:text-blue-300 text-wrap'>{p.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}


export default Home