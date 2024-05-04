import { Flex,Text} from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from "react-icons/ri";


export const NoDataFound = () => {
  return (
    <Flex
    flexDirection={"column"}
    alignItems="center"
    justifyContent={"center"}
    borderRadius="6px"
    border={`1px solid red`}
    py={"30px"}
  >
    <RiErrorWarningFill size={"60px"} color={"red"} />
    <Text color={"red"} fontSize={"20px"} mt={"10px"}>
      {"NO DATA FOUND"}
    </Text>
  </Flex>
  )
}
