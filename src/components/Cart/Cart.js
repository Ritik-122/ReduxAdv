import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItem.items);
 
  let showcartItems = cartItems.map((item) => (
    <CartItem  id={item.id} title={item.title} quantity={item.quantity} total={25} price={item.price} />
  ));
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{showcartItems}</ul>
    </Card>
  );
};

export default Cart;
