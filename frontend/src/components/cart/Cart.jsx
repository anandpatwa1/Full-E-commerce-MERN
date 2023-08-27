import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
  const { cart } = useSelector((state) => state);
  const [newCart, setNewCart] = useState(cart);
  const total = cart.reduce((p, c) => {
    return p + c.Price;
  }, 0);
  const [Value, setValue] = useState(total);

  const handleValue = (value) => {
    const newValue = value + Value;
    setValue(newValue);
  };
  const removeDuplicates = (arr) => {
    // const newArr = arr.filter((item, index) => arr.indexOf(item._id) === item._id);
    const ids = arr.map(({ _id }) => _id);
    const filtered = arr.filter(({ _id }, index) => !ids.includes(_id, index + 1) );
    setNewCart(filtered);
  };
  useEffect(() => {
    removeDuplicates(cart);
    // setNewCart(cart);
  }, []);

  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leadi">Products</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Photo</th>
                <th className="p-3">Price</th>
                <th className="p-3">ProductName</th>
                <th className="p-3">Brand</th>
                <th className="p-3">Category</th>
                <th className="p-3">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {newCart.map((item) => (
                <CartItem key={item.id} cart={item} handleValue={handleValue} />
              ))}
            </tbody>
          </table>
          TOTAL value :- {Value}
        </div>
      </div>
    </div>
  );
}

export default Cart;
