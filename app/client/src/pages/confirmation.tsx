import decoration from "../assets/images/login-decoration.svg";
// Import Icons
import { MdOutlineMailOutline } from "react-icons/md"
import { HiOutlineKey } from "react-icons/hi";

// Import Components
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput/TextInput";
import FormHeader from "../components/FormHeader/FormHeader";
import Button from "../components/Button/Button";

// Import logic
import useLoginAPI from "./Login/useLoginAPI";

import StepWizard from "react-step-wizard";

const ResetPwd = () => {
  const { userLoginInfo, handleSubmit, handleInputChange } = useLoginAPI();
  return (
    <div className="login-page">
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
          <form onSubmit={(e) => handleSubmit(e)}>
            <FormHeader formHeading="Connexion" formSubHeading="" />
            <TextInput
              label="Mot de passe"
              placeHolder="Code de confirmation"
              errorMessage=""
              name="password"
              InputIcon={HiOutlineKey}
              handler={handleInputChange}
              value={userLoginInfo.password}
              type="password"
            />

           <Link to="" /> <Button
              text="Confirmer"
              onClick={null}
              type="submit"
              className=""
            />
          </form>
          

        </div>
      </div>
    </div>
  )
}

export default ResetPwd