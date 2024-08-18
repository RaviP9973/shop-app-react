import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import logo from '../Assets/logo.png';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const {cart} = useSelector( (state) => state)
  return (
    <div >
      <nav className='flex justify-around items-center h-20 max-w-6xl mx-auto'>
        <NavLink to="/">
          <img src={logo} alt=""  className='h-10'/>
        </NavLink>
        
      
      <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
        <NavLink to="/">
          <p className='text-white'>home</p> 
        </NavLink>
        <NavLink to="/cart">
            <div className='realtive'>
              <MdShoppingCart />
              {
                cart.length > 0 && <span className=' absolute top-[0.1px] -r-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
              }
              
            </div>
            
        </NavLink>
        </div>
        </nav>
    </div >
  )
}

export default Navbar
