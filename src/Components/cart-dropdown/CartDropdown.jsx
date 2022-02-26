


import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem';


import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './CartDropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
     {cartItems.length ? (
       cartItems.map(cartItem =>(
         <CartItem key={cartItem.id} item={cartItem}/>
       )) 
     ) : (
      <EmptyMessageContainer>Your cart is Empty</EmptyMessageContainer>
    )
    
    }
    </CartItemsContainer>
    <CartDropdownButton
      
     
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = state =>({
  cartItems: state.cart.cartItems
})


export default connect(mapStateToProps)(CartDropdown);