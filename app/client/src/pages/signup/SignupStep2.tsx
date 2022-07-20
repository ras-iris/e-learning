import { useState } from "react";

import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";

import { FaKey, FaArrowRight } from "react-icons/fa";

const SignupStep2 = ({ nextStep }: { nextStep: any }) => {
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  return (
    <div className="exterior-step">
      <div className="divider"></div>
      <p className="tip">Entrer votre nouveau mot de passe.</p>
      <TextInput
        placeHolder="Nouveau mot de passe"
        errorMessage=""
        name="new-pwd"
        Icon={FaKey}
        handler={setNewPwd}
        value={newPwd}
        type="password"
      />
      <TextInput
        placeHolder="Confirmer le mot de passe"
        errorMessage=""
        name="confirm-pwd"
        Icon={FaKey}
        handler={setConfirmPwd}
        value={confirmPwd}
        type="password"
      />

      <Button
        onClick={nextStep}
        text="Inscription"
        Icon={FaArrowRight}
        iconPosition="right"
      />
    </div>
  );
};

export default SignupStep2;
