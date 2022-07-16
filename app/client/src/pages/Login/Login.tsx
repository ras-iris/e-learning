// Import styles and decorations
import "../../assets/scss/exterior.scss";
import decoration from "../../assets/images/login-decoration.svg";

// Import Icons
import { FaUser } from "react-icons/fa";
import { HiOutlineKey } from "react-icons/hi";

// Import Components
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput/TextInput";
import FormHeader from "../../components/FormHeader/FormHeader";
import Button from "../../components/Button/Button";

// Import logic
import useLoginAPI from "./useLoginAPI";

const Login = () => {
  const { userLoginInfo, handleSubmit, handleInputChange } = useLoginAPI();
  return (
    <div className="exterior-page login-page">
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
          <form onSubmit={(e) => handleSubmit(e)}>
            <FormHeader formHeading="Connexion" formSubHeading="" />
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
            <Button
              text="Se connecter"
              onClick={null}
              type="submit"
              className=""
            />
          </form>
          <div className="divider"></div>
          <p>Vous n'avez pas de compte ?</p>
          <Button
            text="S'inscrire"
            onClick={() => console.log("inscription")}
            type="button"
            className="sec"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
