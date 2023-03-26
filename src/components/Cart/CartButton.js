import { useDispatch, useSelector} from 'react-redux';
import { showCartActions } from '../../store/redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const t=useSelector((state)=>state.cartItem.items)
  let totalCount=0
  t.map((i)=>totalCount+=i.quantity)
  const dispatch=useDispatch()

  
  const cartHandler=()=>{
    dispatch(showCartActions.showCart(true))


  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCount}</span>
    </button>
  );
};

export default CartButton;
