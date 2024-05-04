import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { MyProject } from "./LucidityAssignment/MyProject";
import NiceModal from "@ebay/nice-modal-react";

function App() {
  return (
    <NiceModal.Provider>
      <ChakraProvider>
        <MyProject />
      </ChakraProvider>
    </NiceModal.Provider>
  );
}

export default App;
