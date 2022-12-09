interface IProductRating {
  count: number;
  rate: number;
}

export interface IProduct {
  title: string;
  image: string;
  price: number;
  quantity: number;
  description: string;
  category: string;
  rating: IProductRating;
}
