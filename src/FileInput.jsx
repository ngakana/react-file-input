import { useState } from "react";
import { FormLabel, Input, Text, VStack, Spinner } from "@chakra-ui/react";
import ProgressBar from "./ProgressBar";

function FileInput({ handleFileUpload, formik, ...props }) {

    const [uploadStatus, setUploadStatus] = useState({
        isUploading: false,
        progress: 0
    })

    const [uploadedFile, setUploadedFile] = useState(null);

    const handleOnDrop = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (e.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            for (let i = 0; i < e.dataTransfer.items.length; i++) {
                let item = e.dataTransfer.items[i];
                // If dropped items aren't csv or txt files, reject them
                if (item.kind === 'file' && (item.type === 'text/csv' || item.type === 'text/plain')) {
                    let inputFile = item.getAsFile();
                    setUploadedFile(inputFile);

                    let addFile = false;
                    let isDuplicate = formik.values.files.filter(f => f.name === inputFile.name).length !== 0;
                    if (!isDuplicate) {
                        addFile = true;
                    } else {
                        return;
                    }

                    let fileReader = new FileReader();
                    if (addFile) {
                        fileReader.readAsText(inputFile);

                        fileReader.onload = () => {
                            setUploadStatus({ isUploading: false, progress: 0 });
                            formik.setFieldValue('files', [...formik.values.files, inputFile]);
                        }
                        fileReader.onloadstart = () => {
                            setUploadStatus({ isUploading: true, progress: 0 });
                        }
                        fileReader.onprogress = (e) => {
                            let prog = Math.round(100 * e.loaded / e.total);
                            setUploadStatus(prevState => ({ ...prevState, "progress": prog }));
                        }
                    }
                }
            }
        } else {
            // Use DataTransfer interface to access the file(s)
            for (let i = 0; i < e.dataTransfer.files.length; i++) {
                console.log('... file[' + i + '].name = ' + e.dataTransfer.files[i].name);
            }
        }

        removeDragData(e);
    }

    const removeDragData = (e) => {

        if (e.dataTransfer.items) {
            // Use DataTransferItemList interface to remove the drag data
            e.dataTransfer.items.clear();
        } else {
            // Use DataTransfer interface to remove the drag data
            e.dataTransfer.clearData();
        }
    }

    const handleOnDragOver = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }

    return (
        uploadStatus.isUploading ?
            <VStack pos='relative' width='full' h='400px' bg='rgba(19, 19, 19, 0.6)'
                outline='5px solid #ffde34' alignItems='center' justifyContent="space-evenly" borderRadius='5px' px='50px'>
                <Text w="full" fontSize='6xl' color='yellow.200' textAlign="center" px='3'>{`Uploading 📄${uploadedFile && uploadedFile.name}... `}</Text>
                <Spinner size="xl" speed="1.9s" color="#ffde34" />
                <ProgressBar status={uploadStatus} />
            </VStack>
            :
            <VStack pos='relative' w='100%' h='400px' bg='rgba(19, 19, 19, 0.6)'
                outline='5px solid #ffde34' alignItems='center' justifyContent="space-evenly" borderRadius='5px' px='50px'>
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
                    onDrop={(e) => handleOnDrop(e)}
                    onDragOver={(e) => handleOnDragOver(e)}
                    {...props}
                />
                <FormLabel htmlFor='file' color='yellow.200' fontSize='6xl' textAlign="center">Drag and Drop your file here</FormLabel>
                <Text fontSize='3xl' color='yellow.200' textAlign="center">Or click anywhere inside box to choose a file</Text>
            </VStack>
    )
}

export default FileInput