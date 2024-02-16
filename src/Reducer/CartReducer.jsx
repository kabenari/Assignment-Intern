const CartReducer = (state, action) => {
  let cartProduct; 

  if (action.type === "ADD_TO_CART") {
      let { title, images, price } = action.payload;

      cartProduct = {
          title: title,
          images: images,
          price: price
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct]
    };
    }

  if(action.type === "REMOVE_CART"){
    
    let UpdatedCart = state.cart.filter((element)=>element.title != action.payload)

    return{ 
        ...state,
        cart:UpdatedCart
    }
  }

    if(action.type === "VALUE_SORTED"){

      let sortedValue = document.getElementById("sort");
      let sorted_value = sortedValue.options[sortedValue.selectedIndex].value
      return{
        ...state,
        sorted:sorted_value
      }
    }


  return state;

};

export default CartReducer;
