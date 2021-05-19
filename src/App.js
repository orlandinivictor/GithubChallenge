import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AppContextProvider } from "./contexts/AppContext";

import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
