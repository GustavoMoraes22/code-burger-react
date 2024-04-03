import React from "react";

import Cart from "../../assets/cart-header.svg";
import Person from "../../assets/person.svg";
import {
  Container,
  ContainerLeft,
  PagLink,
  ContainerRight,
  ContainerText,
  PagLinkExit
} from "./styles";

export function Header() {
  return (
    <Container>
      <ContainerLeft>
        <PagLink>Home</PagLink>
        <PagLink>Ver Produtos</PagLink>
      </ContainerLeft>

      <ContainerRight>
        <PagLink>
          <img src={Cart} alt="carriho" />
        </PagLink>
        <div className="line"></div>
        <PagLink>
          <img src={Person} alt="Perfil" />
        </PagLink>

        <ContainerText>
          <p>Ola,Gustavo</p>
          <PagLinkExit>Sair</PagLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  );
}
