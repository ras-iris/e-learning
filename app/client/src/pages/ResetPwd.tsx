import decoration from "../assets/images/login-decoration.svg";
// Import Icons
import { MdOutlineMailOutline } from "react-icons/md"
import { HiOutlineKey } from "react-icons/hi";

// Import Components
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput/TextInput";
import FormHeader from "../components/FormHeader/FormHeader";
import Button from "../components/Button/Button";

// Import logic
import useLoginAPI from "./Login/useLoginAPI";

import StepWizard from "react-step-wizard";

const ResetPwd = () => {
  const { userLoginInfo, handleSubmit, handleInputChange } = useLoginAPI();
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
          <form onSubmit={(e) => handleSubmit(e)}>
            <FormHeader formHeading="Connexion" formSubHeading="" />
            <TextInput
              label="E-mail"
              placeHolder="Adresse email"
              errorMessage="L'adresse saisie n'existe pas"
              name="email"
              InputIcon={MdOutlineMailOutline}
              handler={handleInputChange}
              value={userLoginInfo.username}
              type="text"
            />
            <TextInput
              label="Mot de passe"
              placeHolder="Nouveau mot de passe"
              errorMessage="Le mot de passe est trop court"
              name="password"
              InputIcon={HiOutlineKey}
              handler={handleInputChange}
              value={userLoginInfo.password}
              type="password"
            />
            <TextInput
              label="Mot de passe"
              placeHolder="Confirmer mot de passe"
              errorMessage="Le mot de passe est incorrecte"
              name="password"
              InputIcon={HiOutlineKey}
              handler={handleInputChange}
              value={userLoginInfo.password}
              type="password"
            />
           <Link to="../confirmation"> <Button
              text="Continue"
              onClick={null}
              type="submit"
              className=""
            /></Link>
          </form>
          <div className="divider"></div>
          <Link to="../login"><Button
            text="Se connecter"
            onClick={() => null }
            type="button"
            className="sec"
          /></Link>

        </div>
      </div>
    </div>
  )
}

export default ResetPwd