import React, { Suspense } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Http404 } from "./pages";
import { Browser } from "./constants";
import {
  Cart,
  Orders,
  ItemDetail,
  CheckOut,
  ProtectedRoutes,
  ItemSection,
  NavBar,
} from "./components";

const AirLap = React.lazy(() => import("./pages/Airlap"));
const Login = React.lazy(() => import("./pages/Login"));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={Browser.ROOT}
          exact
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Login />{" "}
            </Suspense>
          }
        />
        <Route
          path={Browser.LAPHUB}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <AirLap />
            </Suspense>
          }
        />
        <Route path={Browser.ROOT} element={<ProtectedRoutes />}>
          <Route path={Browser.CART} element={<Cart />} />
          <Route path={Browser.ORDERS} element={<Orders />} />
          <Route path={Browser.ITEMS} element={<ItemDetail />} />
          <Route path={Browser.CHECKOUT} element={<CheckOut />} />
        </Route>
        <Route path={Browser.HTTP_404} element={<Http404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
