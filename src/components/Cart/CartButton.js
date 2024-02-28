import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import {uiActions } from '../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const arrOfCartItem = useSelector(state => state.cart)
  const quantityOfItems = arrOfCartItem.reduce((a,b) => a + b.quantity,0)
  const toggleHandler = () => {
    dispatch(uiActions.toggleCart())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantityOfItems}</span>
    </button>
  );
};

export default CartButton;
