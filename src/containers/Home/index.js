import React from "react";

import HomeLogo from "../../assets/home-logo.svg";
import { CategoryCarousel, Header, OffersCarousel } from "../../components";
import { Container, Homeimg } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Homeimg src={HomeLogo} alt="logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  );
}
