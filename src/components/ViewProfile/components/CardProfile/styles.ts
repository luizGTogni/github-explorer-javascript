import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--white);
  border-radius: 8px;

  padding: 2.4rem 3.2rem;

  display: flex;
  flex-direction: column;

  & > div:first-child {
    display: flex;

    div.info-profile {
      margin-left: 1.6rem;

      h2 {
        font-size: 2.6em;
        font-weight: 500;

        @media (max-width: 510px) {
          font-size: 2em;
        }
       }

      p.username {
        color: var(--clr-primary-normal);
        font-size: 2.6em;

        @media (max-width: 510px) {
          font-size: 2em;
        }
      }

      p.bio {
        font-size: 1.8em;
        font-weight: 300;
        
        margin-top: 1.6rem;

        @media (max-width: 510px) {
          font-size: 1.4em;
        }

        @media (max-width: 510px) {
          font-size: 1.8em;
        }
      }

      @media (max-width: 425px) {
        margin-left: 0;
        margin-top: 1.6rem;
      }
    }

    @media (max-width: 425px) {
      flex-direction: column;
    }
  }

  & > div + div {
    margin-top: 3.2rem;
    font-size: 1.8em;

    p + p {
      margin-top: 0.8rem;
    }

    span {
      font-weight: 300;
    }

    @media (max-width: 510px) {
      font-size: 1.8em;
      margin-top: 1.6rem;
    }

    @media (max-width: 425px) {
      font-size: 1.4em;
    }
  }
`;