import { FormLabel, Input, Text, VStack } from "@chakra-ui/react"

function FileInput({ handleFileUpload, ...props }) {
    return (
        <VStack pos='relative' spacing='20' w='100%' h='400px' bg='rgba(19, 19, 19, 0.6)'
            outline='1px solid #ffde34' alignItems='center' borderRadius='5px' px='50px'>
            <Input
                pos='absolute'
                top='0'
                border='7px dashed'
                outline='none'
                opacity='0'
                bg='transparent'
                my='10px'
                h='94%'
                w='98%'
                type="file"
                name="file"
                accept='text/csv, text/plain'
                multiple
                {...props}
            />
            <FormLabel htmlFor='file' color='yellow.200' fontSize='6xl' flexWrap='nowrap'>{`🛫 Drag and Drop your file here 🛬`}</FormLabel>
            <Text fontSize='3xl' color='yellow.200'>Or click anywhere inside box to choose a file</Text>
        </VStack>
    )
}

export default FileInput