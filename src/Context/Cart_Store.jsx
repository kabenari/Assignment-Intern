import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from "../Reducer/CartReducer"


const CartContext = createContext();

const initialState = {
    cart:[],
    total_item:0,
    total_amount:"",
    shipping_fees:5000,
    sorted:"Lowest To Highest"
}

const CartProvider = ({children})=>{

    const [state , dispatch] = useReducer(reducer , initialState)
    const [countItem , setCounteItem] = useState(0);

    const addToCart = (title , images , price)=>{
        dispatch({type:"ADD_TO_CART",payload:{title , images , price}})
        setCounteItem(countItem + 1);
    }

    const handleRemove = (title)=>{
        dispatch({type:"REMOVE_CART" , payload:title})
        setCounteItem(countItem - 1);
    }

    const sorting = ()=>{
        dispatch({type:"VALUE_SORTED"});
    }

    useEffect(()=>{
        localStorage.setItem("items",JSON.stringify(state.cart))
    },[state.cart])

    return <CartContext.Provider value={{...state,addToCart,handleRemove,countItem}}>{children}</CartContext.Provider>
}

const useCartContext = ()=>{
    return useContext(CartContext)
}

export { CartProvider,useCartContext}; 