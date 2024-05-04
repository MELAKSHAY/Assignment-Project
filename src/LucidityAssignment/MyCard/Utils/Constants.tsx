export enum ScreenView {
    ADMIN = "admin",
    USER = "user", // creating this enum , for future perspective, there may be other view types or may be this view type value needs to be sent in GET api for data filtering for different users
  }

  export type ProductEntity={
    name: string;
    category: string;
    value: string;
    quantity: number;
    price: string;
  }
  export const InventoryCardType :{[key:string]:{header:string}} ={
   totalProduct:{header:'Total Products'},
   totalStoreValue:{header:'Total Store Value'},
   outOfStocks:{header:'Out of Stocks'},
   numberOfCategories:{header:'No of Categories'}
  }