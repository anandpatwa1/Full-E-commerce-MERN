import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { add } from '../feature/cart/cartSlice';

function Product({ Product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { link, Price, ProductName, Brand, Category, Stock, _id } = Product;
  //   console.log(link);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleAdd = () => {
    setIsButtonDisabled(true);
    dispatch(add(Product));
  };

  const openItem = (e, id) => {
    e.preventDefault();
    navigate('/' + id);
  };
  
  return (
    <>
      <div className="frst-one p-4 border w-60 flex flex-col items-center shadow-2xl bg-white m-3 onClick={(e)=>openItem(e , _id)}">
        <Link to={'/watchpage?id=' + _id}>
          <img src={Product?.link} alt="image not Found" className=" h-52" />
          <h2>{ProductName}</h2>
          <h3>Price : {Price} </h3>
          <h4>Brand : {Brand} </h4>
          <h5>
            <br /> Category : {Category}
          </h5>
        </Link>
        {/* <div className="px-3 py-1 font-semibold rounded-md bg-sky-600 w-full my-2 shadow-xl text-gray-50"> */}
        <button
          disabled={isButtonDisabled}
          onClick={handleAdd}
          type="button"
          className={`mt-3  border border-gray-800 flex uppercase items-center justify-center w-full p-3 tracking-wide rounded-md ${
            isButtonDisabled
              ? 'btn-disabled cursor-not-allowed bg-slate-300 '
              : 'btn-primary'
          }`}
        >
          Add to cart
        </button>

        {/* </div> */}
      </div>
    </>
  );
}

export default Product;
