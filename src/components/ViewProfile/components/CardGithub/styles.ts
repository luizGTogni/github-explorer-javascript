import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--white);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  padding: 0 6.4rem;
`;

export const GroupLabel = styled.div`
  display: flex;

  @media (max-width: 580px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.6rem;
  }
`;