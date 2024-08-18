import React from 'react'
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import {remove} from "../redux/Slices/CartSlice"
import { toast } from "react-hot-toast" 
const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = ()=> {
    dispatch(remove(item.id));
    toast.error("item removed");
  }
  return (
    <div className='flex justify-center p-10 border-b-2 border-slate-700 w-400'>
      {/* title description price img delete */}

      <div className='h-40 mr-10'>
        <img src={item.image} alt="" className='h-full w-40'/>
      </div>

      <div className='flex flex-col justify-between'>
        <h1 className='text-grey-700 font-semibold text-lg text-left w-80 mt-1'>{item.title}</h1>
        <h1 className='w-60 textgray-400 font-normal text-[13px] text-left'>{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
        <div className='flex justify-between'>
          <p className='text-green-700 font-semibold'>
            ${item.price}
          </p>
          <div className='text-[30px]' onClick={removeFromCart}>
            <FcDeleteDatabase />
          </div>
        </div>
      </div>


    </div>
  )
}

export default CartItem
