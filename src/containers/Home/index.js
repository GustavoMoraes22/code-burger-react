import React from "react";

import HomeLogo from "../../assets/home-logo.svg";
import { CategoryCarousel, OffersCarousel } from "../../components";
import { Container, Homeimg } from "./styles";

export function Home() {
  return (
    <Container>
      <Homeimg src={HomeLogo} alt="logo da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  );
}
