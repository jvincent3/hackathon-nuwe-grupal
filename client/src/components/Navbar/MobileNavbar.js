import React from 'react'
import {Box, Flex, Text, Icon, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure} from '@chakra-ui/react'
import {HiMenu} from 'react-icons/hi'
import {useHistory} from 'react-router-dom'

function MobileNavbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const history = useHistory();

    return (
        <Box p="10px">
        <Flex alignContent="center" justifyContent="space-between">
            <Box cursor="pointer" onClick={e =>{
                onClose()
                history.push("/")
                }}>
                <Text fontSize="3xl">GithubSquaadsNuwe</Text>
            </Box>
            <Box>
            <Box cursor="pointer" display="flex" onClick={onOpen} px="10px" background="#491eff" borderRadius="3rem" padding="1.5rem" maxHeight="20px" alignItems="center">
                    <Text fontWeight="semibold" fontSize="xl"><Icon as={HiMenu} fontSize="4xl"/></Text>
                </Box>
            </Box>
        </Flex>
        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
                <Box cursor="pointer" onClick={e =>{
                    onClose()
                    history.push("/")
                    }}>
                    <Text fontSize="3xl">GithubSquaadsNuwe</Text>
                </Box>
            </DrawerHeader>
            <DrawerBody>
                <Box textAlign="center" py="10px">
                    
                </Box>
                <Box fontSize="2xl" cursor="pointer" _hover={{backgroundColor: "#38455a"}} textAlign="center" py="10px" onClick={e => {
                    onClose()
                    history.push("/login")
                }}>
                    <Text>Login</Text>
                </Box>
                <Box fontSize="2xl" cursor="pointer" _hover={{backgroundColor: "#38455a"}} textAlign="center" py="10px" onClick={e => {
                    onClose()
                    history.push("/register")
                    }}>
                    <Text>Register</Text>
                </Box>
            </DrawerBody>
            </DrawerContent>
        </Drawer>
        </Box>
    )
}

export default MobileNavbar