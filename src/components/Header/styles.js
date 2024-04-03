import styled from "styled-components";

export const Container = styled.div`
  height: 72px;
  background: #ffffff;
  box-shadow: 2px 3px 5px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`;

export const PagLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #555555;
  font-size: 16px;
  line-height: 19px;
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .line {
    height: 40px;
    border-right: 0.5px solid #bababa;
  }
`;

export const ContainerText = styled.div`
  .p {
    font-style: normal;
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;

    color: #555555;
  }
`;

export const PagLinkExit = styled.a`
  font-style: normal;
  font-size: 14px;
  font-weight: bold;
  line-height: 16.41px;
  text-align: left;
  color: rgba(151, 88, 166, 1);
  cursor: pointer;
`;
