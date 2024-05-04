import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { CommonModal } from "../Comps/CommonModal";
import { ProductEntity } from "./Utils/Constants";
import { Button, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { CommonInput } from "../Comps/CommonInput";
import { useState } from "react";
import { getAmountValFromDollarString } from "./Utils/Methods";

export const EditProductModal = NiceModal.create(
  ({
    onChangeRowData,
    rowData,
  }: {
    rowData: ProductEntity;
    onChangeRowData: (updatedRowData: ProductEntity) => void;
  }) => {
    const modal = useModal();
    const numberedRowData = {
      ...rowData,
      price: getAmountValFromDollarString({ currencyVal: rowData.price }),
      value: getAmountValFromDollarString({ currencyVal: rowData.value }),
    };
    const [localFormData, setLocalFormData] = useState(numberedRowData);
    const onClickSave = () => {
      const newRowData = {
        ...localFormData,
        value: `$${localFormData.value}`,
        price: `$${localFormData.price}`,
      };
      onChangeRowData(newRowData);
      modal.remove();
    };

    return (
      <CommonModal
        contentStyle={{
          padding: "20px",

          width: "30vw",
          borderRadius: "8px",
        }}
        body={
          <SimpleGrid columns={2}>
            <CommonInput
              label={"Category"}
              value={localFormData.category}
              onChange={(e) => {
                setLocalFormData((prev) => ({
                  ...prev,
                  category: e.target.value,
                }));
              }}
            />
            <CommonInput
              type="number"
              label={"Price"}
              value={localFormData.price}
              onChange={(e) => {
                setLocalFormData((prev) => {
                  const newPrice = Number(e.target.value);
                  return {
                    ...prev,
                    price: newPrice,
                    value: prev.quantity * newPrice,
                  };
                });
              }}
            />
            <CommonInput
              label={"Quantity"}
              value={localFormData.quantity}
              onChange={(e) => {
                setLocalFormData((prev) => {
                  const newQuantity = Number(e.target.value);
                  return {
                    ...prev,
                    quantity: newQuantity,
                    value: prev.price * newQuantity,
                  };
                });
              }}
              type="number"
            />
            <CommonInput
              label={"Value"}
              value={localFormData.value}
              isDisabled={true}
              type="number"
            />
            {/* we just can't allow both inputs to be changed simulataneously , value and quantity , so iam disabling value one.. */}
          </SimpleGrid>
        }
        header={
          <VStack width={"fit-content"} alignItems={"flex-start"}>
            <Text color={"white"} fontSize={"xx-large"}>
              Edit Product
            </Text>
            <Text color={"white"}>{rowData.name}</Text>
          </VStack>
        }
        footer={
          <HStack>
            <Button onClick={modal.remove} color={"#293829"}>
              Cancel
            </Button>
            <Button onClick={onClickSave} color={"#293829"}>
              Save
            </Button>
          </HStack>
        }
        isOpen={modal.visible}
        onClose={modal.remove}
      />
    );
  }
);
