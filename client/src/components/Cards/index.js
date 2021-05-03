import React from 'react';
import history from '../../services/history';
import { Container } from './styled';

export default function Card() {
  history.push('/register');
  return (
    <Container>
      <div className="org">
        <p>Org. Internacionais</p>
      </div>
      <div className="ind-farm">
        <p>Ind. Farm LTDA</p>
      </div>
    </Container>
  );
}
