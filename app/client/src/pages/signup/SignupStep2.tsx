import Button from "../../components/Button/Button";
import { FaGraduationCap } from "react-icons/fa";
import { useState } from "react";
import Selector from "../../components/Selector/Selector";

const SignupStep2 = ({ nextStep }: { nextStep: any }) => {
  const [mention, setMention] = useState("")
  const [Filiere, setFiliere] = useState("")
  return (
    <div className="exterior-step">
      <p>Choisissez votre filière</p>
      <Selector
        label="Mention :"
        name="mention-select"
        LabelIcon={<FaGraduationCap />}
        handler={setMention}
        placeHolder={"Informatique"}
        value={mention}
      />
  
      <Selector
        label="Filière :"
        name="mention-select"
        LabelIcon={<FaGraduationCap />}
        handler={setFiliere}
        placeHolder={"Informatique"}
        value={Filiere}
      />

      <Button
        className="submit"
        onClick={nextStep}
        text="Suivant"
        type="button"
      />
    </div>
  )
}

export default SignupStep2