import React from 'react'
import {HStack, PinInput, PinInputField } from '@chakra-ui/react'
const Pin = () => {
  return (
    <div>pin:
        <HStack>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
    </div>
  )
}

export default Pin