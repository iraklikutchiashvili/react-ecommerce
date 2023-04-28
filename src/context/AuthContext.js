import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [auth, setAuth] = useState({
    isAuth: false,
    avatar: "",
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;