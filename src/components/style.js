import styled from "styled-components";

export const Container = styled.div`
  padding: 1em;

  & > form {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 780px) {
      flex-direction: column;
    }

    & > input {
      margin: 0 0.5em;
      padding: 0.88em;
      font-size: 1em;
      font-weight: 600;
      color: #fff;
      background: transparent;
      border: none;
      border-bottom: 2px solid #fff;
      outline: none;

      @media (max-width: 780px) {
        display: block;
        margin: 1em auto;
      }
    }

    & > button {
      padding: 1em;
      font-size: 1em;
      font-weight: bold;
      text-transform: uppercase;
      color: #fff;
      background: transparent;
      border: none;
      cursor: pointer;

      @media (max-width: 780px) {
        font-size: 1.6em;
        padding: 0.5em;
        margin: auto;
      }
    }
  }
`;
