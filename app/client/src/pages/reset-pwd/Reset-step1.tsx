import Button from "../../components/Button/Button";
import { FaEnvelope } from "react-icons/fa";
import TextInput from "../../components/TextInput/TextInput";
import { useState } from "react";

const ResetStep1 = ({ nextStep }: { nextStep: any }) => {
  const [email, setEmail] = useState("")
  return (
    <div className="exterior-step">
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
      <Button
        text="Envoyer"
        onClick={nextStep}
        type="button"
        className="submit"
      />
    </div>
  )
}

export default ResetStep1