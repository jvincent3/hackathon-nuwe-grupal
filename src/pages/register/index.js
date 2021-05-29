import React from 'react'
import RegisterForm from 'components/Forms/RegisterForm'
import { Box, Flex, Text} from '@chakra-ui/react'


function RegisterPage() {
    return (
        <>
        <Flex height="calc(100vh - 80px)" maxWidth="600px" mx="auto">
            <Box alignSelf="center" width="100%">
             <Text fontSize="3xl" textAlign="center">Create your account</Text>
                <RegisterForm/>
            </Box>
        </Flex>
        </>
    )
}

export default RegisterPage;