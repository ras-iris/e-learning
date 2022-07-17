import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const ResetStep3 = () => {
  const nav = useNavigate()
  return (
    <div className="exterior-step">
      <p className="tip">Mot de passe renouvellé avec succès !</p>
      <Button
        text="Se connecter"
        onClick={() => nav('/login')}
        type="button"
        className="submit"
      />
    </div>
  )
}

export default ResetStep3