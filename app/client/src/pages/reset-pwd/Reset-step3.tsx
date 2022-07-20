import Button from "../../components/Button/Button";
import { FaKey } from "react-icons/fa";
import TextInput from "../../components/TextInput/TextInput";
import { useState } from "react";

const ResetStep3 = ({ nextStep }: { nextStep: any }) => {
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  return (
    <div className="exterior-step">
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
      <Button text="Confirmer" onClick={nextStep} type="button" />
    </div>
  );
};

export default ResetStep3;
