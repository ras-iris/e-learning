import "../../assets/scss/exterior.scss";

// Import Components
import FormHeader from "../../components/FormHeader/FormHeader";
import HeroTitle from "../../components/HeroTitle/HeroTitle";

// React Step Wizard
import StepWizard from "react-step-wizard";
import Button from "../../components/Button/Button";
import SignupStep1 from "./SignupStep1";
import { useNavigate } from "react-router-dom";
import SignupStep2 from "./SignupStep2";
import { useState } from "react";

// import logic
import useSignupAPI from "./useSignupAPI";

const Signup = () => {
  // input and submit handler
  const { signUpInfo, handleInputChange, handleSubmit } = useSignupAPI();

  // react step wizard
  const nav = useNavigate();

  const [wizard, setWizard] = useState<any>();

  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="exterior-page signup-page">
      <HeroTitle />
      <div className="right-side">
        <div className="content">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <FormHeader formHeading="Inscription" />
            <StepWizard
              className="wizard"
              instance={setWizard}
              onStepChange={(e) => setActiveStep(e.activeStep)}
            >
              <SignupStep1
                nextStep
                signUpInfo={signUpInfo}
                handler={handleInputChange}
              />
              <SignupStep2
                signUpInfo={signUpInfo}
                handler={handleInputChange}
                handleSubmit={handleSubmit}
              />
              {/* <SignupStep3 /> */}
            </StepWizard>
            <div className="dots">
              {[...Array(wizard?.totalSteps)].map((e, i) => (
                <div
                  key={i}
                  className={
                    "step " +
                    (i === activeStep - 1 || i < activeStep ? "active " : "")
                  }
                  onClick={() => {
                    if (i < activeStep) wizard.goToStep(i + 1);
                  }}
                ></div>
              ))}
            </div>
          </form>
          <div className="divider"></div>
          <p>Vous avez d??j?? un compte ?</p>
          <Button
            text="Se connecter"
            onClick={() => nav("/login")}
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
