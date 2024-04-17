import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import paths from "../constants/paths";
import { Home, Login, Products, Register, Cart, Admin } from "../containers";
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

        <PrivateRoute isAdmin component={Admin} path={paths.Order} />
        <PrivateRoute isAdmin component={Admin} path={paths.Products} />
        <PrivateRoute isAdmin component={Admin} path={paths.NewProducts} />
        <PrivateRoute isAdmin component={Admin} path={paths.EditProducts} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
