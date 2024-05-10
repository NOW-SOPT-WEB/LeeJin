import * as s from "./ButtonStyles"
interface ButtonProps {
    text?: string,
    children: React.ReactNode,
}

const Button = ({children}: ButtonProps) => {
  return (
    <s.Btn>
        {children}
    </s.Btn>
  );
};

export default Button;