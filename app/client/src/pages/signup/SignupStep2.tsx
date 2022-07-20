import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";

import { FaKey, FaArrowRight } from "react-icons/fa";

import { SignUpInfoInterface } from "../../@types/userSignUpInfo";

type SignUpStep2Props = {
  signUpInfo: SignUpInfoInterface;
  handler: Function;
  handleSubmit: Function;
};

const SignupStep2 = ({
  signUpInfo,
  handler,
  handleSubmit,
}: SignUpStep2Props) => {
  return (
    <div className="exterior-step">
      <div className="divider"></div>
      <p className="tip">Entrer votre nouveau mot de passe.</p>
      <TextInput
        placeHolder="Nouveau mot de passe"
        errorMessage=""
        name="password"
        Icon={FaKey}
        handler={handler}
        value={signUpInfo.password}
        type="password"
      />
      <TextInput
        placeHolder="Confirmer le mot de passe"
        errorMessage=""
        name="passwordConfirmation"
        Icon={FaKey}
        handler={handler}
        value={signUpInfo.passwordConfirmation}
        type="password"
      />

      <Button
        onClick={handleSubmit}
        text="Inscription"
        Icon={FaArrowRight}
        iconPosition="right"
        type="submit"
      />
    </div>
  );
};

export default SignupStep2;
