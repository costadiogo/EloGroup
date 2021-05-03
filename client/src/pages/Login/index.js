/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import history from '../../services/history';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    history.push('/leads');
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="log" />
        <label htmlFor="nome">
          Nome
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
        </label>
        <label htmlFor="confirmPassword">
          Confirme a senha
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirme a senha"
          />
        </label>
        <button type="submit">Registre se </button>{' '}
      </Form>
    </Container>
  );
}
