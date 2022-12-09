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
      const isExists = findDuplicate(product, cart);
      if (isExists) {
        const foundProduct = cart.find(
          (item: IProduct) => item.title === product.title
        );
        if (foundProduct !== undefined) foundProduct.quantity += 1;
        return [...cart];
      }
      product.quantity = 1;
      return [...cart, { ...product }];
    });

    setTotal((sum) => sum + product.price);
  };

  const findDuplicate = (product: IProduct, cart: IProduct[]) => {
    const isExists = cart.some((item: IProduct) => {
      return item.title === product.title;
    });
    return isExists;
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
