// Import styles and decorations
import "../../assets/scss/exterior.scss";

// Import Icons
import { FaKey, FaUser, FaGoogle } from "react-icons/fa";

// Import Components
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../components/TextInput/TextInput";
import FormHeader from "../../components/FormHeader/FormHeader";
import Button from "../../components/Button/Button";
import HeroTitle from "../../components/HeroTitle/HeroTitle";

// Import logic
import useLoginAPI from "./useLoginAPI";

const Login = () => {
  const nav = useNavigate();
  const { userLoginInfo, handleSubmit, handleInputChange } = useLoginAPI();
  return (
    <div className="exterior-page login-page">
      <HeroTitle />
      <div className="right-side">
        <div className="content">
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <FormHeader formHeading="Connexion" />
            <Button
              text="Se connecter avec Google"
              onClick={null}
              variant="purple"
              Icon={FaGoogle}
            />
            <div className="divider"></div>
            <TextInput
              placeHolder="Nom d'utilisateur"
              errorMessage="Le nom d'utilisateur saisie n'existe pas"
              name="username"
              Icon={FaUser}
              handler={handleInputChange}
              value={userLoginInfo.username}
              type="text"
            />
            <TextInput
              placeHolder="Mot de passe"
              errorMessage="Le mot de passe est incorrecte"
              name="password"
              Icon={FaKey}
              handler={handleInputChange}
              value={userLoginInfo.password}
              type="password"
            />
            <div className="pwd-forget-container">
              <Link to="/reset-password" className="pwd-forget">
                Mot de passe oublié ?
              </Link>
            </div>
            <Button text="Se connecter" onClick={null} type="submit" />
          </form>
          <div className="divider"></div>
          <p>Vous n'avez pas de compte ?</p>
          <Button
            text="S'inscrire"
            onClick={() => nav("/signup")}
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
