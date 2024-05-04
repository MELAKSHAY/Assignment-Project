import { Input, InputProps, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const CommonInput = ({label,...props}:InputProps & {label:string},) => {
  return (
    <VStack width={'fit-content'} alignItems={'flex-start'}>
    <Text color={'white'}>{label}</Text>
    <Input width={'150px'} margin={'10px'} background={'#252525'} border={'5px'} color={'white'} borderRadius={'5px'}  {...props}/>
    </VStack>
  )
}
