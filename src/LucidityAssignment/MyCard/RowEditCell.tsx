import { HStack, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { ProductEntity } from "./Utils/Constants";
import { FaEyeSlash } from "react-icons/fa";
import { useModal } from "@ebay/nice-modal-react";
import { EditProductModal } from "./EditProductModal";

export const RowEditCell = ({
  index,
  rowData,
  onChangeRowData,
  onDelete,
  isUserAdmin,
}: {
  rowData: ProductEntity;
  index: number;
  onChangeRowData: (updatedData: ProductEntity) => void;
  onDelete: () => void;
  isUserAdmin: boolean;
}) => {
  const editModal = useModal(EditProductModal);
  const [isRowDisabled, setIsRowDisabled] = useState(true);
  const actionsDisabled = !isUserAdmin || !isRowDisabled;
  return (
    <HStack>
      <IconButton
        aria-label=""
        // size="lg"
        isDisabled={actionsDisabled}
        bg={"transparent"}
        color={isUserAdmin ? "green" : "grey"}
        icon={<MdEdit />}
        onClick={() => editModal.show({ onChangeRowData, rowData })}
      />
      <IconButton
        aria-label=""
        // size="lg"
        color={isUserAdmin ? "purple" : "grey"}
        bg={"transparent"}
        isDisabled={!isUserAdmin}
        icon={!isRowDisabled ? <FaEyeSlash /> : <IoMdEye />}
        onClick={() => {
          setIsRowDisabled((prev) => {
            return !prev;
          });
        }}
      />
      <IconButton
        aria-label=""
        // size="lg"
        bg={"transparent"}
        color={isUserAdmin ? "red" : "grey"}
        icon={<MdDeleteOutline />}
        onClick={onDelete}
        isDisabled={actionsDisabled}
      />
    </HStack>
  );
};
