import React from 'react'
import cart from "../assets/cartMY.png"
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/Cart_Store'

const Navbar = () => {

  const {countItem} = useCartContext();


  return (
    <div>
      <div className="flex bg-blue-400 text-white top-0 py-2 flex-wrap justify-around bg-silver">
    <Link to="/"><h1 className="cursor-pointer text-lg font-semibold mt-2">GrandLineShop</h1></Link>
    <div className='flex flex-row gap-2'>
        <Link to="/cart">
          <img src={cart} className='w-[30px] h-[30px] mt-2'  alt="" />
        </Link>
        <div className='w-[22px] h-[22px] flex justify-center items-center rounded-full absolute bg-red-600 text-white'>
          {countItem}
        </div>
        <Link to="/login">
          <button className='w-[100px] transition h-[45px] bg-blue-800 color-white rounded-[75px] cursor-pointer text-white hover:bg-blue-600 hover:text-white active:bg-white active:text-black outline-1 outline-blue-50 ml-5'>
            Login
          </button>
        </Link>
      </div>
  </div>

  </div>
  )
}

export default Navbar