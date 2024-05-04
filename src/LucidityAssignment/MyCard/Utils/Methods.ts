import { ProductEntity } from "./Constants";

const getAmountValFromDollarString = ({
  currencyVal,
}: {
  currencyVal: string;
}) => {
  return Number(currencyVal.replace(/[^0-9.-]+/g, "")); // took help of a dollar / - regex
};

export const getProductInventoryCountData = ({
  productsData,
}: {
  productsData: ProductEntity[];
}) => {
  let totalStoreValue = 0;
  let totalProductsCount = 0;
  let outOfStocksCount = 0;
  let productsObjWithProductCategoryAsKey: { [key: string]: string } = {};
  productsData.forEach((product) => {
    totalStoreValue += getAmountValFromDollarString({
      currencyVal: product.value,
    }); // total value
    totalProductsCount += 1; // total products count
    const isCurrentOutOfStock = !!(product.quantity === 0);
    if (isCurrentOutOfStock) return outOfStocksCount++; // out of stock  // hashing done because of finding unique vals
    productsObjWithProductCategoryAsKey[product.category] = "not - important";
  });
  return {
    totalStoreValue,
    totalProductsCount,
    outOfStocksCount,
    totalNumberOfCategs: Object.keys(productsObjWithProductCategoryAsKey)
      .length, // this is number of categories present
  };
};
