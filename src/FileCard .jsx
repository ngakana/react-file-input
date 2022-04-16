import { Text, HStack, VStack, IconButton } from "@chakra-ui/react"

const DeleteIcon = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.42857 2.85837V0.714235C6.42857 0.524808 6.50383 0.34314 6.63778 0.209195C6.77174 0.0752496 6.95342 0 7.14286 0H12.8571C13.0466 0 13.2283 0.0752496 13.3622 0.209195C13.4962 0.34314 13.5714 0.524808 13.5714 0.714235V2.85837H19.2857C19.4752 2.85837 19.6568 2.93362 19.7908 3.06756C19.9247 3.20151 20 3.38317 20 3.5726C20 3.76203 19.9247 3.9437 19.7908 4.07764C19.6568 4.21159 19.4752 4.28684 19.2857 4.28684H0.714286C0.524845 4.28684 0.343164 4.21159 0.209209 4.07764C0.0752549 3.9437 0 3.76203 0 3.5726C0 3.38317 0.0752549 3.20151 0.209209 3.06756C0.343164 2.93362 0.524845 2.85837 0.714286 2.85837H6.42857ZM7.85714 2.85837H12.1429V1.4299H7.85714V2.85837ZM2.85714 20C2.6677 20 2.48602 19.9248 2.35207 19.7908C2.21811 19.6569 2.14286 19.4752 2.14286 19.2858V4.28684H17.8571V19.2858C17.8571 19.4752 17.7819 19.6569 17.6479 19.7908C17.514 19.9248 17.3323 20 17.1429 20H2.85714ZM7.85714 15.7146C8.04658 15.7146 8.22826 15.6393 8.36222 15.5054C8.49617 15.3715 8.57143 15.1898 8.57143 15.0004V7.85801C8.57143 7.66858 8.49617 7.48691 8.36222 7.35297C8.22826 7.21902 8.04658 7.14377 7.85714 7.14377C7.6677 7.14377 7.48602 7.21902 7.35207 7.35297C7.21811 7.48691 7.14286 7.66858 7.14286 7.85801V15.0004C7.14286 15.1898 7.21811 15.3715 7.35207 15.5054C7.48602 15.6393 7.6677 15.7146 7.85714 15.7146ZM12.1429 15.7146C12.3323 15.7146 12.514 15.6393 12.6479 15.5054C12.7819 15.3715 12.8571 15.1898 12.8571 15.0004V7.85801C12.8571 7.66858 12.7819 7.48691 12.6479 7.35297C12.514 7.21902 12.3323 7.14377 12.1429 7.14377C11.9534 7.14377 11.7717 7.21902 11.6378 7.35297C11.5038 7.48691 11.4286 7.66858 11.4286 7.85801V15.0004C11.4286 15.1898 11.5038 15.3715 11.6378 15.5054C11.7717 15.6393 11.9534 15.7146 12.1429 15.7146Z" fill="#D90101" />
        </svg>
    );
}

const FileCard = ({ filename, filesize, formik }) => {

    const handleRemoveFile = () => {
        let remainingFiles = formik.values.files.filter(file => file.name !== filename);
        formik.setFieldValue('files', remainingFiles);
    }

    if (filesize >= 1000000) {
        filesize = `${Math.round(filesize / 1048576)}MB`
    } else {
        let fsize = Math.fround(filesize / 1024)
        filesize = `${fsize.toFixed(2)}KB`
    }

    return (
        filename ?
            <VStack w="48%">
                <HStack w='full' alignSelf="flex-start" alignItems="center" justifyContent="space-between" border="1px solid #ffde34" py='1' px="4" borderRadius='md'>
                    <Text w='full' fontWeight='normal' fontSize="2xl" color="white">{`${filename} [${filesize}]`}</Text>
                    <IconButton aria-label="delete file" size="xs" bg="transparent" display="flex" alignItems="center"
                        icon={<DeleteIcon />}
                        onClick={handleRemoveFile}
                    />
                </HStack>
            </VStack>
            :
            null
    )
}

export default FileCard;