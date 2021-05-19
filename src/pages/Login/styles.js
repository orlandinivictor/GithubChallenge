import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  input {
    width: 12rem;

    padding: 0.7rem 0.8rem;
    margin: 2rem 0 0.7rem;

    border: 0;
    border-radius: 8px;
  }

  button {
    width: 12rem;
    background: #ffce00;

    padding: 0.7rem 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 8px;

    font-weight: bold;

    span {
      margin-right: 0.5rem;
    }
  }
`;
