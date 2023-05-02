import React from "react";
import { isBrowser } from "react-device-detect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Login from "./page/Login";
import Pop from "./page/Pop";
import NotFound from "./page/NotFound";
import Pc from "./page/Pc";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {isBrowser ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Pc />} />
            <Route path="/pop" element={<Pc />} />
            <Route path="/*" element={<Pc />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/pop" element={<Pop />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
