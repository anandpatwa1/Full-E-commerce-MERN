import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
    const { cart } = useSelector(state => state)
  return (
    <div>
      <header className="p-4 bg-gray-100 text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <Link
                to={'/'} className="flex items-center px-4 -mb-1 border-b-2 border-transparent">All products</Link>
            </li>
            <li className="flex">
              <Link
                to={'/CreateProduct'} className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Create Product</Link>
            </li>
          </ul>
           <Link  to='/cart' className="float-left">cart : {cart.length}</Link>
          
        </div>
      </header>
    </div>
  );
}

export default Navbar;
