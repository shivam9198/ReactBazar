import React from 'react' ;
function Cards({values ,index,handleClick }){
    const{image , Name ,profession , friends}=values;
    return(
        <div className='w-52 bg-white rounded-md overflow-hidden  '>
            <div className='w-full h-40 bg-sky-200'>
                <img  className=' w-full h-full object-cover object-[center_top]' src={image}/>
                </div>
                <div className='w-full p-3'>
                    <h3 className='text-xs font-semibold'>{Name}</h3>
                    <h5 className='text-xs'>{profession} </h5>
                    <button onClick={()=>handleClick(index)} className={`mt-4 px-3 py-1 text-xs text-white ${friends  ? "bg-green-600":"bg-blue-500"} font-semibold rounded-md`}>
                        {friends=== true ? "Request sent":"Add friend"}</button>
                </div>
            
        </div>

    )
}
export default Cards;