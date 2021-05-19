import styled from "styled-components";

export const NavContainer = styled.nav`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  padding: 0.5rem 0;

  background: #fff;
  color: #a5a5a5;

  border-radius: 1rem 1rem 0 0;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  li {
    list-style: none;

    button {
      border: 0;
      background: transparent;
      color: #a5a5a5;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .active {
      color: #000;
    }
  }
`;
