import Button from "../../components/Button/Button";
import { FaEnvelope } from "react-icons/fa";
import TextInput from "../../components/TextInput/TextInput";
import { useState } from "react";

const ResetStep1 = ({ nextStep }: { nextStep: any }) => {
  const [email, setEmail] = useState("");
  return (
    <div className="exterior-step">
      <p className="tip">
        Pour renouveler votre mot de passe cliquer sur le boutton suivant
      </p>
      <Button text="Renouveler" onClick={nextStep} type="button" />
    </div>
  );
};

export default ResetStep1;
