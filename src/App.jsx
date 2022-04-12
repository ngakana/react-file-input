import { Formik, Form, Field } from "formik";
import { ChakraProvider, Text, VStack } from "@chakra-ui/react";
import FileInput from "./FileInput";

function App() {
  return (
    <ChakraProvider>
      <VStack w="100vw" h="100vh" bg="gray.800">
        <Text as='i' font='heading' fontSize="7xl" color="white" py='9'>Send the AI overlords some data in CSV format</Text>
        <Formik>
          <Form>
            <Field component={FileInput} />
          </Form>
        </Formik>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
