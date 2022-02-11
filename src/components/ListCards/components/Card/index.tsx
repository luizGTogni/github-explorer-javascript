import { Repositories } from "../../../../interfaces"
import { Wrapper, Footer } from "./styles";

import { Icon } from "../../../";

import StarIcon from "../../../../assets/images/star-icon.svg";

interface CardProps {
  data: Repositories;
}

const Card = (props: CardProps) => {
  const repository = props.data;

  return (
    <Wrapper href={repository.html_url} target="_blank">
      <h2>{repository.name}</h2>

      <p>{repository.description}</p>

      <Footer>
        <h3>{repository.language}</h3>

        <p>
          <Icon src={StarIcon} alt="número de estrelas" size={24} />
          <span>{repository.stargazers_count}</span>
        </p>
      </Footer>
    </Wrapper>
  );
}

export default Card;