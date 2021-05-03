import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    font-weight: bold;
    margin-top: 30px;
    margin-left: 10px;
    margin-right: 10px;
  }

  input {
    height: 40px;
    font-size: 18px;
    padding: 0 10px;
    border: 1px solid #282c34;
    border-radius: 4px;
    margin-top: 5px;

    &:focus {
      border: 1px solid #00bfff;
    }
  }

  button {
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 10px;
  }

  button:hover {
    filter: brightness(90%);
  }
  img {
    display: flex;
    margin-left: 5px;
    margin-top: 5px;
    width: 70px;
    height: 70px;
  }
`;
