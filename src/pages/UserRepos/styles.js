import styled from "styled-components";

export const UserReposContainer = styled.div`
  margin-top: 4rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fff;

  overflow: auto;

  div {
    width: 30rem;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #7070705a;

    font-size: 0.8rem;

    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 0.5rem;

      &::before {
        content: "";
        width: 0.4rem;
        height: 1.7rem;
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        background: #ffce00;
        position: relative;
        transform: translateX(-200%);
      }
    }

    span {
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const UserReposDiv = styled.div`
  height: calc(100vh - 9rem);
`;

export const Header = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;

  padding: 1rem 5rem;

  background: #1f1f1f;

  button {
    border: 0;
    background: transparent;
  }

  span {
    width: 100%;
    text-align: center;
  }
`;
