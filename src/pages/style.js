import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  width: 60%;
  height: 100%;
  align-items: center;
  justify-items: center;
  justify-content: center;
  color: white;
  margin: auto;
  margin-top: 10em;
`;

export const Card = styled.div`
  width: 60%;
  height: 80%;
  max-height: 300px;
  padding: auto;
  text-align: center;
  background: #242625;
  border-radius: 10px;
  box-shadow: 25px 25px 50px #1b1c1b, -25px -25px 50px #2d302f;

  @media (max-width: 780px) {
    width: 100%;
  }

  & > div {
    width: 90%;
    height: 95%;
    background: #191a19;
    margin: 10px auto;
    border-radius: 1em;
    padding: 20px;
    cursor: pointer;
    box-shadow: 16px 16px 44px #0a0a0a, -16px -16px 44px #282a28;
    transition: 0.3s all ease-in-out;
    &:hover {
      margin-top: -10px;
    }
    & > p {
      color: #d4af37;
      font-size: 1.6em;
    }
    & > h1 {
      font-size: 3em;
    }
    & > h2 {
      font-size: 6em;
      display: flex;
      justify-content: center;

      & > span {
        font-size: 0.2em;
        position: relative;
        top: 1em;
      }
    }
  }
`;

export const MinMax = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1em auto;

  & > div {
    display: flex;
    flex-direction: column;

    & > p {
      color: #fff;
      font-size: 1.2em;
    }
    & > span {
      font-size: 2em;
      color: #d4af37;
      font-weight: 600;
    }
  }
`;
