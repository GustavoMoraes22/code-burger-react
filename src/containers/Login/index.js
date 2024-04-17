import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import LoginImg from "../../assets/login.svg";
import Logo from "../../assets/logo.svg";
import { Button, ErrorMessage } from "../../components";
import { useUser } from "../../hooks/UserContext";
import apiCodeBurger from "../../services/api";
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink
} from "./styles";

export function Login() {
  const history = useHistory();

  const { putUserData } = useUser();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um e-mail valido ")
      .required("O e-mail é obrigatório"),
    password: Yup.string()
      .required("A senha é obrigatória")
      .min(6, "A senha deve ter pelo menos 6 digitos")
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async clientData => {
    try {
      const { data } = await toast.promise(
        apiCodeBurger.post("sessions", {
          email: clientData.email,
          password: clientData.password
        }),
        {
          pending: "Verificando seus dados",
          success: "Seja bem-vindo(a)",
          error: "Verifique  seu e-mail e senha 🤯"
        }
      );

      putUserData(data);

      setTimeout(() => {
        if (data.admin) {
          history.push("/pedidos");
        } else {
          history.push("/");
        }
      }, 1000);
    } catch (error) {}
  };
  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-img" />
      <ContainerItens>
        <img src={Logo} alt="logo" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Password</Label>
          <Input
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 70, marginBottom: 20 }}>
            Sign In
          </Button>
        </form>

        <SignInLink>
          Não possui conta ?{" "}
          <Link style={{ color: "white" }} to="/cadastro">
            Sign Up
          </Link>
        </SignInLink>
      </ContainerItens>
    </Container>
  );
}
