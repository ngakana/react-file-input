import { HStack } from "@chakra-ui/react"

function ProgressBar({ status }) {
    return (
        status.isUploading ?
            <HStack pos="relative" w="full" h="8px" bg="transparent" border="1px solid #ffde34" borderRadius="4px">
                <HStack pos="relative" bg="#ffde34" top="0%" left="0" w={`${status.progress}%`} h="5px">
                </HStack>
            </HStack>
            :
            null
    )
}

export default ProgressBar