import { Wrapper } from "./styles";
import { Icon } from "../";

interface ButtonPros {
  src: string;
  alt: string;
  size: number;
  value: string;
  onClick: () => void;
}

const Button = ({ src, alt, size, value, onClick }: ButtonPros) => {
  return (
    <Wrapper onClick={onClick}>
      <Icon src={src} alt={alt} size={size} />
      <span>{value}</span>
    </Wrapper>
  );
}

export default Button;