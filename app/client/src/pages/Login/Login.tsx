import React, { useState } from "react";

import "../../assets/scss/login.scss";
import { Link } from "react-router-dom";
import decoration from "../../assets/images/login-decoration.svg";

import { FaUser } from "react-icons/fa";
import { HiOutlineKey } from "react-icons/hi";
import TextInput from "../../components/TextInput/TextInput";

type userLoginInfoType = {
  username: string;
  password: string;
};

const Login = () => {
  const [userLoginInfo, setUserLoginInfo] = useState<userLoginInfoType>({
    username: "",
    password: "",
  });

  // put logic in different file
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("USERNAME = ", userLoginInfo.username);
    console.log("PASSWORD = ", userLoginInfo.password);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserLoginInfo({ ...userLoginInfo, [name]: value });
  };

  return (
    <div className="login-page">
      <div className="left-side">
        <h1>
          <div>Tech JS</div>
          E-Learning
        </h1>
        <div className="decoration">
          <img src={decoration} alt="" />
        </div>
      </div>
      <div className="right-side">
        <div className="content">
          <h3>E-Learning | Connexion</h3>
          <form onSubmit={(e) => handleSubmit(e)}>
            <TextInput
              label="Nom d'utilisateur"
              placeHolder="Nom d'utilisateur"
              errorMessage="Le nom d'utilisateur saisie n'existe pas"
              name="username"
              InputIcon={FaUser}
              handler={handleInputChange}
              value={userLoginInfo.username}
              type="text"
            />
            <TextInput
              label="Mot de passe"
              placeHolder="Mot de passe"
              errorMessage="Le mot de passe est incorrecte"
              name="password"
              InputIcon={HiOutlineKey}
              handler={handleInputChange}
              value={userLoginInfo.password}
              type="password"
            />
            <div className="pwd-forget-container">
              <Link to="/reset-password" className="pwd-forget">
                Mot de passe oublié ?
              </Link>
            </div>
            <button className="btn">Se connecter</button>
          </form>
          <div className="divider"></div>
          <p>Vous n'avez pas de compte ?</p>
          <button className="btn sec">S'inscrire</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
