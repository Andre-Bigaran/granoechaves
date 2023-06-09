import React, { useState } from "react";
import styles from "./styles";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário de contato
    console.log("Nome:", name);
    console.log("Sobrenome:", sobrenome);
    console.log("E-mail:", email);
    console.log("Mensagem:", message);
    // Limpar os campos após o envio do formulário
    setName("");
    setSobrenome("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name"></label>
        <input
          style={styles.inputContact}
          type="text"
          id="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="sobrenome"></label>
        <input
          style={styles.inputContact}
          type="text"
          id="sobrenome"
          placeholder="Sobrenome"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="email"></label>
        <input
          style={styles.inputContact}
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message"></label>
        <textarea
          style={styles.inputContact}
          id="message"
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
