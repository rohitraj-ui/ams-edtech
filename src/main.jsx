import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/DataContext.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';  
import './fontawesome-fix.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import "./styles/custom-bootstrap.scss";
// import 'remixicon/fonts/remixicon.css';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <ScrollToTop />
        <App />
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);
