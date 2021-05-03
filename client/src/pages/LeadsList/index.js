/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import history from '../../services/history';
import { Form } from './styled';

export default function LeadsList() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    history.push('/leads');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="nome">
        Nome
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
      </label>
      <label htmlFor="phone">
        Telefone
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefone"
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
      <a href="/leads">
        <button type="submit">Salvar</button>
      </a>
    </Form>
  );
}
