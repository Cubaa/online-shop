import { IProduct } from "../products/products.interface";

export interface IProductModalProps {
  open: boolean;
  product: IProduct | undefined;
  handleCloseModal: () => void;
}
