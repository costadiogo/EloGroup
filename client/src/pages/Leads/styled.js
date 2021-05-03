import styled from 'styled-components';
import { primaryColor, successColor } from '../../config/colors';

export const Container = styled.section`
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
  background-color: ${primaryColor};

  header {
    display: flex;
    padding: 30px;
    flex-direction: row;
  }
  header ul h1 {
    display: inline-block;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 35px;
    font-weight: bold;
  }

  button {
    display: flex;
    justify-content: space-between;
    margin-left: 35px;
    font-size: 20px;
    background-color: ${successColor};
    border-radius: 10px;
    border: 0;
    cursor: pointer;
  }
`;
