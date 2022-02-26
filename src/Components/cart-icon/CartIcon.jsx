import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/cart/cart.action";
import { createStructuredSelector } from "reselect";
import React from 'react'
import { CartContainer, ItemCountContainer, ShoppingIcon } from './cart-icon.styles'
import { selectCartTotal } from "../../Redux/cart/cart-selectors";




const CartIcon = ({toggleCartHidden,itemCount}) => {
  return (
    
       <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
      </CartContainer>
    
  )
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartTotal
});

const mapDispatchToProps = dispatch=>({
  toggleCartHidden:()=>dispatch(toggleCartHidden())
});

export default connect (mapStateToProps,mapDispatchToProps) (CartIcon)