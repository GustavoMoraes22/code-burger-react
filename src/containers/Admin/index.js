import PropTypes from "prop-types";
import React from "react";

import { SideMenuAdmin } from "../../components/SideMenuAdmin";
import paths from "../../constants/paths";
import EditProduct from "./EditProduct";
import ListProducts from "./ListProducts";
import NewProduct from "./NewProduct";
import Orders from "./Orders";
import { Container, ContainerItems } from "./styles";

export function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />
      <ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.Products && <ListProducts />}
        {path === paths.NewProducts && <NewProduct />}
        {path === paths.EditProducts && <EditProduct />}
      </ContainerItems>
    </Container>
  );
}

Admin.propTypes = {
  match: PropTypes.object
};
