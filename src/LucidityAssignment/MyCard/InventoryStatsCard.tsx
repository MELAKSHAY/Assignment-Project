import React, { ReactNode } from "react";
import { CommonCard } from "../Comps/CommonCard";
import { Box, HStack, Text } from "@chakra-ui/react";
import { PiTrolleyBold } from "react-icons/pi";
import { IconType } from "react-icons";
export const InventoryStatsCard = ({ iconNode }: { iconNode: IconType }) => {
  return (
    <CommonCard
      bodyContent={
        <HStack alignItems={'flex-start'} gap={'20px'}>
         {React.createElement(iconNode,{size:'30px',color:'white'})}
          <Box>
            <Text style={{ color: "white" }}>Total Products</Text>
            <Text style={{ color: "white", fontSize: "xx-large" }}>2</Text>
          </Box>
        </HStack>
      }
      style={{ width: "100%" }}
      variant={"filled"}
      background={"#293829"}
    />
  );
};
