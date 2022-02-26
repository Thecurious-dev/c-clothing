import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/cart/cart.action";

import React from 'react'
import { CartContainer, ItemCountContainer, ShoppingIcon } from './cart-icon.styles'




const CartIcon = ({toggleCartHidden}) => {
  return (
    
       <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>9</ItemCountContainer>
      </CartContainer>
    
  )
};



const mapDispatchToProps = dispatch=>({
  toggleCartHidden:()=>dispatch(toggleCartHidden())
});

export default connect (null,mapDispatchToProps) (CartIcon)