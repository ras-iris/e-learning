import "./Button.style.scss";
import { IconType } from "react-icons";

type ButtonProps = {
  Icon?: IconType;
  iconPosition?: "left" | "right";
  onClick: Function | null;
  type?: "button" | "submit" | "reset";
  text: string;
  variant?: "primary" | "secondary" | "purple";
};

const Button = ({
  Icon,
  iconPosition,
  onClick,
  text,
  type,
  variant,
}: ButtonProps) => {
  // setting default type
  type = type ? type : "button";
  variant = variant ? variant : "primary";
  iconPosition = iconPosition ? iconPosition : "left";

  const setUpClassName = () => {
    let className: string = "";
    switch (variant) {
      case "primary":
        className = "btn";
        break;
      case "secondary":
        className = "btn btn--secondary";
        break;
      case "purple":
        className = "btn btn--purple";
        break;
      default:
        break;
    }

    return className;
  };

  // Button Icon
  const BtnContents = () => {
    if (Icon) {
      if (iconPosition === "left") {
        return (
          <>
            {Icon ? <Icon /> : <></>}
            {text}
          </>
        );
      }
      return (
        <>
          {text}
          {Icon ? <Icon /> : <></>}
        </>
      );
    }
    return <>{text}</>;
  };

  return (
    <button
      type={type}
      className={setUpClassName()}
      onClick={type === "submit" ? (e) => onClick?.(e) : () => onClick?.()}
    >
      <BtnContents />
    </button>
  );
};

export default Button;
