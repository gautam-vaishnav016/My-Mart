import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import ProductList from "./Components/ProductList";
import { Routes, Route } from "react-router-dom";
import Details from "./Components/Details";
import Error from "./Components/Error";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen  bg-zinc-300 flex flex-col overflow-x-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/details" element={<Details />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
