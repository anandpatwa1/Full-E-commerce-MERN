import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../feature/ProductSlice';
import Product from './Product';
import Filter from './Filter';

function AllProducts() {
  const dispatch = useDispatch();
  const [AllProducts , setAllProducts ] = useState([{}])
  const { Products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    setAllProducts(Products)
  }, []);

//   if (Product.length == 1) {
//     return (
//       <div>
//       <section className='flex'>
//         <Filter />
//         <div className="second w-4/5">
//           <div className="right-div flex flex-wrap justify-around">            
//           <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
// 	<div className="h-48 rounded-t bg-gray-300"></div>
// 	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
// 		<div className="w-full h-6 rounded bg-gray-300"></div>
// 		<div className="w-full h-6 rounded bg-gray-300"></div>
// 		<div className="w-3/4 h-6 rounded bg-gray-300"></div>
// 	</div>
// </div><div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
// 	<div className="h-48 rounded-t bg-gray-300"></div>
// 	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
// 		<div className="w-full h-6 rounded bg-gray-300"></div>
// 		<div className="w-full h-6 rounded bg-gray-300"></div>
// 		<div className="w-3/4 h-6 rounded bg-gray-300"></div>
// 	</div>
// </div><div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
// 	<div className="h-48 rounded-t bg-gray-300"></div>
// 	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
// 		<div className="w-full h-6 rounded bg-gray-300"></div>
// 		<div className="w-full h-6 rounded bg-gray-300"></div>
// 		<div className="w-3/4 h-6 rounded bg-gray-300"></div>
// 	</div>
// </div>
//           </div>
//         </div>
//       </section>
    
//     </div>
//     );
//   }else
  return (
    <div>
      <section className='flex'>
        <Filter />
        <div className="second w-4/5">
          <div className="right-div flex flex-wrap justify-around">            
            {Products?.map((item) => (
              <Product key={item.id} Product={item} />
            ))}
          </div>
        </div>
      </section>
    
    </div>
  );
}

export default AllProducts;
