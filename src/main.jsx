import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/franchise-progect-E-PHARMACY">
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    <ToastContainer autoClose={1500} />
    {/* </PersistGate> */}
    {/* </Provider> */}
  </BrowserRouter>
);
