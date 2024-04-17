import React from "react";
import { useHistory } from "react-router-dom";

import Cart from "../../assets/cart-header.svg";
import Person from "../../assets/person.svg";
import { useUser } from "../../hooks/UserContext";
import {
  Container,
  ContainerLeft,
  PagLink,
  ContainerRight,
  ContainerText,
  PagLinkExit
} from "./styles";

export function Header() {
  const { logout, userData } = useUser();
  const {
    push,
    location: { pathname }
  } = useHistory();

  const logoutUser = () => {
    logout();
    push("/login");
  };

  return (
    <Container>
      <ContainerLeft>
        <PagLink onClick={() => push("/")} isActive={pathname === "/"}>
          Home
        </PagLink>
        <PagLink
          onClick={() => push("/produtos")}
          isActive={pathname.includes("/produtos")}
        >
          Ver Produtos
        </PagLink>
      </ContainerLeft>

      <ContainerRight>
        <PagLink>
          <img src={Cart} alt="carriho" onClick={() => push("/carrinho")} />
        </PagLink>
        <div className="line"></div>
        <PagLink>
          <img src={Person} alt="Perfil" />
        </PagLink>

        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PagLinkExit onClick={logoutUser}>Sair</PagLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  );
}
