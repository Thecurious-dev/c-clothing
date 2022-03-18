
import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem';
import { toggleCartHidden } from "../../Redux/cart/cart.action";




import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './CartDropdown.styles';
import {  useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../Redux/cart/cart-selectors';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems, dispatch }) => {
  let navigate = useNavigate();
  return(
  
      <CartDropdownContainer>
        <CartItemsContainer>
          {cartItems.length ? (
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
          )}
        </CartItemsContainer>
        <CartDropdownButton
          onClick={() => {
            navigate("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CartDropdownButton>
      </CartDropdownContainer>
  )
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);