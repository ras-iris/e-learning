import React, { useState } from "react";

type UserLoginInfo = {
  username: string;
  password: string;
};

export type LoginContextType = {
  userLoginInfo: UserLoginInfo;
};

export const LoginAPIContext = React.createContext<any | null>(null);

const LoginAPI = ({ children }: any) => {
  const [userLoginInfo, setUserLoginInfo] = useState<UserLoginInfo>({
    username: "",
    password: "",
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setUserLoginInfo({ ...userLoginInfo, [name]: value });
  }
  return (
    <LoginAPIContext.Provider value={{ userLoginInfo, handleInputChange }}>
      {children}
    </LoginAPIContext.Provider>
  );
};

export default LoginAPI;
