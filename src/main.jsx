import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "../src/app/store.js";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>

);
