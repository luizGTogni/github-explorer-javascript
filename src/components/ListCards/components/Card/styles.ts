import styled from "styled-components";

export const Wrapper = styled.a`
  width: 100%;
  height: 22rem;
  padding: 1.6rem;

  background-color: var(--gray-200);
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: var(--box-shadow);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  
  transition: transform 300ms;

  h2 {
    font-size: 1.8em;
    font-weight: 500;
    color: var(--clr-primary-normal);
  }

  > p {
    margin: 2.4rem 0;

    font-size: 1.8em;
    font-weight: 300;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 420px) {
    height: 16rem;

    > p {
      margin: 1.6rem 0;
    }
  }

  @media (max-width: 385px) {
    height: 18rem;

    > p {
      margin: 0.8rem 0;
    }
  }
`;


export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 2em;
    font-weight: 800;
    color: var(--clr-primary-dark);
  }

  p {
    font-size: 1em;
    color: var(--clr-primary-normal);

    span {
      margin-left: 0.8rem;
      font-size: 2.2em;
      font-weight: 300;
    }
  }
`;

