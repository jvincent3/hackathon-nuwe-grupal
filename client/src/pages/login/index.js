import React from 'react'
import LoginForm from 'components/Forms/LoginForm'
import { Box, Flex, Text} from '@chakra-ui/react'


function LoginPage() {
    return (
        <>
        <Flex height="calc(100vh - 80px)" maxWidth="600px" mx="auto">
            <Box alignSelf="center" width="100%">
             <Text fontSize="3xl" textAlign="center">Sign in to <Text as="span" fontSize="4xl">Github</Text></Text>
                <LoginForm/>
            </Box>
        </Flex>
        </>
    )
}

export default LoginPage;