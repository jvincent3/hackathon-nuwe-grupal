import React from 'react'
import {Box, Modal, ModalFooter, ModalOverlay, ModalBody, ModalHeader, useDisclosure, Button, ModalContent, ModalCloseButton} from '@chakra-ui/react'
import TeamForm from '../TeamForm'

function CreateTeam() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <Button onClick={onOpen}>Create team</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Create your team</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box>
                        <TeamForm/>
                    </Box>
                </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default CreateTeam
