import styled from "styled-components";

export const UserFollowContainer = styled.div`
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

    button {
      border: 0;
      background: transparent;
    }

    h3 {
      display: flex;
      align-items: center;
      justify-content: space-between;

      font-size: 1.1rem;
      font-weight: bold;
      margin-bottom: 0.5rem;

      span {
        width: 10rem;
      }

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

      img {
        margin-left: -5rem;
        width: 4rem;
        border-radius: 4rem;
        border: 3px solid #fff;
      }
    }
  }
`;

export const UserFollowDiv = styled.div`
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
