import styled from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryDarkColor};
  margin-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${primaryColor};
    margin: 5px;
    padding: 10px 40px;
    align-items: space-around;
    margin-left: 70px;
    font-weight: bold;
    border-radius: 4px;
  }

  a:hover {
    color: ${primaryDarkColor};
    background: #0197f6;
    box-shadow: 0 0 10px #0197f6, 0 0 30px #0197f6, 0 0 60px #0197f6;
  }
  img {
    width: 100px;
    height: 100px;
    margin-top: 2px;
  }
`;
