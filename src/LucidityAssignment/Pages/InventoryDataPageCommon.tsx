import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";

import { Buffer } from "buffer";
import { ProductEntity } from "../MyCard/Utils/Constants";
import { getProductInventoryCountData } from "../MyCard/Utils/Methods";
export const InventoryDataPageCommon = ({
  isEditable,
}: {
  isEditable: boolean;
}) => {
  const [productsData, setProductsData] = useState<ProductEntity[]>([]);    // 

  useEffect(() => {
    fetch("https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory")
      .then((response) => {
        const reader = response.body?.getReader();
        if (reader) return reader.read();
      })
      .then((data) => {
        const jsonString = Buffer.from(data?.value ?? []).toString("utf8"); //converting to json-string
        try {
          const JsonData = JSON.parse(jsonString);
          setProductsData(JsonData as ProductEntity[]);
        } catch (error) {
          console.log("not a valid json string");
        }
      });
  }, []); // ensuring api call when on initial mount



  const {
    totalProductsCount,
    totalStoreValue,
    outOfStocksCount,
    totalNumberOfCategs,
  } = useMemo(() => {                           // use memo is for optimsation , with dependency as productsData
    return getProductInventoryCountData({ productsData });
  }, [productsData]);
  



  return (
    <SimpleGrid
      spacing={4}
      marginBlock={"20px"}
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      {/* <InventoryStatsCard  /> <InventoryStatsCard />
        <InventoryStatsCard /> <InventoryStatsCard /> */}
    </SimpleGrid>
  );
};
