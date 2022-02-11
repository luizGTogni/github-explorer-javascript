import styled, { css } from "styled-components";

interface Props {
  isFocus: boolean;
}

export const Wrapper = styled.div<Props>`
  width: 48rem;
  height: 3.2rem;

  background-color: var(--white);
  border-radius: 1.6rem;
  box-shadow: var(--box-shadow);

  display: flex;

  cursor: text;

  ${props => {
    if (props.isFocus) {
      return css`outline: 2px solid var(--clr-primary-normal);`;
    }
  }}

  @media (max-width: 900px) {
    width: 60%;
    min-width: 28rem;
  }

  img {
    margin: 0.8rem 0;
    margin-left: 1.6rem;
  }

  input {
    width: 100%;
    margin-left: 0.8rem;

    border-radius: 1.6rem;
    font-size: 1.4rem;
    font-weight: 400;

    &::placeholder {
    font-weight: 300;
    font-size: 1.2rem;
    }
  }
`;