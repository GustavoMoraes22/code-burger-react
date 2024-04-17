import styled from "styled-components";

import backgroundImage from "../../assets/background.svg";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url("${backgroundImage}");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterImage = styled.img`
  height: 70%;
`;

export const ContainerItens = styled.div`
  background: #373737;
  height: 70%;
  border-radius: 0 10px 10px 0;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-style: normal;
    font-size: 24px;
    font-weight: 500;
    line-height: 28.13px;
    text-align: center;
    color: #ffffff;
    margin-top: 10px;
  }
`;

export const Label = styled.p`
  font-style: normal;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  color: #ffffff;
  margin-top: ${props => (props.error ? "12px" : "28px")};
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px 0px #4a90e230;
  border: ${props => (props.error ? "2px solid #cc1717" : "none")};
  padding-left: 10px;
`;

export const SignInLink = styled.p`
  font-style: normal;
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  color: #ffffff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`;
