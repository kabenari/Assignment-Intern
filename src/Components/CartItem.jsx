import React from 'react'
import { useCartContext } from '../Context/Cart_Store'

const CartItem = ({images,title,price}) => {

    const {handleRemove} = useCartContext()

  return (
    <div>
        <div className='grid grid-cols-4 mt-3 mb-3 justify-between items-center ml-5'>
            <div className='w-[100px] h-[100px]'>
                <img src={images} alt="pic" />
            </div>
            <div>
                <p>{title}</p>
            </div>
            <div>
                <p>$ {price}</p>
            </div>
            <div>
                <button
                onClick={()=>handleRemove(title)} 
                className='w-[80px] h-[40px] rounded-xl bg-blue-400 hover:bg-blue-800 active:bg-black text-white'>
                    Remove
                </button>
            </div>
        </div>
        <hr className='w-full h-[1px] rounded-[10px] bg-[#252525]'/>
    </div>
  )
}

export default CartItem 