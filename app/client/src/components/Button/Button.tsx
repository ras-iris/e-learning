import './Button.style.scss'


type ButtonProps = {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  className: string;
  onClick: Function | null;
};

const Button = ({ text, onClick, type, className }: ButtonProps) => {
  return (
    <button
      type={type}
      className={"btn " + className}
      onClick={() => onClick?.()}
    >
      {text}
    </button>
  );
};

export default Button;
