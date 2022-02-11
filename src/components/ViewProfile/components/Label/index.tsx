import { Wrapper } from "./styles";

interface LabelProps {
  title: string;
  value: string;
}

const Label = ({ title, value }: LabelProps) => {
  return (
    <Wrapper>
      <p>{title}</p>
      <p>{value}</p>
    </Wrapper>
  );
}

export default Label;