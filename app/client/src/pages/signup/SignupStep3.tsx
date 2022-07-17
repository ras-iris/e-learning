import Button from "../../components/Button/Button";
import { FaKey } from "react-icons/fa";
import { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";

const SignupStep3 = () => {
  const [newPwd, setNewPwd] = useState("")
  const [confirmPwd, setConfirmPwd] = useState("")
  return (
    <div className="exterior-step">
      <p className="tip">Entrer votre nouveau mot de passe.</p>
      <TextInput
        label="Nouveau mot de passe"
        placeHolder="Nouveau mot de passe"
        errorMessage=""
        name="new-pwd"
        InputIcon={FaKey}
        handler={setNewPwd}
        value={newPwd}
        type="password"
      />
      <TextInput
        label="Confirmer le mot de passe"
        placeHolder="Confirmer le mot de passe"
        errorMessage=""
        name="confirm-pwd"
        InputIcon={FaKey}
        handler={setConfirmPwd}
        value={confirmPwd}
        type="password"
      />

      <Button
        className="submit"
        onClick={null}
        text="Terminer"
        type="button"
      />
    </div>
  )
}

export default SignupStep3