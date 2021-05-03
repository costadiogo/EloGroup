/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { MdAdd } from 'react-icons/md';
import Card from '../../components/Cards';
import { Container } from './styled';

export default function Leads() {
  return (
    <Container>
      <header>
        <h2>Board de Leads</h2>
        <button type="button">
          <MdAdd size={10} color="#0197F6" />
        </button>
        <ul>
          <h1>Cliente em Potencial</h1>
          <h1>Dados Confirmados</h1>
          <h1>Reunião agendada</h1>
        </ul>
      </header>
      <ul>
        <Card />
      </ul>
    </Container>
  );
}
