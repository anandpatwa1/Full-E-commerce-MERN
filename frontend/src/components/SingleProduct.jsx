import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { add } from '../feature/cart/cartSlice';
import { useDispatch } from 'react-redux';

function SingleProduct() {
    const dispatch = useDispatch();
  const API_URL = '/api/product';

  const [Id] = useSearchParams();
  const id = Id.get('id');

  const [product , setProduct] = useState({})

  const getProduct = async (id) => {
    const res = await axios.post(API_URL + '/getProduct', { id: id });
    setProduct(res.data);
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleAdd = () => {
    setIsButtonDisabled(true);
    dispatch(add(product));
  };


  useEffect(() => {
    getProduct(id);
  }, []);

  return <div>
    <section className="bg-gray-100 text-gray-800">
	<div className="border border-black container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className=" flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={product?.link} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className=" flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leadi sm:text-6xl">{product?.ProductName}</h1>
			<p className="mt-6 mb-2 text-lg sm:mb-1">Price :- {product?.Price}</p>
			<p className="mt-6 mb-4 text-lg sm:mb-2">Brand :- {product?.Brand}</p>
			<p className="mt-6 mb-4 text-lg sm:mb-2">Brand :- {product?.Category}</p>
			{/* <button  onClick={handleAdd} className='px-8 py-3 text-lg font-semibold border rounded border-gray-800'> ADD To Cart</button> */}
            <button disabled={isButtonDisabled} onClick={handleAdd} type="button" className={`  border border-gray-800 flex uppercase items-center justify-center w-full p-3 tracking-wide rounded-md ${isButtonDisabled ? 'btn-disabled cursor-not-allowed bg-slate-300 ' : 'btn-primary'
            }`}>Add to cart</button>
		</div>
	</div>
</section>
  </div>;
}

export default SingleProduct;
