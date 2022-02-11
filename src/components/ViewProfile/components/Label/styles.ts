import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 2.6em;
  font-weight: 300;

  & + div {
    margin-left: 3.2rem;
  }

  & > p:first-child {
    font-weight: 500;
  }

  @media (max-width: 670px) {
    font-size: 2em;
  }

  @media (max-width: 580px) {
    width: 100%;

    & + div {
      margin-left: 0;
    }
  }
`;