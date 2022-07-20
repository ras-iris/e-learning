import Button from "../../components/Button/Button";
import { FaEnvelope, FaUserAlt, FaGoogle, FaArrowRight } from "react-icons/fa";
import TextInput from "../../components/TextInput/TextInput";
import { useState } from "react";

const SignupStep1 = ({ nextStep }: { nextStep: any }) => {
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  return (
    <div className="exterior-step">
      <Button
        text="Continuer avec Google"
        Icon={FaGoogle}
        onClick={null}
        variant="purple"
      />

      <div className="divider"></div>
      <p>Information sur vous</p>
      <TextInput
        placeHolder="Nom"
        errorMessage=""
        name="user-last-name"
        Icon={FaUserAlt}
        handler={setLastName}
        value={lastName}
        type="text"
      />
      <TextInput
        placeHolder="Prénom"
        errorMessage=""
        name="user-first-name"
        Icon={FaUserAlt}
        handler={setFirstName}
        value={firstName}
        type="text"
      />
      <TextInput
        placeHolder="Adresse email"
        errorMessage="Compte non trouvé"
        name="email"
        Icon={FaEnvelope}
        handler={setEmail}
        value={email}
        type="email"
      />
      <Button
        text="Créer un mot de passe"
        onClick={nextStep}
        Icon={FaArrowRight}
        iconPosition="right"
      />
    </div>
  );
};

export default SignupStep1;
