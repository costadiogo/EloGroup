import React from 'react';
import logo from '../../assets/logo.png';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <img src={logo} alt="logo" />
      <a href="https://elogroup.com.br/sobre-nos/">SOBRE NÓS</a>
      <a href="https://elogroup.com.br/#o-que-fazemos">O QUE FAZEMOS</a>
      <a href="https://elogroup.com.br/#industria">INDÚSTRIAS</a>
      <a href="https://elogroup.gupy.io/">CARREIRAS </a>
      <a href="https://elogroup.com.br/contato/">CONTATO</a>
    </Nav>
  );
}
