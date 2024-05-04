import React from "react";
import { CommonCard } from "../Comps/CommonCard";
import { Box, HStack, Text } from "@chakra-ui/react";

import { IconType } from "react-icons";
export const InventoryStatsCard = ({
  iconNode,
  count,
  heading,
}: {
  iconNode: IconType;
  heading: string;
  count: number;
}) => {
  return (
    <CommonCard
      bodyContent={
        <HStack alignItems={"flex-start"} gap={"20px"} height={'100%'} >
          {React.createElement(iconNode, { size: "30px", color: "white" })}
          <Box>
            <Text style={{ color: "white" }}>{heading}</Text>
            <Text style={{ color: "white", fontSize: "xx-large" }}>
              {count}
            </Text>
          </Box>
        </HStack>
      }
      style={{ width: "100%", borderRadius:'12px'}}
      variant={"filled"}
      background={"#293829"}
    />
  );
};
