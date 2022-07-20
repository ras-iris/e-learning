import React, { useState } from "react";

// Import user login information types
import { userLoginInfoType } from "../../@types/userLoginInfo";

const useLoginAPI = () => {
  const [userLoginInfo, setUserLoginInfo] = useState<userLoginInfoType>({
    username: "",
    password: "",
  });

  // handleSubmit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("USERNAME:", userLoginInfo.username);
    console.log("PASSWORD: ", userLoginInfo.password);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserLoginInfo({ ...userLoginInfo, [name]: value });
  };

  return { userLoginInfo, handleSubmit, handleInputChange };
};

export default useLoginAPI;
