import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { useCart } from "../../hooks/CartContext";
import api from "../../services/api";
import formatCurrency from "../../utils/formatCurrency";
import { Button } from "../Button";
import { Container } from "./styles";

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(5);

  const { cartProducts } = useCart();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);
    setFinalPrice(sumAllItems);
  }, [cartProducts]);

  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity };
    });

    try {
      await toast.promise(api.post("orders", { products: order }), {
        pending: "Realizando o seu pedido",
        success: "Pedido realizado com sucesso",
        error: "Falha ao realizar seu pedido, tente novamente"
      });
    } catch {}
  };

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">
            {finalPrice === 0 ? "R$ 0,00" : formatCurrency(deliveryTax)}
          </p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>
            {finalPrice === 0
              ? "R$ 0,00"
              : formatCurrency(finalPrice + deliveryTax)}
          </p>
        </div>
      </Container>
      <Button style={{ width: "100%", marginTop: 30 }} onClick={submitOrder}>
        Finalizar pedido
      </Button>
    </div>
  );
}
