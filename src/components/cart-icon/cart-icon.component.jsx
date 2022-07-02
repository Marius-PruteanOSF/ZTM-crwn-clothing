import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CartContext } from '../../contexts/cart.context';
import {selectIsCartOpen, selectCartCount} from '../../store/cart/cart.selector'
import {setIsCartOpen} from '../../store/cart/cart.action';

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();
  //const categoriesMap = useSelector(selectCategoriesMap);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  //const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  //const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;