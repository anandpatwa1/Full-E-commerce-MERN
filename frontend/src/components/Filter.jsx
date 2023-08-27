import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Filter() {
  const { Products } = useSelector((state) => state.products);
  const [newProduct, setNewProduct] = useState([]);
  useEffect(() => {
    setNewProduct(Products);
  }, []);

  const shorting = async (e) => {
    e.preventDefault();
    const value = parseInt(e.target.value);
    let data = await Products;
    console.log(data);
   
    const filterData = await data.sort((i) => i.Price - i.Price + value);
    data.sort((a, b) => {
      return a.Price - b.Price;
    });
    console.log(data);
    // dispatch()
  };

  return (
    <>
      <div className="w-1/5 bg-slate-50 shadow-md">
        <form action="">
          <div className="border border-zinc-400 rounded-md flex items-center pl-4 mb-2 ">
            <select
              required
              name={'Category'}
              className="w-full pr-4 py-2 rounded-md"
            >
              <option>Choose Category</option>
              <option>option 1</option>
              <option>option 2</option>
            </select>
          </div>
          {/* <div className="border border-zinc-400 rounded-md flex items-center pl-4  mb-2 ">
            <input
            required
              name={'brand'}
              className="focus:border-none w-full rounded-md pr-4 py-2"
              type="text"
              placeholder="brand"
            />
          </div> */}
          <div className="">
            <h3>Price</h3>
            <button
              value={1}
              onClick={shorting}
              className="px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800"
            >
              Low to high
            </button>
            <button className="px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800">
              high to low
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Filter;
