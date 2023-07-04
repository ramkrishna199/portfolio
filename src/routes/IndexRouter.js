import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexLayout from "../layout/Index";
import Home from "../pages/Home";

const IndexRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<IndexLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default IndexRouter;
