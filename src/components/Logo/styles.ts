import styled from "styled-components";

export const Wrapper = styled.h1`
  font-size: 4rem;
  font-weight: 300;

  @media (max-width: 980px) {
    font-size: 3.2rem;
  }

  @media (max-width: 720px) {
    font-size: 3.6rem;
  }

  @media (max-width: 400px) {
    font-size: 3.4rem;
  }

  @media (max-width: 360px) {
    font-size: 3rem;
  }

  @media (max-width: 320px) {
    font-size: 2.8rem;
  }

  span {
    color: var(--clr-primary-normal);
    font-weight: bold;
    text-shadow: var(--text-shadow);
  }
`;