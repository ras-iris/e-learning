import React, { useState } from "react";
import { SignUpInfoInterface } from "../../@types/userSignUpInfo";

const useSignupAPI = () => {
  const [signUpInfo, setSignUpInfo] = useState<SignUpInfoInterface>({
    fname: "",
    lname: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  // hangle SignUp form input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignUpInfo({ ...signUpInfo, [name]: value });
  };

  // handle SignUp from submition
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(signUpInfo);
  };

  return { signUpInfo, handleInputChange, handleSubmit };
};

export default useSignupAPI;
