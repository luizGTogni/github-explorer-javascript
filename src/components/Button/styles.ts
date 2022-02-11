import styled from "styled-components";

export const Wrapper = styled.button`
  width: 24rem;
  height: 4.8rem;

  background-color: var(--gray-200);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  font-size: 2em;
  text-align: center;

  transition: transform 300ms, box-shadow 300ms;

  span {
    margin-left: 0.8rem;
  }

  &:hover {
    transform: scale(0.95);
    box-shadow: none;
  }

  @media (max-width: 620px) {
    width: 100%;
  }
`;