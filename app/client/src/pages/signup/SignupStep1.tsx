import Button from "../../components/Button/Button";
import { FaEnvelope, FaUserAlt, FaGoogle, FaArrowRight } from "react-icons/fa";
import TextInput from "../../components/TextInput/TextInput";
import { SignUpInfoInterface } from "../../@types/userSignUpInfo";

type SignUpStep1Props = {
  nextStep: any;
  signUpInfo: SignUpInfoInterface;
  handler: Function;
};

const SignupStep1 = ({ nextStep, signUpInfo, handler }: SignUpStep1Props) => {
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
        name="lname"
        Icon={FaUserAlt}
        handler={handler}
        value={signUpInfo.lname}
        type="text"
        required={true}
      />
      <TextInput
        placeHolder="Prénom"
        errorMessage=""
        name="fname"
        Icon={FaUserAlt}
        handler={handler}
        value={signUpInfo.fname}
        type="text"
        required={true}
      />
      <TextInput
        placeHolder="Adresse email"
        errorMessage="Compte non trouvé"
        name="email"
        Icon={FaEnvelope}
        handler={handler}
        value={signUpInfo.email}
        type="email"
        required={true}
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
