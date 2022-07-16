import "../../assets/scss/exterior.scss";
import decoration from "../../assets/images/login-decoration.svg";

// Import Components
import TextInput from "../../components/TextInput/TextInput";
import FormHeader from "../../components/FormHeader/FormHeader";
import Button from "../../components/Button/Button";
import { FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const ResetPwd = () => {
  const [email, setEmail] = useState("")

  return (
    <div className="exterior-page reset-page">
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
          <form onSubmit={(e) => e.preventDefault()}>
            <FormHeader formHeading="Récupération de mot de passe" formSubHeading="" />
            <p className="tip">Entrer votre adresse email et nous allons vous envoyer <br /> les instructions pour renouveller votre mot de passe.</p>
            <TextInput
              label="Nom d'utilisateur"
              placeHolder="Adresse email"
              errorMessage="Adresse email non trouvé"
              name="email"
              InputIcon={FaEnvelope}
              handler={setEmail}
              value={email}
              type="email"
            />
          </form>
          <Button
            text="Envoyer"
            onClick={() => console.log("inscription")}
            type="button"
            className="submit"
          />
        </div>
      </div>
    </div>
  )
}

export default ResetPwd