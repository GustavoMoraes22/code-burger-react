import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }
`;

export const Categoryimg = styled.img``;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-style: normal;
    font-size: 18px;
    font-weight: bold;
    line-height: 26.4px;

    color: rgba(66, 66, 66, 1);
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  margin-top: 16px;
  background-color: #9758a6;
  box-shadow: 0px 20px 40px 0px rgba(151, 88, 166, 0.24);

  box-shadow: 0px 5px 10px 0px rgba(151, 88, 166, 0.22);

  border-radius: 8px;
  height: 50px;
  border: none;

  font-size: 18px;
  font-weight: bold;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
