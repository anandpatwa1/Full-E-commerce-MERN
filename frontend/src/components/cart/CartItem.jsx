import React, { useEffect, useState } from 'react'

function CartItem({cart , handleValue}) {
    const {  Price, ProductName, Brand, Category, Stock , _id } = cart;

    const [quantity, setQuantity] = useState(1)

    const newQuantity = quantity
    let newPrice = Price * quantity


    const addPrice = ()=>{
        handleValue(Price)
        newPrice = 0
    }
    
    const removePrice = ()=>{
        handleValue(-(quantity === 0 ? 0 : Price))
        newPrice = 0
    }
    
  return (
    
      <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50" >
      <td className="p-3">
        <img src={cart?.link} alt={"no img"} className='h-12' />
      </td>
      <td className="p-3">
        <span className="px-3 py-1 font-semibold rounded-md bg-sky-600 text-gray-50">
          <span>{Price}</span>
        </span>
      </td>
      <td className="p-3">
        <p>{ProductName}</p>
      </td>
      <td className="p-3">
        <p>{Brand}</p>
      </td>
      <td className="p-3">
        <p>{Category}</p>
      </td>
      
      <td className='w-40  border border-gray-300 p-4'>
                <div className=" flex-col">
                    <div className="flex justify-between mb-1"  style={{ maxWidth: 140 }}>
                        <div onClick={removePrice} className="">
                            <button  onClick={() => setQuantity((newQuantity - 1) >= 0 ? (newQuantity - 1) : 0)} className="btn btn-outline-primary rounded-r-md" type="button">−</button>
                        </div>
                        <span className='min-w-max w-12 place-items-center grid bg-white'>{quantity}</span>
                        <div onClick={addPrice} className="">
                            <button onClick={() => setQuantity(newQuantity + 1)} className="btn btn-outline-primary w-12" type="button">+</button>
                        </div>
                    </div>
                </div>
            </td>
    </tr>
    
  )
}

export default CartItem
