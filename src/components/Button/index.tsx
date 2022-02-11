import { Wrapper } from "./styles";
import { Icon } from "../";

interface ButtonPros {
  src: string;
  alt: string;
  size: number;
  value: string;
}

const Button = ({ src, alt, size, value }: ButtonPros) => {
  return (
    <Wrapper>
      <Icon src={src} alt={alt} size={size} />
      <span>{value}</span>
    </Wrapper>
  );
}

export default Button;