import Button from "../../components/Button/Button";
import { FaKey } from "react-icons/fa";
import TextInput from "../../components/TextInput/TextInput";
import { useState } from "react";

const ResetStep2 = ({ nextStep }: { nextStep: any }) => {
  const [digitCode, setDigitCode] = useState("");
  return (
    <div className="exterior-step">
      <p className="tip">
        Saisissez le code qu'on a envoyer à l'adresse user*******@*****.com
      </p>
      <TextInput
        placeHolder="XXXXXXXX"
        errorMessage=""
        name="digit-code"
        Icon={FaKey}
        handler={setDigitCode}
        value={digitCode}
        type="text"
      />
      <Button text="Confirmer" onClick={nextStep} type="button" />
    </div>
  );
};

export default ResetStep2;
