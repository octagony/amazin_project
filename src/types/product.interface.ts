export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: IProductCategory;
  image: string;
  rating: IProductRating;
}

export enum IProductCategory {
  "Electronics",
  "Jewelery",
  "Men's Clothing",
  "Women's Clothing",
}

export interface IProductRating {
  rate: number;
  count: number;
}
