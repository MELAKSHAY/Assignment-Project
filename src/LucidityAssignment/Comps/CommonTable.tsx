import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { NoDataFound } from "./NoDataFound";

export type CommonTableProps<T> = {
  data: T[];
  tableStyles?: React.CSSProperties;
  headers: {
    accessor: keyof T;
    header: string;
    renderCell?: (rowData: T,index:number) => ReactNode;
  }[];
};
export const CommonTable = <
  T extends { [key: string]: string | number | boolean }
>({
  data,
  tableStyles = {},
  headers,
}: CommonTableProps<T>) => {
  if (!data.length) {
    return (
      <NoDataFound/>
    );
  }
  return (
    <TableContainer color={"white"} >
      <Table variant={''} style={{ ...tableStyles }}>
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead >
          <Tr height={'60px'} style={{border:'1px solid #676464'}} >
            {headers.map((header) => {
              return <Th color={'#88b488'}>{header.header}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((entity, i) => {
            return (
              <Tr height={'60px'} border={'1px solid #676464'}>
                {headers.map((header,index) => {
                  if (header.renderCell) {
                    return <Td>{header.renderCell(entity,i)}</Td>
                  }
                  return <Td>{entity[header.accessor]}</Td>;
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
