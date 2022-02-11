import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1.6rem 6.4rem 0;

  font-size: 1rem;

  background-color: var(--white);

  @media (max-width: 510px) {
    margin: 1.6rem 3.2rem 0;
    font-size: 0.9rem;
  }

  @media (max-width: 420px) {
    font-size: 0.75rem;
  }

  @media (max-width: 385px) {
    font-size: 0.65rem;
  }
`;

export const Tabs = styled.div`
  display: flex;
`;

export const Loading = styled.h2`
  font-size: 2em;
  margin: 1.6rem;
`;