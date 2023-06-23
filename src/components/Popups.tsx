// import { RiCameraLine } from 'react-icons/ri'


import {
    Modal,
    useDisclosure,
    ModalOverlay,
    ModalContent,
    ModalBody,
  } from '@chakra-ui/react'

import React from 'react'

const Attachments: React.FC = () => {

  const { isOpen, onClose } = useDisclosure()
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalBody>
        {/* Three icons for Camera, Video camera and File upload */}
      </ModalBody>
    </ModalContent>
  </Modal>

    // <Flex position="fixed" zIndex="100">
    //     <IconButton aria-label='Camera' icon={ <RiCameraLine />}>

    //     </IconButton>
    //     masdmasmdamsd
    // </Flex>
  )
}

export default Attachments