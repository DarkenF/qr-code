import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import {Nikita} from "./pages/Nikita";
import {Karina} from "./pages/Karina";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/karina" element={<Karina/>} />
        <Route exact path="/" element={<Nikita/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
