import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React, { ReactNode } from 'react';


export type CommonTableProps<T> = {
    data: T[];
    tableStyles?: React.CSSProperties;
    headers: { accessor: string; header: string,renderCell?:(rowData:T)=>ReactNode }[];
};
export const CommonTable = <T extends {[key:string]:string | number | boolean}>({ data, tableStyles = {}, headers }: CommonTableProps<T>) => {
    return (
      <TableContainer>
      <Table variant='simple' style={{...tableStyles}}>
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead>
          <Tr>
            {
            headers.map((header)=>{
             return <Th>{header.header}</Th>
            })
          }
          </Tr>
        </Thead>
        <Tbody>{
          data.map((entity,i)=>{
            return <Tr>
              {
                headers.map((header)=>{
                  if(header.renderCell){
                    return header.renderCell(entity)
                  }
                  return <Td>{entity[header.accessor]}</Td>
                })
              }
            
          </Tr>
          })
          }
        </Tbody>
      </Table>
    </TableContainer>
    );
};
