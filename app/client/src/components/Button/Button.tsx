import './Button.style.scss'


type ButtonProps = {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  className: string;
  onClick: Function | null;
  icon?: any
};

const Button = ({ text, onClick, type, className, icon }: ButtonProps) => {
  return (
    <button
      type={type}
      className={"btn " + className}
      onClick={() => onClick?.()}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
