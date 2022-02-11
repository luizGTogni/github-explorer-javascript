import styled, { css } from "styled-components";

interface DivPros {
  isActive: boolean;
}

export const Wrapper = styled.div<DivPros>`
  width: 100%;
  
  border: 1px solid var(--gray-500);
  box-shadow: var(--box-shadow-tab);
  font-size: 2.8em;
  font-weight: 300;
  text-align: center;

  padding: 0.8rem 0;

  cursor: pointer;

  ${props => {
    if (props.isActive) {
      return css`
        font-weight: 400;
        color: var(--clr-primary-normal);
        box-shadow: var(--box-shadow-tab-active);
      `;
    }
  }}

  &:hover {
    font-size: 2.6em;
    font-weight: 400;
    color: var(--clr-primary-normal);
    box-shadow: var(--box-shadow-tab-active);
  }

  @media (max-width: 560px) {
    font-size: 2.4em;
  }
`;