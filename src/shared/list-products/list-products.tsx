import React, { FC, Fragment } from "react";
import { IProduct } from "../../components/products/products.interface";
import { useShoppingCart } from "../../hooks/shopping-cart.hook";
import { ProductItem } from "./product-items/product-item";

export const ListProducts: FC = () => {
  const { shoppingCart } = useShoppingCart();

  return (
    <>
      {shoppingCart.map((product: IProduct, index: number) => {
        return (
          <Fragment key={index}>
            <ProductItem product={product} />
          </Fragment>
        );
      })}
    </>
  );
};
