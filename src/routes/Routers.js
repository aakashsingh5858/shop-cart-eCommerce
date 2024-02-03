import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./RouterConstant.js";

const Home = lazy(() => import("../home/Home.js"));

const Routers = () => {
  return (
    <Suspense fallback={"loading..."}>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
