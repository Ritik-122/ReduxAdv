import { useDispatch } from 'react-redux';
import { cartItemActions } from '../../store/redux';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, price } = props;
const dispatch=useDispatch()
const removeItem=()=>{
 

dispatch(cartItemActions.removeItem([props]))
}
const addItem=()=>{
  dispatch(cartItemActions.addToCart([props]))
}
return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${price.toFixed(2)}{' '}
          {/* <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span> */}
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItem}>-</button>
          <button onClick={addItem} >+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
