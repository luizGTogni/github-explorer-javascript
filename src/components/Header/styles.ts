import styled from "styled-components";

export const Wrapper = styled.div`
  height: 6.4rem;
  margin: 1.6rem 6.4rem 0.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 720px) {
    height: 9.8rem;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 510px) {
    margin: 1.6rem 3.2rem 2.4rem;
  }
`;

export const HLine = styled.div`
  border-bottom: 1px solid var(--gray-500);
`;

