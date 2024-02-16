import React from 'react'
import { useCartContext } from '../Context/Cart_Store'
import CartItem from '../Components/CartItem';

const Cart = () => {
  
  const {cart} = useCartContext();
  console.log(cart);
  return (
    <div>
      <div className='grid grid-cols-4 mt-2 justify-between items-center ml-5'> 
        <p>Item</p>
        <p>Title</p>
        <p>Price</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {
          cart.map((item,i)=>{
            return <CartItem key={i} {...item}/> 
          })
        }
      </div>
      <div className='grid grid-cols-1mt-2 justify-between items-center ml-5 mt-8' >
        <p>total</p>
      </div>
    </div>
    
  )
}

export default Cart