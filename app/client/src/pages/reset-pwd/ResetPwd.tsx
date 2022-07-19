import "../../assets/scss/exterior.scss";
import decoration from "../../assets/images/login-decoration.svg";

// Import Components
import FormHeader from "../../components/FormHeader/FormHeader";

// React Step Wizard
import StepWizard from "react-step-wizard";
import ResetStep1 from "./Reset-step1";
import ResetStep2 from "./Reset-step2";
import ResetStep3 from "./Reset-step3";

const ResetPwd = () => {

  return (
    <div className="exterior-page reset-page">
      <div className="left-side">
        <h1>
          <div>Tech JS</div>
          E-Learning
        </h1>
        <div className="decoration">
          <img src={decoration} alt="" />
        </div>
      </div>
      <div className="right-side">
        <div className="content">
          <form onSubmit={(e) => e.preventDefault()}>
            <FormHeader formHeading="Récupération de mot de passe" formSubHeading="" />
            <StepWizard className="wizard" >
              <ResetStep1 nextStep /> 
              <ResetStep2 nextStep />
              <ResetStep3 />
            </StepWizard>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPwd