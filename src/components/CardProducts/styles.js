import styled from "styled-components";

export const Container = styled.div`
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  display: flex;
  gap: 12px;
  padding: 16px;
`;

export const ContainerName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 151px;
  height: 105px;
`;

export const Image = styled.img`
  border-radius: 10px;
  width: 150px;
`;

export const ProductName = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
`;

export const ProductPrice = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
`;
