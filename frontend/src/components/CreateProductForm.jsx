import React, { useState } from 'react';
import { BsFillHandbagFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { createProduct, getProducts } from '../feature/ProductSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function CreateProductForm() {
    const dispatch = useDispatch('')
    const navigate = useNavigate()
    
  const [Product, setProduct] = useState({
    ProductName: '',
    Price: null,
    Brand: '',
    Category: '',
    Stock: null,
    link: '',
  });
  const { ProductName, Price, Brand, Category, Stock, link } = Product;

  const handleChange = (e) => {
    setProduct({
      ...Product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(createProduct(Product))
    dispatch(getProducts());
    navigate('/')
    toast('product added')
  }

  return (
    <div className="grid place-items-center h-screen bg-gray-100">
      <div className=" p-12 flex flex-col items-center shadow-2xl bg-white">
        <form onSubmit={handleSubmit} action="">
          <h1 className="text-4xl mb-5">Create Product</h1>
          <div className="border border-zinc-400 rounded-md flex items-center pl-4  mb-2 ">
            <BsFillHandbagFill className="mr-2" />
            <input
            required
              onChange={handleChange}
              name={'ProductName'}
              value={ProductName}
              className="focus:border-none w-full rounded-md pr-4 py-2"
              type="text"
              placeholder="Product Name"
            />
          </div>
          <div className="border border-zinc-400 rounded-md flex items-center pl-4 mb-2 ">
            <BsFillHandbagFill className="mr-2" />
            <input
            required
              onChange={handleChange}
              name={'Price'}
              value={Price}
              className="focus:border-none w-full rounded-md pr-4 py-2"
              type="number"
              placeholder="Price"
            />
          </div>
          <div className="border border-zinc-400 rounded-md flex items-center pl-4 mb-2 ">
            <BsFillHandbagFill className="mr-2" />
            {/* <input className='focus:border-none' type="" placeholder='Brand' /> */}
            <textarea
              onChange={handleChange}
              name={'Brand'}
              value={Brand}
              className="w-full rounded-md"
              placeholder="Brand"
              id=""
            ></textarea>
          </div>
          <div className="border border-zinc-400 rounded-md flex items-center pl-4 mb-2 ">
            <BsFillHandbagFill className="mr-2" />
            <select
            required
              onChange={handleChange}
              name={'Category'}
              value={Category}
              className="w-full pr-4 py-2 rounded-md"
            >
              <option>Choose Category</option>
              <option>option 1</option>
              <option>option 2</option>
            </select>
          </div>
          <div className="border border-zinc-400 rounded-md flex items-center pl-4 mb-2 ">
            <BsFillHandbagFill className="mr-2" />
            <input
            required
              onChange={handleChange}
              name={'Stock'}
              value={Stock}
              className="focus:border-none w-full rounded-md pr-4 py-2"
              type="number"
              placeholder="Stock"
            />
          </div>
          <div className="border border-zinc-400 rounded-md flex items-center pl-4 mb-2 ">
            <BsFillHandbagFill className="mr-2" />
            <input
              onChange={handleChange}
              name={'link'}
              value={link}
              className="focus:border-none w-full rounded-md pr-4 py-2"
              type="text"
              placeholder="Choose files"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white rounded-md px-4 py-2"
          >
            CRATE
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProductForm;
