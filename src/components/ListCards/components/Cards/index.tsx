import { ReactNode } from "react";
import { Wrapper } from "./styles";

interface CardsProps {
  children: ReactNode;
}

const Cards = ({ children }: CardsProps) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default Cards;