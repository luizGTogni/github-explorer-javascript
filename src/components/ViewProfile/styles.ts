import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 3.2rem 6.4rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.4rem;

  font-size: 1rem;

  @media (max-width: 1120px) {
    font-size: 1rem;

    grid-template-columns: none;
    grid-template-rows: 1fr minmax(20rem, auto);
  }

  @media (max-width: 620px) {
    font-size: 0.9rem;
  }

  @media (max-width: 580px) {
    font-size: 0.8rem;
  }

  @media (max-width: 510px) {
    margin: 3.2rem 3.2rem 0;
  }
`;