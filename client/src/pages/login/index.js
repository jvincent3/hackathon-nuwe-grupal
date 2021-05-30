import React from 'react'
import LoginForm from 'components/Forms/LoginForm'
import { Box, Flex, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


function LoginPage() {
    return (
        <>
        <Flex height="calc(100vh - 80px)" maxWidth="600px" mx="auto">
            <Box alignSelf="center" width="100%">
                 <Text fontSize="3xl" textAlign="center">Sign in to 
             
                    <Text as="span" fontSize="4xl">Github</Text>
             
                 </Text>

                <LoginForm/>

                <Flex marginLeft="1rem" 
                      width="95%" 
                      justifyContent="center" 
                      alignItems="center" 
                      py="10px" 
                      border="1px solid #fff" 
                      background="#74B869"
                      borderRadius="0.3rem"
                      _hover={{backgroundColor: "#55CF42"}}>

                    <Text as="span" marginRight="1rem" color="#222a3a" fontWeight="semibold">Next to GitHubSquaads?</Text>
                    <Link to="/register"> 
                        <Text color="#323E86" fontWeight="semibold" >Create an account</Text>
                    </Link>
                </Flex>
            
            </Box>
        </Flex>
        </>
    )
}

export default LoginPage;