import React from "react";

type Label = "sale" | "premium" | "new" | "hit" | "discount" | "hot"

export type Product = {
  Product_Name: string;
  parameters: {
      chosen: boolean;
      old_price: number | null;
      price: number;
  }[];
  marks: {
      Mark_ID: number, 
      Mark_Name: Label
  }[]
  images: {
      Image_URL: string
  }[]
}

export type Category = {
  Category_ID: number;
  Category_Image: string;
  Category_Name: string;
  sort_order: number;
}

export type Action = {
  action_type: string;
  description: string;
  extra_field_1: string;
  extra_field_2: string;
  id: number;
  image_url: string;
  sort_order: number;
  url: string;
}

export type DataContextType = {
  fetchedProducts: Product[];
  fetchedCategories: Category[];
  fetchedMarks: object[];
  fetchedActions: Action[];
  fetchedFastSearch: string[];
}

const initialContext = {
  fetchedProducts: [],
  fetchedCategories: [],
  fetchedMarks: [],
  fetchedActions: [],
  fetchedFastSearch: [],
}

export const DataContext = React.createContext<DataContextType>(initialContext);