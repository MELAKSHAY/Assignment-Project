import { HStack, IconButton, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";

import { Buffer } from "buffer";
import { InventoryCardType, ProductEntity } from "../MyCard/Utils/Constants";
import { getProductInventoryCountData } from "../MyCard/Utils/Methods";
import { CommonTable } from "../Comps/CommonTable";
import { InventoryStatsCard } from "../MyCard/InventoryStatsCard";
import {  LuShoppingCart } from "react-icons/lu";
import { MdRemoveShoppingCart } from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";
import { MdOutlineCategory } from "react-icons/md";
import { RowEditCell } from "../MyCard/RowEditCell";
export const InventoryDataPageCommon = ({
  isEditable,
}: {
  isEditable: boolean;
}) => {
  const [productsData, setProductsData] = useState<ProductEntity[]>([]); //

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
  } = useMemo(() => {
    // use memo is for optimsation , with dependency as productsData
    return getProductInventoryCountData({ productsData });
  }, [productsData]);

  const onChangeRowData = (updatedRowData: ProductEntity, index: number) => {
    setProductsData((prev) => {
      const tempProductsData = [...prev];
      tempProductsData[index] = updatedRowData;
      return tempProductsData;
    });
  };
  const onDelete = (index: number) => {
    setProductsData((prev) => {
      const arrayAfterDeletion = prev.filter((_, i) => index !== i);
      return arrayAfterDeletion;
    });
  };

  return (
    <>
      <SimpleGrid
        spacing={4}
        marginBlock={"20px"}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        <InventoryStatsCard
          heading={InventoryCardType.totalProduct.header}
          count={totalProductsCount}
          iconNode={LuShoppingCart}
        />
        <InventoryStatsCard
          heading={InventoryCardType.totalStoreValue.header}
          count={totalStoreValue}
          iconNode={RiExchangeDollarLine}
        />
        <InventoryStatsCard
          heading={InventoryCardType.outOfStocks.header}
          count={outOfStocksCount}
          iconNode={MdRemoveShoppingCart}
        />
        <InventoryStatsCard
          heading={InventoryCardType.numberOfCategories.header}
          count={totalNumberOfCategs}
          iconNode={MdOutlineCategory}
        />
      </SimpleGrid>
      <CommonTable
        tableStyles={{ marginBlock: "50px", background: "#2c2c2c" }}
        data={productsData}
        headers={[
          { accessor: "name", header: "Name" },
          { accessor: "category", header: "Category" },
          { accessor: "price", header: "Price" },
          { accessor: "quantity", header: "Quantity" },
          { accessor: "value", header: "Value" },
          {
            accessor: "-" as any,  
            header: "Value",
            renderCell: (rowData: ProductEntity, index: number) => {  // rendering a cusom cell (which is a react node)
              return (
                <RowEditCell
                  index={index}
                  rowData={rowData}
                  onChangeRowData={(updatedRow) =>
                    onChangeRowData(updatedRow, index)
                  }
                  onDelete={() => onDelete(index)}
                  isUserAdmin={isEditable}
                />
              );
            },
          },
        ]}
      />
    </>
  );
};
