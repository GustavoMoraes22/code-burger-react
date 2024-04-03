import PropTypes from "prop-types";
import React, { createContext, useContext, useEffect, useState } from "react";

// criando um context
const UserContext = createContext({});

// Aqui vamos colocar as informaçoes que serão disponibilizar para toda a aplicação
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const putUserData = async newInfo => {
    setUserData(newInfo);

    await localStorage.setItem("codeburger:userData", JSON.stringify(newInfo));
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem("codeburger:userData");

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo));
      }
    };

    loadUserData();
  }, []);

  return (
    <UserContext.Provider value={{ putUserData, userData }}>
      {children}
    </UserContext.Provider>
  );
};

// função para disponibilizar os dados
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("userUser must be used with UserContext");
  }

  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node
};
