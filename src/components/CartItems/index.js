import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

import emptyCar from "../../assets/empty-cart.png";
import { useCart } from "../../hooks/CartContext";
import formatCurrency from "../../utils/formatCurrency";
import { Container, Header, Body, EmptyCart } from "./styles";

export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts, deleteProducts } =
    useCart();

  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p style={{ paddingLeft: 30 }}>Total</p>
      </Header>

      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p style={{ width: 140 }}>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>

            <div className="quantity-container">
              <button onClick={() => decreaseProducts(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>

            <div className="total-container">
              <p>{formatCurrency(product.quantity * product.price)}</p>
              <FaRegTrashAlt
                style={{ cursor: "pointer" }}
                onClick={() => deleteProducts(product.id)}
              />
            </div>
          </Body>
        ))
      ) : (
        <EmptyCart>
          <img src={emptyCar} alt="Carrinho de compras vazio" />
        </EmptyCart>
      )}
    </Container>
  );
}
