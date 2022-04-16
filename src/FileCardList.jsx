import { Text, VStack, Flex } from "@chakra-ui/react";

import FileCard from "./FileCard ";

function FileCardList({ formik }) {
    return (
        <VStack w='full' alignSelf="flex-start" alignItems="start" justifyContent="center" py='1' borderRadius='md'>
            <Text w='full' fontSize="4xl" color="white">Selected files:</Text>
            <Flex w='90%' flexWrap='wrap' gap='5'>
                {
                    formik.values.files.length !== 0 ?
                        formik.values.files.map((file, index) => (
                            <FileCard key={index}
                                filename={file.name}
                                filesize={file.size}
                                formik={formik}
                            />
                        ))
                        :
                        <Text w='full' fontWeight='light' fontSize="xl" color="white">No files chosen. Add files and we'll list them here.</Text>
                }
            </Flex>
        </VStack>
    );
}

export default FileCardList