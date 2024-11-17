import React, { useContext } from "react";
import { AuthContext, type IAuthContext } from "react-oauth2-code-pkce";

const LoginButton = () => {
  const { token, logIn, logOut } = useContext<IAuthContext>(AuthContext);

  return (
    <button
      className="px-20 py-1 bg-green-500 rounded-xl hover:bg-green-400 active:bg-green-600"
      onClick={() => (token ? logOut() : logIn())}
    >
      {token ? "Log Out" : "Log In"}
    </button>
  );
};

export default LoginButton;
