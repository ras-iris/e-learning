import "./HeroTitle.style.scss";
import decoration from "../../assets/images/login-decoration.svg";

const HeroTitle = () => {
  return (
    <div className="left-side">
      <h1>
        <div>Tech JS</div>
        E-Learning
      </h1>
      <div className="decoration">
        <img src={decoration} alt="" />
      </div>
    </div>
  );
};

export default HeroTitle;
