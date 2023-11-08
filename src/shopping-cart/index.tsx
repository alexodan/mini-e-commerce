import { useContext } from "react";
import { ShoppingCartContext } from "../App";

export function ShoppingCart() {
  const { cart } = useContext(ShoppingCartContext)!;
  console.log("CART:?", cart);

  return (
    <div>
      <h1>Items in cart: {cart.count}</h1>
    </div>
  );
}
