import React, { useEffect, useState } from 'react'
import CartItem from "../components/CartItem"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div>
      {
        cart.length > 0 ?
          (
            <div className='flex justify-center'>
              <div className='max-w-500  h-full mr-20'>
                {
                  cart.map((item, index) => (
                    <CartItem key={index} itemIndex={index} item={item}></CartItem>
                  ))
                }
              </div>
              <div className='flex flex-col justify-between mt-20 mb-20 '>
                <div className='flex flex-col '>
                  <div className='font-bold text-[25px] text-green-700'>Your Cart</div>
                  <div className='text-3xl font-bold text-[40px] text-green-700'>Summary</div>
                  <p className='mt-5 font-bold'>
                    <span>Total Items: {cart.length}</span>
                  </p>
                </div>

                <div>
                  <p className='text-center'>Total Amount: {totalAmount}</p>
                  <button className='bg-green-700 w-52 h-14 rounded-xl mt-7 transition-transform duration-300 ease-in-out hover:bg-green-600 hover:text-white hover:scale-105'>Checkout Now</button>
                </div>


              </div>

            </div>
          )
          :
          (
            <div className='flex justify-center items-center h-[80vh] w-[100vw]'>

              <div  className='flex flex-col justify-center items-center'>
                <p className='text-center font-bold text-[30px]'>No items in the cart</p>
                <Link to={"/"} >
                  <button className='bg-green-700 w-52 h-14 rounded-lg mt-5 transition-transform duration-300 ease-in-out hover:bg-green-600 hover:text-white hover:scale-105'>Shop Now</button>
                </Link>
              </div>

            </div>
          )
      }




    </div>
  )
}

export default Cart
