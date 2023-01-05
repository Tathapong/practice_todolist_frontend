import { createContext, useState } from "react";
import { useContext, useEffect } from "react";
const AuthContext = createContext();

function AuthContextProvider(props) {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) setIsLogged(true);
  });

  return <AuthContext.Provider value={{ isLogged, setIsLogged }}>{props.children}</AuthContext.Provider>;
}

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthContextProvider, useAuth };
