import LogoutIcon from "@mui/icons-material/Logout";
import PropTypes from "prop-types";
import React from "react";

import { useUser } from "../../hooks/UserContext";
import listLinks from "./menu-list";
import { Container, ItemContainer, Listlink } from "./styles";

export function SideMenuAdmin({ path }) {
  const { logout } = useUser();
  return (
    <Container>
      <hr></hr>
      {listLinks.map(item => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <Listlink to={item.link}>{item.label}</Listlink>
        </ItemContainer>
      ))}

      <hr></hr>

      <ItemContainer style={{ position: "fixed", bottom: "30px" }}>
        <LogoutIcon style={{ color: "white" }} />
        <Listlink to="/login" onClick={logout}>
          Sair
        </Listlink>
      </ItemContainer>
    </Container>
  );
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string
};
