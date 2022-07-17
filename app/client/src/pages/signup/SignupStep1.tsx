import Button from "../../components/Button/Button";
import { FaEnvelope, FaUserAlt } from "react-icons/fa";
import TextInput from "../../components/TextInput/TextInput";
import { useState } from "react";

const SignupStep1 = ({ nextStep }: { nextStep: any }) => {
  const [email, setEmail] = useState("")
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  return (
    <div className="exterior-step">
      {/* <Button
       text="S'inscrire avec Google"
       type="button"
       className="submit purple"
       onClick={null}
       icon={ <FaGoogle /> }
      /> 

      <div className="divider"></div>*/}

      <h4>Informations sur vous</h4>

      <TextInput
        label="Nom"
        placeHolder="Nom"
        errorMessage=""
        name="user-last-name"
        InputIcon={FaUserAlt}
        handler={setLastName}
        value={lastName}
        type="text"
      />
      <TextInput
        label="Nom"
        placeHolder="Prénom"
        errorMessage=""
        name="user-first-name"
        InputIcon={FaUserAlt}
        handler={setFirstName}
        value={firstName}
        type="text"
      />
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
        text="Choisir une filière"
        onClick={nextStep}
        type="button"
        className="submit"
      />
    </div>
  )
}

export default SignupStep1