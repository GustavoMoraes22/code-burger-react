import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { Home, Login, Products, Register, Cart } from "../containers";
import PrivateRoute from "./private-route";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute component={Products} path="/produtos" />
        <PrivateRoute component={Cart} path="/carrinho" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
