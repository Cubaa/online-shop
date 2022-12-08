import { createContext, FC, useState } from "react";
import { IProduct } from "../../components/products/products.interface";

export interface ICartContext {
  shoppingCart: IProduct[];
  total: number;
  addProductToCart: (product: IProduct) => void;
  isOpen: boolean;
  openShopppingCart: () => void;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

export interface IShoppingCartProps {
  children: JSX.Element;
}

export const ShoppingCartProvider: FC<IShoppingCartProps> = (props) => {
  const [shoppingCart, setshoppingCart] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const addProductToCart = (product: IProduct) => {
    setshoppingCart((cart) => {
      const isExist = removeDuplicate(product, cart);
      if (isExist) {
        const el = cart.find((item: IProduct) => item.title === product.title);
        if (el !== undefined) el.quantity += 1;
        return [...cart];
      }
      product.quantity = 1;
      return [...cart, { ...product }];
    });

    setTotal((sum) => sum + product.price);
  };

  const removeDuplicate = (product: IProduct, cart: IProduct[]) => {
    const isExist = cart.some((item: IProduct) => {
      return item.title === product.title;
    });
    return isExist;
  };

  const openShopppingCart = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const context: ICartContext = {
    shoppingCart,
    total,
    addProductToCart,
    isOpen,
    openShopppingCart,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};
