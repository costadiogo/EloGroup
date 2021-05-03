import styled from 'styled-components';

export const Form = styled.form`
  max-width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  border: 1px solid;
  margin-top: 45px;
  margin-left: 25px;

  label {
    max-width: 400px;
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
    justify-content: flex-start;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 30px;
  }

  button:hover {
    filter: brightness(90%);
  }
`;
