import * as s from "./ButtonStyles"
interface ButtonProps {
    text?: string,
    children: React.ReactNode,
  onClick: () => void;
}

const Button = ({children,onClick}: ButtonProps) => {
  return (
    <s.Btn onClick={onClick}>
        {children}
    </s.Btn>
  );
};

export default Button;