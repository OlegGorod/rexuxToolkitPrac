import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const arrOfCartItem = useSelector((state) => state.cart);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {arrOfCartItem.map((item) => (
          <CartItem key={item.id}
            item={{
              title: item.title,
              quantity: item.quantity,
              price: item.price,
              total: item.quantity * item.price,
              id: item.id,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
