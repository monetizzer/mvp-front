import { Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { AddProductForm } from '../../components/Form/AddProductForm'
import { Header } from '../../components/Header'
import { Upload } from './test'

export const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Flex
        as="main"
        maxW={1120} 
        px={[10, 15, 20]} 
        mx="auto" 
        // my={[10, 15, 20]}
      >
        {/* <AddProductForm /> */}
        <Upload />
      </Flex>
    </>
  )
}
