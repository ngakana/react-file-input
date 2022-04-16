import { Formik, Form, Field, useFormik } from "formik";
import { ChakraProvider, Text, VStack } from "@chakra-ui/react";

import FileInput from "./FileInput";
import FileCardList from "./FileCardList";

function App() {

  const formik = useFormik({
    initialValues: {
      files: []
    }
  });

  return (
    <ChakraProvider>
      <VStack max-w="100vw" min-h="100vh" bg="gray.800" gap='5' px='20' pb='40'>
        <Text as='i' fontWeight='bold' font='heading' fontSize="6xl" color="white" py='20'>Send the AI overlords some data in CSV format</Text>
        <Formik>
          <Form>
            <Field
              formik={formik}
              component={FileInput}
            />
          </Form>
        </Formik>
        <FileCardList formik={formik} />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
