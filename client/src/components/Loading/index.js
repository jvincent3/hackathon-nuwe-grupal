import React from 'react'
import {Flex, Box, Text, Spinner} from '@chakra-ui/react'

function Loading() {
    return (
        <Flex textAlign="center" width="fit-content" mx="auto" height="calc(100vh - 200px)">
            <Box alignSelf="center">
                <Text fontSize="4xl">Loading...</Text>
                <Spinner size="xl"/>
            </Box>
        </Flex>
    )
}

export default Loading
