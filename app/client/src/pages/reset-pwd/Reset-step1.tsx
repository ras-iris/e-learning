import Button from "../../components/Button/Button";

const ResetStep1 = ({ nextStep }: { nextStep: any }) => {
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
