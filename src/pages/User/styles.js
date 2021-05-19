import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fff;

  img {
    z-index: 10;
    margin: 4rem 0 3rem;
    width: 8rem;
    border-radius: 4rem;
    border: 3px solid #fff;
  }
`;

export const Header = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;

  padding: 2rem 10rem 5rem 7.2rem;

  background: #1f1f1f;

  display: flex;
  justify-content: space-between;

  h3 {
    margin-left: 2.8rem;
  }

  button {
    border: 0;
    background: transparent;
    color: #fff;

    display: flex;
    align-items: center;

    span {
      margin-right: 0.5rem;
    }
  }
`;

export const UserInfo = styled.div`
  width: 40rem;

  font-size: 0.9rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;

    & > span {
      &::before {
        content: "";
        width: 0.4rem;
        height: 2.2rem;
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        background: #ffce00;
        position: absolute;
        transform: translateX(-200%);
      }
    }
  }
`;

export const Infos = styled.div`
  width: 100%;
  background: #5252525d;

  display: flex;
  justify-content: space-around;

  margin: 2rem 0;
  padding: 0.5rem 0;

  button {
    width: 6rem;
    border: 0;
    background: transparent;
    color: #fff;
  }
  h2 {
    text-align: center;
    margin-bottom: -0.2rem;
  }
`;
