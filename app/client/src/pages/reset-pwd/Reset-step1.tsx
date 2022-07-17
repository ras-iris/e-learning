import Button from "../../components/Button/Button";
import { FaEnvelope } from "react-icons/fa";
import TextInput from "../../components/TextInput/TextInput";
import { useState } from "react";

const ResetStep1 = ({ nextStep }: { nextStep: any }) => {
  const [email, setEmail] = useState("")
  return (
    <div className="exterior-step">
      <p className="tip">Entrez l'adresse email de votre compte.</p>
      <TextInput
        label="Nom d'utilisateur"
        placeHolder="Adresse email"
        errorMessage="Compte non trouvé"
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