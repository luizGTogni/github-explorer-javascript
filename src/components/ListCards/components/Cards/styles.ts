import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2.4rem 3.2rem;

  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));

  @media (max-width: 510px) {
    grid-template-columns: none;
    grid-template-rows: 1fr;
  }
`;