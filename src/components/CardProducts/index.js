import PropTypes from "prop-types";
import React from "react";

import { useCart } from "../../hooks/CartContext";
import { Button } from "../Button";
import {
  Container,
  Image,
  ProductName,
  ProductPrice,
  ContainerName
} from "./styles";

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();

  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />

      <div>
        <ContainerName>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.formatedPrice}</ProductPrice>
        </ContainerName>
        <Button onClick={() => putProductInCart(product)}>Adicionar</Button>
      </div>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object
};
