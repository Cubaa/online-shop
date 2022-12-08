import axios from "axios";
import { IProduct } from "../components/products/products.interface";

export const getProducts = async (): Promise<IProduct[]> => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};
