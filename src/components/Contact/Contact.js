import React, { useState } from 'react';
import { db } from '../../utils/firebase';
import { Formulario } from './Contact.styles';

const Contact = () => {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    db.collection('contacts')
      .add({
        nome: nome,
        email: email,
      })
      .then(() => {
        alert('cadastro feito');
      })
      .catch((error) => {
        alert('mensagem não enviada');
      });

    setNome('');
    setEmail('');
  }

  return (
    <Formulario onSubmit={handleSubmit}>
      <label>Nome</label>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <label>Digite seu melhor e-mail:</label>
      <input
        type="text"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button>Cadastrar</button>
    </Formulario>
  );
};

export default Contact;
