import { useContext } from "react";
import { CartContext } from "../contexts/shopping-cart/shopping-cart.context";

export const useShoppingCart = () => useContext(CartContext);
